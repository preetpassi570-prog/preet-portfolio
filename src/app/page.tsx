import React from 'react';
import Image from 'next/image';
import ProjectsSection from '../components/ProjectsSection';
import CertificatesSection from '../components/CertificatesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-welcome-tag">TURNING DATA INTO BUSINESS INSIGHTS</div>
          
          <h1 className="hero-main-title" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.2 }}>
            Preet Passi <span className="neon-text-red">|</span><br />
            <span className="gradient-text-passi" style={{ fontSize: "0.65em", letterSpacing: "2px", display: "block", marginTop: "10px" }}>Data Analyst Portfolio</span>
          </h1>
          
          <h2 className="hero-subtitle">DATA ANALYTICS ENGINEER</h2>
          
          <p className="hero-desc">
            I build intelligent data solutions using Python, SQL, Excel and Power BI, transforming raw business data into powerful insights, dashboards and automation systems.
          </p>

          <div className="hero-skills-container">
            <span className="skill-badge"><i className="fa-brands fa-python"></i> Python</span>
            <span className="skill-badge"><i className="fa-solid fa-database"></i> SQL</span>
            <span className="skill-badge"><i className="fa-solid fa-chart-simple"></i> Power BI</span>
            <span className="skill-badge"><i className="fa-solid fa-file-excel"></i> Excel</span>
            <span className="skill-badge"><i className="fa-solid fa-table"></i> Pandas & NumPy</span>
            <span className="skill-badge"><i className="fa-solid fa-broom"></i> Data Cleaning</span>
            <span className="skill-badge"><i className="fa-solid fa-chart-pie"></i> Data Visualization</span>
          </div>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <div className="btn-shine"></div>
            </a>
            <a href="/images/Resume.pdf" download className="btn btn-secondary btn-download">
              <i className="fa-solid fa-download"></i> <span>Download Resume</span>
            </a>
          </div>

          
          <div className="hero-stats-grid">
            <div className="hero-stat-card">
              <div className="stat-card-value" style={{ fontSize: "1.15rem" }}>🚀 Entry Level</div>
              <div className="stat-card-label">Data Analyst</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-card-value">8+</div>
              <div className="stat-card-label">Projects Completed</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-card-value">4+</div>
              <div className="stat-card-label">Certificates Earned</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-card-value">Open</div>
              <div className="stat-card-label">Available for Work</div>
            </div>
          </div>
        </div>
        
        
        <div className="hero-visual">
          <div className="hologram-container" id="hero-hologram">
            <canvas id="hero-visual-canvas" suppressHydrationWarning></canvas>
            <div className="hero-portrait-wrapper">
              <Image src="/images/preet.webp" alt="Preet Passi" className="hero-portrait" width={1130} height={1392} priority />
            </div>
          </div>
        </div>

        <div className="scroll-explore">
          <div className="scroll-arrow">↓</div>
          <span className="scroll-text">Scroll to Explore</span>
        </div>
      </section>

      <ProjectsSection />
      <CertificatesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
