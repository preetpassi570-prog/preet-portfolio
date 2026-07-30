import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://preet-portfolio-ten.vercel.app"),
  title: {
    default: "Preet Passi | Data Analyst Portfolio & Business Intelligence",
    template: "%s | Preet Passi | Data Analytics Portfolio",
  },
  description: "Explore the Data Analytics Portfolio of Preet Passi, a Data Analytics Engineer in India specializing in Python, SQL, Power BI, and Excel. View interactive Business Dashboards and Data Storytelling projects.",
  keywords: [
    "Data Analyst Portfolio", "Data Analytics Portfolio", "Data Analytics Engineer", 
    "Python Data Analyst", "SQL Data Analyst", "Power BI Portfolio", "Excel Data Analyst", 
    "Business Intelligence Portfolio", "Data Visualization Portfolio", "Dashboard Developer", 
    "Data Analytics India", "Freelance Data Analyst", "Analytics Engineer", "Data Engineer Portfolio"
  ],
  authors: [{ name: "Preet Passi", url: "https://preet-portfolio-ten.vercel.app" }],
  creator: "Preet Passi",
  publisher: "Preet Passi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://preet-portfolio-ten.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://preet-portfolio-ten.vercel.app",
    title: "Preet Passi | Data Analyst Portfolio & Business Dashboards",
    description: "Explore the Data Analytics Portfolio of Preet Passi, a Data Analytics Engineer specializing in Python, SQL, Power BI, and Data Visualization.",
    siteName: "Preet Passi | Data Analyst Portfolio",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 600,
        alt: "Preet Passi Data Analyst Portfolio Cover Image",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preet Passi | Data Analyst Portfolio",
    description: "Explore the Data Analytics Portfolio of Preet Passi, an Analytics Engineer specializing in Python, SQL, and Power BI Dashboards.",
    creator: "@preetpassi",
    images: ["/icon.png"],
  },
};

import StructuredData from "../components/seo/StructuredData";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <StructuredData />
      </head>
      <body className={`dark-theme ${inter.variable} ${orbitron.variable}`} suppressHydrationWarning>
        <canvas id="webgl-bg"></canvas>
        
        <div id="mouse-glow" className="mouse-glow"></div>

        <div id="loader-overlay" className="loader-wrapper">
          <div className="bg-gradient-mesh"></div>
          <div className="bg-noise"></div>
          <div className="bg-grid"></div>
          <div className="bg-dots"></div>
          
          <svg className="bg-graph-lines" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
            <path className="graph-line line-1" d="M -10 80 Q 25 20, 50 60 T 110 40" fill="none" />
            <path className="graph-line line-2" d="M -10 60 Q 30 90, 60 30 T 110 70" fill="none" />
          </svg>

          <canvas id="particles-canvas" className="particles-canvas"></canvas>

          <main className="loader-content">
            <div className="logo-container">
              <svg className="analytics-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle className="ring-outer" cx="50" cy="50" r="46" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                <circle className="ring-inner" cx="50" cy="50" r="38" fill="none" stroke="rgba(217, 20, 20, 0.2)" strokeWidth="1" strokeDasharray="2 6"/>
                <g className="bar-chart">
                  <rect className="bar bar-1" x="32" y="60" width="3" height="12" rx="1.5" fill="#ffffff" opacity="0.3"/>
                  <rect className="bar bar-2" x="42" y="50" width="3" height="22" rx="1.5" fill="#ffffff" opacity="0.5"/>
                  <rect className="bar bar-3" x="52" y="55" width="3" height="17" rx="1.5" fill="#ffffff" opacity="0.7"/>
                  <rect className="bar bar-4" x="62" y="38" width="3" height="34" rx="1.5" fill="var(--accent-red)" />
                </g>
                <path className="trend-line" d="M28 62 C 38 62, 45 42, 52 48 C 58 52, 65 30, 72 26" fill="none" stroke="var(--accent-red)" strokeWidth="2" strokeLinecap="round"/>
                <circle className="trend-dot" cx="72" cy="26" r="2.5" fill="#ffffff"/>
              </svg>
            </div>

            <h1 className="loader-title">DATA<span className="text-accent">ANALYTICS</span></h1>
            <h2 className="loader-subtitle">Turning Data Into Decisions</h2>
            
            <div className="glowing-divider">
              <div className="divider-shine"></div>
            </div>

            <div className="loading-module">
              <div className="loading-text" id="loader-status">LOADING...</div>
              
              <div className="loading-bar-wrapper glass-effect">
                <div id="progress-fill" className="loading-bar-fill">
                  <div className="fill-shine"></div>
                </div>
              </div>
              
              <div id="loader-perc" className="loading-percentage">0%</div>
            </div>
          </main>
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
        <div id="chatbot-wrapper" style={{ position: 'fixed', zIndex: 9999, opacity: 0, pointerEvents: 'none' }}>
          <Chatbot />
        </div>
        
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="afterInteractive" />
        <div id="contact-toast" className="toast-hidden">
          <div className="toast-content">
            <span className="toast-icon" id="toast-icon"></span>
            <div className="toast-details">
              <h4 className="toast-title" id="toast-title">Message Sent Successfully!</h4>
              <p className="toast-desc" id="toast-desc">Thank you for contacting me. I&apos;ll reply as soon as possible.</p>
            </div>
          </div>
        </div>
        <Script src="/script.js" strategy="lazyOnload" />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-2Y45CPERNL" />
      </body>
    </html>
  );
}
