"use client";
import React from 'react';
import { playPop } from '@/lib/soundFx';

interface SkillItem {
  name: string;
  category: string;
  level: string;
  icon: string;
  theme: 'purple' | 'yellow';
}

const skills: SkillItem[] = [
  { name: 'Python', category: 'PROGRAMMING', level: 'Core Stack', icon: 'fa-brands fa-python', theme: 'purple' },
  { name: 'SQL', category: 'DATABASE', level: 'Optimized CTEs', icon: 'fa-solid fa-database', theme: 'yellow' },
  { name: 'Microsoft Excel', category: 'SPREADSHEET', level: 'Advanced VBA & AI', icon: 'fa-regular fa-file-excel', theme: 'purple' },
  { name: 'Power BI', category: 'BI DASHBOARDS', level: 'DAX & Modeling', icon: 'fa-solid fa-chart-pie', theme: 'yellow' },
  { name: 'Pandas', category: 'DATA WRANGLING', level: 'ETL Pipelines', icon: 'fa-solid fa-table', theme: 'purple' },
  { name: 'NumPy', category: 'NUMERICAL ML', level: 'Vectorized Arrays', icon: 'fa-solid fa-calculator', theme: 'yellow' },
  { name: 'Matplotlib', category: 'STATISTICAL PLOTS', level: 'Custom Charts', icon: 'fa-solid fa-chart-line', theme: 'purple' },
  { name: 'Seaborn', category: 'DISTRIBUTION VIZ', level: 'Heatmaps & Density', icon: 'fa-solid fa-chart-area', theme: 'yellow' },
  { name: 'Data Cleaning', category: 'ETL PIPELINE', level: 'Audit-Proof Marts', icon: 'fa-solid fa-wand-magic-sparkles', theme: 'purple' },
  { name: 'Data Analysis', category: 'EXPLORATORY EDA', level: 'Business Insights', icon: 'fa-solid fa-magnifying-glass-chart', theme: 'yellow' },
  { name: 'Data Visualization', category: 'STORYTELLING', level: 'C-Suite Clarity', icon: 'fa-solid fa-chart-column', theme: 'purple' },
  { name: 'Business Intelligence', category: 'KPI STRATEGY', level: 'Executive Metrics', icon: 'fa-solid fa-lightbulb', theme: 'yellow' },
];

const timelinePhases = [
  { phase: 'Phase 1', title: 'Data Analytics Foundations', desc: 'Acquired strong statistical principles, data modeling, probability, and exploratory metrics.' },
  { phase: 'Phase 2', title: 'Python Programming & ETL', desc: 'Mastered Pandas, NumPy, Matplotlib, and scripting protocols to build automated pipelines.' },
  { phase: 'Phase 3', title: 'Relational SQL Architecture', desc: 'Engineered complex CTEs, window functions, stored procedures, and schema normalization.' },
  { phase: 'Phase 4', title: 'Executive Dashboards', desc: 'Created high-fidelity Power BI and Excel dashboards with dynamic tracking and KPI scorecards.' },
  { phase: 'Phase 5', title: 'Data Cleaning & Transformation', desc: 'Automated data wrangling, anomaly detection, null handling, and audit-ready data prep.' },
  { phase: 'Phase 6', title: 'Production Portfolio Deployments', desc: 'Built and published 6+ end-to-end commercial analytics case studies across retail, finance, and health.' },
];

