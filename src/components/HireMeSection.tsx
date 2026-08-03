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
            <a href="#contact" className="btn btn-secondary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.9rem', justifyContent: 'center' }}>
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
            <a href="#contact" className="btn btn-secondary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.9rem', justifyContent: 'center' }}>
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
            <a href="#contact" className="btn btn-secondary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.9rem', justifyContent: 'center' }}>
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
            <a href="#contact" className="btn btn-secondary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.9rem', justifyContent: 'center' }}>
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
            <a href="#contact" className="btn btn-secondary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.9rem', justifyContent: 'center' }}>
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
            <a href="#contact" className="btn btn-secondary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.9rem', justifyContent: 'center' }}>
              <span>Hire Me</span> <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="contact-grid fade-up" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(255, 0, 60, 0.02)', padding: '3rem', borderRadius: '15px', border: '1px solid rgba(255, 0, 60, 0.1)', opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '0.2s' }}>
          <h3 className="about-main-title" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2.5rem' }}>Ready to Work Together?</h3>
          <p style={{ textAlign: 'center', maxWidth: '700px', marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>
            Whether you need dashboards, reports, automation, or complete business analytics solutions, I'm ready to help turn your data into valuable insights.
          </p>

          <div className="hero-buttons" style={{ justifyContent: 'center', gap: '20px', width: '100%', display: 'flex', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="https://wa.me/919315971839" target="_blank" rel="noopener noreferrer" className="btn btn-primary" aria-label="Hire Me on WhatsApp">
              <i className="fa-brands fa-whatsapp" style={{ marginRight: '8px' }}></i> <span>Hire Me on WhatsApp</span>
              <div className="btn-shine"></div>
            </a>
            <a href="mailto:preetpassi570@gmail.com" className="btn btn-secondary" aria-label="Send Email">
              <i className="fa-solid fa-envelope" style={{ marginRight: '8px' }}></i> <span>Send Email</span>
            </a>
          </div>

          <div className="profile-stats-list" style={{ justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', display: 'flex' }}>
            <div className="profile-stat-item"><div className="stat-item-icon"><i className="fa-solid fa-check" style={{ color: 'var(--accent-red)' }}></i></div><div className="stat-item-details"><span className="stat-item-label" style={{ fontSize: '0.9rem' }}>Available for Freelance Projects</span></div></div>
            <div className="profile-stat-item"><div className="stat-item-icon"><i className="fa-solid fa-check" style={{ color: 'var(--accent-red)' }}></i></div><div className="stat-item-details"><span className="stat-item-label" style={{ fontSize: '0.9rem' }}>Remote Work Available</span></div></div>
            <div className="profile-stat-item"><div className="stat-item-icon"><i className="fa-solid fa-check" style={{ color: 'var(--accent-red)' }}></i></div><div className="stat-item-details"><span className="stat-item-label" style={{ fontSize: '0.9rem' }}>Fast Response</span></div></div>
            <div className="profile-stat-item"><div className="stat-item-icon"><i className="fa-solid fa-check" style={{ color: 'var(--accent-red)' }}></i></div><div className="stat-item-details"><span className="stat-item-label" style={{ fontSize: '0.9rem' }}>Professional Communication</span></div></div>
            <div className="profile-stat-item"><div className="stat-item-icon"><i className="fa-solid fa-check" style={{ color: 'var(--accent-red)' }}></i></div><div className="stat-item-details"><span className="stat-item-label" style={{ fontSize: '0.9rem' }}>Affordable Pricing</span></div></div>
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
