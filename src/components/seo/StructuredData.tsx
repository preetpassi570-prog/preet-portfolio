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
        "description": "Professional Data Analyst specializing in SQL, Python, Power BI, Excel, and Tableau. Expert in turning complex datasets into clear, actionable business strategies.",
        "knowsAbout": [
          "Data Analysis", "SQL", "Python", "Power BI", "Tableau", "Microsoft Excel", "Business Intelligence", "Data Visualization", "Data Engineering"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Data Analyst"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Your University Name" // Placeholder
        },
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
        "name": "Preet Passi | Data Analyst Portfolio",
        "description": "Professional Data Analytics Portfolio of Preet Passi showcasing SQL, Python, Power BI, Excel, Tableau, Data Visualization, Dashboard Projects, and Business Intelligence work.",
        "publisher": {
          "@id": "https://preet-portfolio-ten.vercel.app/#person"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://preet-portfolio-ten.vercel.app/#organization",
        "name": "Preet Passi",
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
        "name": "Preet Passi | Data Analyst Portfolio",
        "description": "Professional Data Analytics Portfolio of Preet Passi showcasing SQL, Python, Power BI, Excel, Tableau, Data Visualization, Dashboard Projects, and Business Intelligence work.",
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
