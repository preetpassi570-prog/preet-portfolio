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
      <body className="dark-theme">
        <canvas id="webgl-bg"></canvas>
        
        <div id="loader-overlay" className="cyber-os-loader">
          <canvas id="loader-bg-canvas"></canvas>
          <audio id="loading-sound" preload="auto"></audio>
          <div className="loader-scanlines"></div>
          
          <div className="hud-top-left">
            <span className="hud-label">AI STATUS</span>
            <span className="hud-value neon-red-blink">ONLINE</span>
          </div>
          
          <div className="hud-top-right">
            <span className="hud-label">SYSTEM CORE</span>
            <span className="hud-value">v3.0</span>
          </div>

          <div className="hud-bottom-left">
            <span className="hud-label">SYSTEM LOG</span>
            <span className="hud-value loader-status">INITIALIZING SECURE LINK...</span>
          </div>

          <div className="hud-bottom-right">
            <span className="hud-label">HARDWARE STATS</span>
            <span className="hud-value cyber-hardware-stats">CPU: 0% • GPU: STDBY • MEM: 32GB</span>
          </div>

          <div className="loader-center-core">
            <div className="loader-3d-container logo-float">
              <canvas id="loader-canvas"></canvas>
              <div className="holo-ring-outer"></div>
              <div className="holo-ring-inner"></div>
              <div className="holo-ring-mid"></div>
            </div>
            
            <div className="loader-title-container">
              <h4 className="loader-welcome-sub">WELCOME TO</h4>
              <div className="loader-welcome-main">PREET PASSI</div>
              <p className="loader-welcome-desc">DATA ANALYTICS • AI • AUTOMATION</p>
            </div>

            <div className="loader-progress-wrapper">
              <div className="loader-progress-container">
                <div className="loader-progress-bar">
                  <div className="loader-progress-fill" id="progress-fill">
                    <div className="progress-glow"></div>
                  </div>
                </div>
                <span className="loader-percentage" id="loader-perc">0%</span>
              </div>
            </div>
          </div>
          
          <div className="hud-footer-line">ESTABLISHING SECURE CONNECTION TO CORE DB...</div>
        </div>

        <div id="app-container" style={{ opacity: 0, pointerEvents: 'none' }}>
          <Navbar />
          <main>
            {children}
          </main>
        </div>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
        <script src="/script.js"></script>
        <Analytics />
      </body>
    </html>
  );
}
