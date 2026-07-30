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
        "jobTitle": "Data Analytics Engineer",
        "description": "Data Analytics Engineer and Freelance Data Analyst based in India, specializing in Python, SQL, Power BI, and Excel. Expert in Data Storytelling, Data Cleaning, and Business Analytics.",
        "knowsAbout": [
          "Data Analysis", "SQL Data Analyst", "Python Data Analyst", "Power BI Portfolio", "Microsoft Excel", "Business Intelligence Portfolio", "Data Visualization Portfolio", "Data Engineering", "Dashboard Developer"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Data Analyst"
        },
        "sameAs": [
          "https://github.com/preetpassi570-prog"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://preet-portfolio-ten.vercel.app/#website",
        "url": "https://preet-portfolio-ten.vercel.app",
        "name": "Preet Passi | Data Analyst Portfolio",
        "description": "Explore the Data Analytics Portfolio of Preet Passi, a Data Analytics Engineer specializing in Python, SQL, Power BI, and Data Visualization.",
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
        },
        "founder": {
          "@id": "https://preet-portfolio-ten.vercel.app/#person"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://preet-portfolio-ten.vercel.app/#webpage",
        "url": "https://preet-portfolio-ten.vercel.app",
        "name": "Preet Passi | Data Analyst Portfolio",
        "description": "Professional Data Analytics Portfolio of Preet Passi showcasing SQL, Python, Power BI, Excel, Tableau, Data Visualization, Dashboard Projects, and Business Intelligence work.",
        "inLanguage": "en",
        "isPartOf": {
          "@id": "https://preet-portfolio-ten.vercel.app/#website"
        },
        "about": {
          "@id": "https://preet-portfolio-ten.vercel.app/#person"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://preet-portfolio-ten.vercel.app/icon.png"
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
