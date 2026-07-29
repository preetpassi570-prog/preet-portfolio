import { getPostBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Script from "next/script";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const p = await params;
  const post = await getPostBySlug(p.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
    alternates: {
      canonical: `/blog/${post.meta.slug}`,
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
      authors: ["Preet"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const p = await params;
  const post = await getPostBySlug(p.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    datePublished: post.meta.date,
    author: {
      "@type": "Person",
      name: "Preet",
    },
    description: post.meta.description,
  };

  return (
    <article className="prose dark:prose-invert max-w-none">
      <Script
        id="blog-posting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>{post.meta.title}</h1>
      <p className="text-gray-500">{post.meta.date}</p>
      {post.content}
    </article>
  );
}
