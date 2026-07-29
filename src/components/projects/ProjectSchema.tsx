import React from 'react';
import { Project } from '@/lib/projects';

interface ProjectSchemaProps {
  project: Project;
}

export default function ProjectSchema({ project }: ProjectSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": project.seoTitle || project.title,
    "description": project.seoDescription || project.shortDescription,
    "image": [
      `https://preet-portfolio-ten.vercel.app${project.featuredImage}`
    ],
    "datePublished": project.publishedDate,
    "dateModified": project.updatedDate,
    "author": {
      "@type": "Person",
      "name": "Preet Passi",
      "url": "https://preet-portfolio-ten.vercel.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Preet Passi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://preet-portfolio-ten.vercel.app/icon.png"
      }
    },
    "keywords": project.keywords.join(', '),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://preet-portfolio-ten.vercel.app/projects/${project.slug}`
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
