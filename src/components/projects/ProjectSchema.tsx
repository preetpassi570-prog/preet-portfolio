import React from 'react';
import { Project } from '@/lib/projects';

interface ProjectSchemaProps {
  project: Project;
}

export default function ProjectSchema({ project }: ProjectSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": project.schemaType || "CreativeWork",
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

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://preet-portfolio-ten.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://preet-portfolio-ten.vercel.app/#projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `https://preet-portfolio-ten.vercel.app/projects/${project.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
