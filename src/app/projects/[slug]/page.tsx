import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProjectBySlug, getAllProjectSlugs, Project } from '@/lib/projects';
import ProjectSchema from '@/components/projects/ProjectSchema';

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
      {/* UI layer not generated yet per user request. This is purely architecture and data setup. */}
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', paddingTop: '100px' }}>
        <h1>{project.title} (Architecture Ready)</h1>
      </div>
    </>
  );
}
