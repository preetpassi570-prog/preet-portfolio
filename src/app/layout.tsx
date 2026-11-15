import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-doodle",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFDF0",
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
  verification: {
    other: {
      "p:domain_verify": "f869c9029cf8c7d4b47caab138ec9903",
    },
  },
};

import StructuredData from "../components/seo/StructuredData";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";
import ThreeJsLoader from "../components/ThreeJsLoader";
import CartoonIntroLoader from "../components/CartoonIntroLoader";
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
      <body className={`light-theme ${inter.variable} ${plusJakarta.variable} ${caveat.variable}`} suppressHydrationWarning>
        <CartoonIntroLoader />
        <canvas id="webgl-bg"></canvas>
        
        <div id="mouse-glow" className="mouse-glow"></div>

        <div id="app-container" style={{ minHeight: '100vh', opacity: 1 }}>
          <Navbar />
          <main>
            {children}
          </main>
          <footer style={{ textAlign: 'center', padding: '2.5rem 0', color: 'var(--text-muted)', fontSize: '0.9rem', borderTop: '2px solid #1E1E1E', marginTop: '4rem', zIndex: 10, position: 'relative', background: '#FFFDF0' }}>
            <p>&copy; {new Date().getFullYear()} Designed &amp; Developed by Preet Passi. All rights reserved. | Helping People: Shivam Sharma</p>
          </footer>
        </div>

        <div id="chatbot-wrapper" style={{ position: 'fixed', zIndex: 9999 }}>
          <Chatbot />
        </div>
        
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="afterInteractive" />
        <ThreeJsLoader />
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
