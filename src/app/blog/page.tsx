import { Metadata } from "next";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog",
    description: "Read the latest articles and tutorials from Preet.",
    alternates: {
      canonical: "/blog",
    },
  };
}

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Preet's Blog",
    url: "https://preet-portfolio-ten.vercel.app/blog",
  };

  return (
    <div>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>Blog</h1>
    </div>
  );
}
