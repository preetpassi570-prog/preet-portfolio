import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://preet-portfolio-ten.vercel.app"),
  title: {
    default: "Preet's Portfolio",
    template: "%s | Preet's Portfolio",
  },
  description: "Preet's personal portfolio, projects, and blog.",
  keywords: ["Preet", "Portfolio", "Web Developer", "Next.js", "React"],
  authors: [{ name: "Preet" }],
  creator: "Preet",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://preet-portfolio-ten.vercel.app",
    title: "Preet's Portfolio",
    description: "Preet's personal portfolio, projects, and blog.",
    siteName: "Preet's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preet's Portfolio",
    description: "Preet's personal portfolio, projects, and blog.",
    creator: "@preet",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://preet-portfolio-ten.vercel.app/#person",
      name: "Preet",
      url: "https://preet-portfolio-ten.vercel.app",
    },
    {
      "@type": "WebSite",
      "@id": "https://preet-portfolio-ten.vercel.app/#website",
      url: "https://preet-portfolio-ten.vercel.app",
      name: "Preet's Portfolio",
      publisher: {
        "@id": "https://preet-portfolio-ten.vercel.app/#person",
      },
    },
  ],
};

import Navbar from "../components/Navbar";
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;600;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <Script
          id="global-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className="dark-theme" suppressHydrationWarning>
        <canvas id="webgl-bg"></canvas>
        
        <div id="loader-overlay" className="premium-loader">
          <div className="premium-loader-content">
            <div className="premium-loader-pfp-container">
              <div className="premium-loader-pfp-glow"></div>
              <img src="/images/PFP.png" alt="Preet Passi" className="premium-loader-pfp" />
            </div>
            
            <div className="premium-loader-text">
              <div className="premium-loader-welcome">WELCOME</div>
              <h1 className="premium-loader-name">PREET PASSI</h1>
              <div className="premium-loader-subtitle">Data Analyst • AI Automation • Business Intelligence</div>
            </div>

            <div className="premium-loader-progress-section">
              <div className="premium-loader-status-container">
                <span className="loader-status" id="loader-status">Loading Portfolio...</span>
              </div>
              <div className="premium-loader-bar-container">
                <div className="premium-loader-bar-fill" id="progress-fill"></div>
              </div>
              <div className="premium-loader-percentage" id="loader-perc">0%</div>
            </div>
          </div>
        </div>

        <div id="app-container" style={{ opacity: 0, pointerEvents: 'none' }}>
          <Navbar />
          <main>
            {children}
          </main>
          <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', marginTop: '4rem', zIndex: 10, position: 'relative' }}>
            <p>&copy; {new Date().getFullYear()} Designed & Developed by Preet Passi. All rights reserved.</p>
          </footer>
        </div>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
        <div id="contact-toast" className="toast-hidden">
          <div className="toast-content">
            <span className="toast-icon" id="toast-icon"></span>
            <div className="toast-details">
              <h4 className="toast-title" id="toast-title">Message Sent Successfully!</h4>
              <p className="toast-desc" id="toast-desc">Thank you for contacting me. I'll reply as soon as possible.</p>
            </div>
          </div>
        </div>
        <script src="/script.js"></script>
        <Analytics />
      </body>
    </html>
  );
}
