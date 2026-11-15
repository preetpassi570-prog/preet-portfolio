import React from 'react';
import dynamic from 'next/dynamic';

const HeroVisualCockpit = dynamic(() => import('../components/HeroVisualCockpit'));
const KineticMarquee = dynamic(() => import('../components/KineticMarquee'));
const GenZBentoSection = dynamic(() => import('../components/GenZBentoSection'));
const DataStudioSection = dynamic(() => import('../components/DataStudioSection'));
const ProjectsSection = dynamic(() => import('../components/ProjectsSection'));
const HireMeSection = dynamic(() => import('../components/HireMeSection'));
const CertificatesSection = dynamic(() => import('../components/CertificatesSection'));
const AboutSection = dynamic(() => import('../components/AboutSection'));
const ContactSection = dynamic(() => import('../components/ContactSection'));

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services do you offer as a Freelance Data Analyst in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "I offer comprehensive data solutions including Data Cleaning, Data Storytelling, Business Analytics, and building interactive Business Dashboards using Power BI, Excel, SQL, and Python."
                }
              },
              {
                "@type": "Question",
                "name": "Can you build a Power BI Portfolio or KPI Dashboard for my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I am a Dashboard Developer specializing in KPI Dashboards, Power BI Projects, and Data Visualization tailored for business intelligence and actionable insights."
                }
              }
            ]
          })
        }}
      />

      <section id="home" className="hero-section bespoke-hero">
        <div className="hero-content">
          {/* Eyebrow Tag */}
          <div className="bespoke-eyebrow">
            <span className="eyebrow-pulsar"></span>
            <span className="eyebrow-text">PREET PASSI • ANALYTICS ENGINEER • DELHI, INDIA</span>
          </div>
          
          {/* Big Bold Original Headline */}
          <h1 className="hero-main-title bespoke-title">
            Transforming Complex Data Into <span className="highlight-tag">Actionable Revenue</span> &amp; Executive Clarity.
          </h1>
          
          <p className="hero-desc bespoke-desc">
            I engineer high-performance Python &amp; SQL pipelines and design custom Power BI &amp; Excel dashboards that eliminate messy reporting friction, uncover hidden profit leaks, and give founders total visibility.
          </p>

          {/* Key Value Badges */}
          <div className="bespoke-stats-row">
            <div className="stat-pill">
              <i className="fa-solid fa-trophy"></i>
              <span><strong>8+</strong> Production Projects</span>
            </div>
            <div className="stat-pill">
              <i className="fa-solid fa-database"></i>
              <span><strong>4.8M+</strong> Rows Wrangled</span>
            </div>
            <div className="stat-pill">
              <i className="fa-solid fa-bullseye"></i>
              <span><strong>99.8%</strong> Query Precision</span>
            </div>
            <div className="stat-pill">
              <i className="fa-solid fa-chart-line"></i>
              <span><strong>4.2x</strong> Avg ROI Lift</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="hero-actions-row">
            <a href="#data-lab" className="btn-bespoke-primary" aria-label="Test Live Data Lab">
              <i className="fa-solid fa-bolt"></i>
              <span>Test Live Data Lab</span>
            </a>

            <a href="#vibe-check" className="btn-bespoke-secondary" aria-label="View Bento Stack">
              <span>Explore Bento Stack</span>
            </a>

            <a 
              href="/images/Resume.pdf" 
              download="Preet_Passi_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-bespoke-download" 
              aria-label="Download Preet Passi Resume"
            >
              <i className="fa-solid fa-download"></i>
              <span>Resume</span>
            </a>
          </div>

          <div className="hero-availability-note">
            <span className="green-live-dot"></span>
            <span>Available for Full-Time Roles &amp; High-Impact Freelance Contracts</span>
          </div>
        </div>
        
        {/* Right Column: Preet DataOS Workstation */}
        <div className="hero-visual bespoke-visual">
          <HeroVisualCockpit />
        </div>
      </section>

      {/* Infinite Kinetic Ticker */}
      <KineticMarquee />

      {/* Bento Grid Showcase */}
      <GenZBentoSection />

      {/* Interactive Data Studio */}
      <DataStudioSection />

      {/* Projects, Credentials, About & Contact */}
      <ProjectsSection />
      <HireMeSection />
      <CertificatesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
