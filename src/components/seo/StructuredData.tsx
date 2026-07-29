import React from 'react';

const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://preet-portfolio-ten.vercel.app/#person",
        "name": "Preet Passi",
        "url": "https://preet-portfolio-ten.vercel.app",
        "image": "https://preet-portfolio-ten.vercel.app/icon.png",
        "jobTitle": "Data Analyst",
        "sameAs": [
          "https://github.com/preetpassi", // Placeholder
          "https://linkedin.com/in/preetpassi", // Placeholder
          "https://pinterest.com/preetpassi" // Placeholder
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://preet-portfolio-ten.vercel.app/#website",
        "url": "https://preet-portfolio-ten.vercel.app",
        "name": "Preet's Portfolio",
        "description": "Preet's personal portfolio, projects, and blog.",
        "publisher": {
          "@id": "https://preet-portfolio-ten.vercel.app/#person"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://preet-portfolio-ten.vercel.app/#organization",
        "name": "Preet Passi Analytics",
        "url": "https://preet-portfolio-ten.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://preet-portfolio-ten.vercel.app/icon.png"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://preet-portfolio-ten.vercel.app/#webpage",
        "url": "https://preet-portfolio-ten.vercel.app",
        "name": "Preet's Portfolio - Data Analytics",
        "isPartOf": {
          "@id": "https://preet-portfolio-ten.vercel.app/#website"
        },
        "about": {
          "@id": "https://preet-portfolio-ten.vercel.app/#person"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData;
