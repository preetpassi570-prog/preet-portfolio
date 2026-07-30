import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';
import ProjectSchema from '@/components/projects/ProjectSchema';
import ProjectDetail from '@/components/projects/ProjectDetail';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    return {
      title: 'Project Not Found | Preet Passi',
    };
  }

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    keywords: project.keywords,
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
      url: `https://preet-portfolio-ten.vercel.app/projects/${project.slug}`,
      images: [
        {
          url: project.featuredImage,
          alt: project.title,
        },
      ],
      type: 'article',
      publishedTime: project.publishedDate,
      modifiedTime: project.updatedDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.seoTitle,
      description: project.seoDescription,
      images: [project.featuredImage],
    },
    alternates: {
      canonical: `https://preet-portfolio-ten.vercel.app/projects/${project.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectSchema project={project} />
      <ProjectDetail project={project} />
    </>
  );
}
