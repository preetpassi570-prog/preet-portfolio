"use client";
import React, { useEffect, useRef } from 'react';

export default function HireMeSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hire-me" className="section hire-me-section" ref={sectionRef}>
      <div className="section-header fade-up" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out' }}>
        <h2 className="section-title"><span className="neon-text-red">//</span> HIRE ME</h2>
        <p className="section-subtitle">Transform Your Data Into Business Growth</p>
      </div>

      <div className="about-container-wrapper" style={{ marginTop: '2rem' }}>
        <p className="fade-up" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--text-secondary)', opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out' }}>
          Need a professional Data Analyst for your business or freelance project? I specialize in Power BI dashboards, SQL analysis, Python automation, Excel reporting, data cleaning, and interactive data visualization to help businesses make data-driven decisions.
        </p>

        <div className="projects-grid" style={{ marginBottom: '4rem' }}>
          {/* Services Cards */}
          <div className="project-card tilt-card fade-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%', opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '0.1s' }}>
            <div className="card-glow"></div>
            <div className="project-header" style={{ width: '100%', justifyContent: 'center' }}>
              <span className="project-icon"><i className="fa-solid fa-chart-pie"></i></span>
            </div>
            <h3 className="project-title" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Power BI Dashboard Development</h3>
            <p className="project-description" style={{ flexGrow: 1, marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Build interactive Power BI dashboards with KPIs, charts, and business insights for smarter decision-making.</p>
            <a href="https://wa.me/919315971839?text=Hi%20Preet,%20I%20visited%20your%20portfolio%20and%20I'm%20interested%20in%20hiring%20you%20for%20Power%20BI%20Dashboard%20Development." target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.9rem', justifyContent: 'center' }}>
              <span>Hire Me</span> <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </a>
          </div>

          <div className="project-card tilt-card fade-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%', opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '0.2s' }}>
            <div className="card-glow"></div>
            <div className="project-header" style={{ width: '100%', justifyContent: 'center' }}>
              <span className="project-icon"><i className="fa-solid fa-database"></i></span>
            </div>
            <h3 className="project-title" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>SQL Data Analysis</h3>
            <p className="project-description" style={{ flexGrow: 1, marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Analyze large datasets using SQL, write optimized queries, and generate meaningful business reports.</p>
            <a href="https://wa.me/919315971839?text=Hi%20Preet,%20I%20visited%20your%20portfolio%20and%20I'm%20interested%20in%20hiring%20you%20for%20SQL%20Data%20Analysis." target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.9rem', justifyContent: 'center' }}>
              <span>Hire Me</span> <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </a>
          </div>

          <div className="project-card tilt-card fade-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%', opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '0.3s' }}>
            <div className="card-glow"></div>
            <div className="project-header" style={{ width: '100%', justifyContent: 'center' }}>
              <span className="project-icon"><i className="fa-brands fa-python"></i></span>
            </div>
            <h3 className="project-title" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Python Data Automation</h3>
            <p className="project-description" style={{ flexGrow: 1, marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Automate repetitive tasks, data processing, web scraping, and reporting using Python.</p>
            <a href="https://wa.me/919315971839?text=Hi%20Preet,%20I%20visited%20your%20portfolio%20and%20I'm%20interested%20in%20hiring%20you%20for%20Python%20Data%20Automation." target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.9rem', justifyContent: 'center' }}>
              <span>Hire Me</span> <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </a>
          </div>

          <div className="project-card tilt-card fade-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%', opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '0.4s' }}>
            <div className="card-glow"></div>
            <div className="project-header" style={{ width: '100%', justifyContent: 'center' }}>
              <span className="project-icon"><i className="fa-regular fa-file-excel"></i></span>
            </div>
            <h3 className="project-title" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Excel Dashboard & Reporting</h3>
            <p className="project-description" style={{ flexGrow: 1, marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Create dynamic Excel dashboards, KPI reports, automation, and business reporting solutions.</p>
            <a href="https://wa.me/919315971839?text=Hi%20Preet,%20I%20visited%20your%20portfolio%20and%20I'm%20interested%20in%20hiring%20you%20for%20Excel%20Dashboard%20and%20Reporting." target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.9rem', justifyContent: 'center' }}>
              <span>Hire Me</span> <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </a>
          </div>

          <div className="project-card tilt-card fade-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%', opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '0.5s' }}>
            <div className="card-glow"></div>
            <div className="project-header" style={{ width: '100%', justifyContent: 'center' }}>
              <span className="project-icon"><i className="fa-solid fa-broom"></i></span>
            </div>
            <h3 className="project-title" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Data Cleaning & Transformation</h3>
            <p className="project-description" style={{ flexGrow: 1, marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Clean, organize, transform, and prepare raw data for accurate analysis and reporting.</p>
            <a href="https://wa.me/919315971839?text=Hi%20Preet,%20I%20visited%20your%20portfolio%20and%20I'm%20interested%20in%20hiring%20you%20for%20Data%20Cleaning%20and%20Transformation." target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.9rem', justifyContent: 'center' }}>
              <span>Hire Me</span> <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </a>
          </div>

          <div className="project-card tilt-card fade-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%', opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '0.6s' }}>
            <div className="card-glow"></div>
            <div className="project-header" style={{ width: '100%', justifyContent: 'center' }}>
              <span className="project-icon"><i className="fa-solid fa-chart-line"></i></span>
            </div>
            <h3 className="project-title" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Data Visualization</h3>
            <p className="project-description" style={{ flexGrow: 1, marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Convert complex data into beautiful, easy-to-understand visual dashboards and charts.</p>
            <a href="https://wa.me/919315971839?text=Hi%20Preet,%20I%20visited%20your%20portfolio%20and%20I'm%20interested%20in%20hiring%20you%20for%20Data%20Visualization." target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.9rem', justifyContent: 'center' }}>
              <span>Hire Me</span> <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </a>
          </div>
        </div>



      </div>
      <style>{`
        .fade-up.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
