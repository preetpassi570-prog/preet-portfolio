import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  meta: {
    slug: string;
    title: string;
    date: string;
    description: string;
  };
  content: React.ReactElement;
};

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const realSlug = slug.replace(/\.mdx$/, "");
    const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      return undefined;
    }
    
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

    const { frontmatter, content } = await compileMDX<{
      title: string;
      date: string;
      description: string;
    }>({
      source: fileContent,
      options: { parseFrontmatter: true },
    });

    return {
      meta: {
        ...frontmatter,
        slug: realSlug,
      },
      content,
    };
  } catch (error) {
    return undefined;
  }
}

export async function getAllPostsMeta() {
  if (!fs.existsSync(rootDirectory)) {
    return [];
  }
  
  const files = fs.readdirSync(rootDirectory);
  
  const posts = [];
  
  for (const file of files) {
    if (file.endsWith(".mdx")) {
      const post = await getPostBySlug(file);
      if (post) {
        posts.push(post.meta);
      }
    }
  }
  
  return posts.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}
