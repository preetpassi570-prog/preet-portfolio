"use client";
import React from 'react';
import { playPop } from '@/lib/soundFx';

interface ServiceItem {
  id: string;
  number: string;
  badge: string;
  title: string;
  icon: string;
  iconTheme: 'purple' | 'yellow';
  description: string;
  deliverables: string[];
  whatsappQuery: string;
}

const services: ServiceItem[] = [
  {
    id: 'powerbi',
    number: '01',
    badge: 'BUSINESS INTELLIGENCE',
    title: 'Power BI Dashboard Development',
    icon: 'fa-solid fa-chart-pie',
    iconTheme: 'purple',
    description: 'Architect dynamic, automated Power BI dashboards with real-time DAX metrics, interactive drilldowns, and executive KPI storytelling for measurable clarity.',
    deliverables: ['DAX Measures & KPIs', 'Interactive Drilldowns', 'Executive Storytelling', 'Automated Refresh'],
    whatsappQuery: 'Power%20BI%20Dashboard%20Development',
  },
  {
    id: 'sql',
    number: '02',
    badge: 'DATA PIPELINES & QUERIES',
    title: 'SQL Data Architecture & Analysis',
    icon: 'fa-solid fa-database',
    iconTheme: 'yellow',
    description: 'Analyze large-scale transactional datasets, construct high-performance CTEs & subqueries, build staging marts, and perform cohort & retention analytics.',
    deliverables: ['Complex CTEs & Joins', 'Query Performance Tuning', 'Cohort & Retention Models', 'SSMS & PostgreSQL'],
    whatsappQuery: 'SQL%20Data%20Analysis',
  },
  {
    id: 'python',
    number: '03',
    badge: 'AUTOMATION & SCRAPING',
    title: 'Python Automation & ETL',
    icon: 'fa-brands fa-python',
    iconTheme: 'purple',
    description: 'Eliminate manual reporting bottlenecks with custom Python pipelines, scheduled web scrapers, automated Excel generators, and predictive machine learning models.',
    deliverables: ['Pandas & NumPy ETL', 'Automated Web Scraping', 'Scheduled Cron Jobs', 'EDA & Trend Forecasting'],
    whatsappQuery: 'Python%20Data%20Automation',
  },
  {
    id: 'excel',
    number: '04',
    badge: 'FINANCIAL & REPORTING',
    title: 'Advanced Excel & Financial Modeling',
    icon: 'fa-regular fa-file-excel',
    iconTheme: 'yellow',
    description: 'Engineer production Excel workbooks, dynamic pivot summaries, Power Query data feeds, automated VBA macros, and what-if sensitivity simulations.',
    deliverables: ['Power Query Data Feeds', 'VBA & Macro Automations', 'What-If & Sensitivity Models', 'Executive KPI Trackers'],
    whatsappQuery: 'Excel%20Dashboard%20and%20Reporting',
  },
  {
    id: 'cleaning',
    number: '05',
    badge: 'DATA PREPARATION & ETL',
    title: 'Data Cleaning & Transformation',
    icon: 'fa-solid fa-wand-magic-sparkles',
    iconTheme: 'purple',
    description: 'Turn messy, duplicate-heavy, and unformatted raw tables into structured, standardized, and audit-proof analytical assets ready for production analysis.',
    deliverables: ['Deduplication & Imputation', 'Schema Standardization', 'Anomaly & Outlier Fixes', 'Audit-Ready Clean Marts'],
    whatsappQuery: 'Data%20Cleaning%20and%20Transformation',
  },
  {
    id: 'viz',
    number: '06',
    badge: 'EXECUTIVE COMMUNICATION',
    title: 'Data Storytelling & Visualization',
    icon: 'fa-solid fa-chart-line',
    iconTheme: 'yellow',
    description: 'Translate dense statistical patterns into intuitive visual narratives, boardroom-ready chart decks, and executive decision frameworks that drive immediate action.',
    deliverables: ['Visual Storytelling', 'Heatmaps & Funnel Charts', 'C-Suite Pitch Decks', 'Actionable Insights Memos'],
    whatsappQuery: 'Data%20Visualization',
  },
];

export default function HireMeSection() {
  return (
    <section id="hire-me" className="section services-section">
      <div className="section-header-centered">
        <div className="section-badge-pill">
          <i className="fa-solid fa-bolt"></i>
          <span>SERVICES & SOLUTIONS</span>
        </div>
        <h2 className="section-heading-large">
          Transform Data Into Business Impact
        </h2>
        <p className="section-subtext">
          Need a dedicated <strong>Data Analyst</strong> for your team or freelance project? High-precision <strong>Power BI dashboards</strong>, <strong>SQL pipelines</strong>, <strong>Python ETL</strong>, and <strong>financial models</strong> tailored for measurable revenue growth.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="bespoke-service-card">
            {/* Top Bar: Number Tag & Status Pill */}
            <div className="service-card-top-bar">
              <span className="service-num-tag">
                SERVICE {service.number}
              </span>
              <span className="service-status-pill">
                <span className="service-status-dot"></span>
                <span>AVAILABLE FOR HIRE</span>
              </span>
            </div>

            {/* Icon + Category & Title */}
            <div className="service-header-row">
              <div className={`service-icon-box theme-${service.iconTheme}`}>
                <i className={service.icon}></i>
              </div>
              <div className="service-title-wrap">
                <span className="service-category-micro">{service.badge}</span>
                <h3 className="bespoke-service-title">{service.title}</h3>
              </div>
            </div>

            {/* Description */}
            <p className="bespoke-service-desc">{service.description}</p>

            {/* Deliverables / Chips */}
            <div className="service-deliverables-wrap">
              {service.deliverables.map((item, idx) => (
                <span key={idx} className="service-chip">
                  <i className="fa-solid fa-check"></i>
                  <span>{item}</span>
                </span>
              ))}
            </div>

            {/* Action CTA Button */}
            <a
              href={`https://wa.me/919315971839?text=Hi%20Preet,%20I%20visited%20your%20portfolio%20and%20I'm%20interested%20in%20hiring%20you%20for%20${service.whatsappQuery}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-service-hire"
              onClick={() => playPop(720)}
            >
              <span>Hire For This Service</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        ))}
      </div>

      {/* Resume & Inquiries Neo-Brutalist Banner */}
      <div className="service-cta-banner">
        <div className="service-cta-text">
          <div className="service-status-pill" style={{ marginBottom: '10px' }}>
            <span className="service-status-dot"></span>
            <span>VERIFIED CANDIDATE • READY TO DEPLOY</span>
          </div>
          <h3>Looking for a Complete Technical Overview?</h3>
          <p>
            Download my official resume with verified credentials, case studies, and technical competencies, or get in touch on WhatsApp.
          </p>
        </div>
        <div className="service-cta-actions">
          <a 
            href="/images/Resume.pdf" 
            download="Preet_Passi_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-banner-resume"
            onClick={() => playPop(600)}
            aria-label="Download Official Resume"
          >
            <i className="fa-solid fa-file-arrow-down"></i>
            <span>Download Official Resume</span>
          </a>
          <a 
            href="https://wa.me/919315971839?text=Hi%20Preet,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-banner-whatsapp"
            onClick={() => playPop(780)}
            aria-label="Chat with Preet on WhatsApp"
          >
            <i className="fa-brands fa-whatsapp"></i>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