export default function AboutSection() {
  return (
    <>
      <section id="about" className="section about-section">
        <div className="about-container-wrapper">
          <div className="about-main-grid">
            {/* Left Column: Narrative */}
            <div className="about-left-col">
              <div className="section-badge-pill">
                <i className="fa-solid fa-user-astronaut"></i>
                <span>ABOUT PREET PASSI</span>
              </div>
              <h2 className="section-heading-large">
                Turning Complex Data<br />Into Profitable Decisions
              </h2>
              
              <div className="about-desc-container">
                <p>
                  I am a passionate <strong>Data Analytics Engineer</strong> specializing in translating messy, raw databases into measurable, actionable <strong>commercial business clarity</strong>. I have completed production-ready case studies using <strong>Python, SQL, Power BI, and Advanced Excel</strong>.
                </p>
                <p>
                  From engineering recursive SQL CTEs to building automated machine learning churn predictors and C-suite KPI dashboards, I bridge the gap between technical data engineering and strategic executive decisions.
                </p>
              </div>

              <div className="about-cta-row">
                <a 
                  href="/images/Resume.pdf" 
                  download="Preet_Passi_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-neo-secondary" 
                  onClick={() => playPop(650)}
                  aria-label="Download Preet Passi Resume"
                >
                  <i className="fa-solid fa-file-arrow-down" aria-hidden="true"></i>
                  <span>Download Resume</span>
                </a>
                <a 
                  href="#contact" 
                  className="btn-neo-primary" 
                  onClick={() => playPop(750)}
                  aria-label="Contact Preet Passi"
                >
                  <span>Get In Touch</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            
            {/* Right Column: 2D Neo-Brutalist Developer ID Card */}
            <div className="about-right-col">
              <div className="bespoke-profile-card">
                {/* Card Top Window / Ribbon */}
                <div className="profile-card-top-bar">
                  <span className="profile-id-tag">ID: #PP-DATA-2026</span>
                  <span className="profile-status-pill">
                    <span className="service-status-dot"></span>
                    <span>OPEN TO WORK</span>
                  </span>
                </div>

                {/* Profile Header Block */}
                <div className="profile-header-block">
                  <div className="profile-avatar-emblem">
                    <i className="fa-solid fa-user-astronaut"></i>
                  </div>
                  <div className="profile-header-info">
                    <h3 className="profile-user-name">Preet Passi</h3>
                    <span className="profile-user-badge">DATA ANALYTICS ENGINEER</span>
                    <div className="profile-meta-chips">
                      <span className="profile-micro-pill"><i className="fa-solid fa-location-dot"></i> Delhi, India</span>
                      <span className="profile-micro-pill"><i className="fa-solid fa-bolt"></i> Immediate Joiner</span>
                      <span className="profile-micro-pill"><i className="fa-solid fa-briefcase"></i> Full-Time / Freelance</span>
                    </div>
                  </div>
                </div>

                {/* 2x2 Stats Matrix Tiles */}
                <div className="profile-stat-grid">
                  <div className="profile-stat-tile">
                    <div className="stat-tile-icon theme-yellow">
                      <i className="fa-solid fa-chart-column"></i>
                    </div>
                    <div className="stat-tile-details">
                      <span className="stat-tile-label">CORE DOMAIN</span>
                      <span className="stat-tile-value">Data Analytics & BI</span>
                    </div>
                  </div>

                  <div className="profile-stat-tile">
                    <div className="stat-tile-icon theme-purple">
                      <i className="fa-solid fa-diagram-project"></i>
                    </div>
                    <div className="stat-tile-details">
                      <span className="stat-tile-label">PROJECTS DELIVERED</span>
                      <span className="stat-tile-value">8+ Case Studies</span>
                    </div>
                  </div>

                  <div className="profile-stat-tile">
                    <div className="stat-tile-icon theme-yellow">
                      <i className="fa-solid fa-award"></i>
                    </div>
                    <div className="stat-tile-details">
                      <span className="stat-tile-label">ACCREDITATIONS</span>
                      <span className="stat-tile-value">5+ Certifications</span>
                    </div>
                  </div>

                  <div className="profile-stat-tile">
                    <div className="stat-tile-icon theme-purple">
                      <i className="fa-solid fa-heart-pulse"></i>
                    </div>
                    <div className="stat-tile-details">
                      <span className="stat-tile-label">WORK DEDICATION</span>
                      <span className="stat-tile-value">100% Commitment</span>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Verification Ribbon */}
                <div className="profile-card-footer-ribbon">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>TUTEDUDE CERTIFIED • PYTHON & SQL PIPELINES • POWER BI SPECIALIST</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* ========================================================
             CORE EXPERTISE (12 SKILLS 2D NEO-BRUTALIST GRID)
             ======================================================== */}
          <div className="about-expertise-section">
            <div className="section-header-centered" style={{ marginBottom: '25px' }}>
              <div className="section-badge-pill">
                <i className="fa-solid fa-layer-group"></i>
                <span>TECHNICAL TOOLKIT</span>
              </div>
              <h3 className="section-heading-large">
                Core Technical Expertise
              </h3>
              <p className="section-subtext">
                Production-tested programming languages, relational database management systems, and business intelligence suites.
              </p>
            </div>
            
            <div className="bespoke-skills-grid">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bespoke-skill-card"
                  onMouseEnter={() => playPop(700 + index * 20)}
                >
                  <div className="skill-card-top-tag">
                    <span>{skill.category}</span>
                  </div>
                  
                  <div className={`skill-icon-emblem theme-${skill.theme}`}>
                    <i className={skill.icon} aria-hidden="true"></i>
                  </div>
                  
                  <h4 className="bespoke-skill-title">{skill.name}</h4>
                  
                  <div className="skill-badge-level">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* ========================================================
             MY JOURNEY (2D NEO-BRUTALIST TIMELINE)
             ======================================================== */}
          <div className="about-journey-section">
            <div className="section-header-centered" style={{ marginBottom: '30px' }}>
              <div className="section-badge-pill">
                <i className="fa-solid fa-road"></i>
                <span>CAREER ROADMAP</span>
              </div>
              <h3 className="section-heading-large">
                My Analytics Journey
              </h3>
            </div>
            
            <div className="bespoke-journey-grid">
              {timelinePhases.map((phase, idx) => (
                <div key={idx} className="bespoke-journey-card">
                  <div className="journey-card-top">
                    <span className="journey-phase-tag">{phase.phase}</span>
                    <span className="journey-step-num">0{idx + 1}</span>
                  </div>
                  <h4 className="journey-card-title">{phase.title}</h4>
                  <p className="journey-card-desc">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
         PROFESSIONAL SUMMARY (SEO COMPONENT)
         ======================================================== */}
      <section id="seo-summary" className="section seo-summary-section">
        <div className="seo-container-wrapper">
          <div className="section-header-centered" style={{ marginBottom: '30px' }}>
            <div className="section-badge-pill">
              <i className="fa-solid fa-book-open"></i>
              <span>PROFESSIONAL SUMMARY</span>
            </div>
            <h2 className="section-heading-large">
              Methodology & Analytics Philosophy
            </h2>
          </div>
          
          <div className="bespoke-summary-card">
            <h3 className="seo-heading">The Data Analytics Journey of Preet Passi</h3>
            <p className="seo-text">
              Welcome to the official <strong>Preet Passi Portfolio</strong>, a comprehensive digital showcase of a passionate data professional dedicated to turning complex datasets into clear, actionable business strategies. As an emerging <strong>Preet Passi Data Analyst</strong>, my mission is to bridge the critical gap between raw, unstructured data streams and intuitive, high-impact business insights.
            </p>

            <h3 className="seo-heading">A Robust SQL Portfolio for Data Engineering</h3>
            <p className="seo-text">
              Data extraction, manipulation, and secure storage are foundational. My <strong>SQL Portfolio</strong> demonstrates a profound, practical understanding of relational database management systems, including MySQL, PostgreSQL, and Microsoft SQL Server. I have engineered complex queries, CTEs, and schema optimizations that ensure performance and reliability.
            </p>

            <h3 className="seo-heading">An Advanced Power BI Portfolio for Visual Storytelling</h3>
            <p className="seo-text">
              Within my <strong>Power BI Portfolio</strong>, I have meticulously designed executive-level dashboards that transform complex, multi-dimensional metrics into intuitive, interactive visual narratives. They incorporate advanced DAX calculations, interactive drill-downs, and clean responsive layouts.
            </p>

            <h3 className="seo-heading">Leveraging Python for Predictive Analytics</h3>
            <p className="seo-text">
              Utilizing industry-standard libraries such as Pandas, NumPy, Scikit-Learn, Matplotlib, and Seaborn, I have developed machine learning churn predictors, automated data scrapers, and predictive forecasting pipelines.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
