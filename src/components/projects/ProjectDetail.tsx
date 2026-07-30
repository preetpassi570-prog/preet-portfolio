'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { Project, getNextProject, getPrevProject, getRelatedProjects } from '@/lib/projects';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const sections = [
        'overview', 'dataset', 'problem-solution', 'key-features', 'project-workflow',
        'skills-demonstrated', 'key-insights', 'business-impact', 'challenges-learnings',
        'future-improvements', 'gallery'
      ];
      let current = '';
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 150) {
          current = id;
        }
      }
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextProject = getNextProject(project.slug);
  const prevProject = getPrevProject(project.slug);
  const relatedProjects = getRelatedProjects(project.slug, 3);

  const tocSections = [
    { id: 'overview', title: 'Overview', show: !!project.fullDescription },
    { id: 'dataset', title: 'Dataset', show: !!project.dataset },
    { id: 'problem-solution', title: 'Problem & Solution', show: !!project.problem && !!project.solution },
    { id: 'key-features', title: 'Key Features', show: project.keyFeatures && project.keyFeatures.length > 0 },
    { id: 'project-workflow', title: 'Project Workflow', show: project.projectWorkflow && project.projectWorkflow.length > 0 },
    { id: 'skills-demonstrated', title: 'Skills Demonstrated', show: project.skillsDemonstrated && project.skillsDemonstrated.length > 0 },
    { id: 'key-insights', title: 'Key Insights', show: project.keyInsights && project.keyInsights.length > 0 },
    { id: 'business-impact', title: 'Business Impact', show: !!project.businessImpact },
    { id: 'challenges-learnings', title: 'Challenges & Learnings', show: !!project.challenges || !!project.learnings },
    { id: 'future-improvements', title: 'Future Improvements', show: !!project.futureImprovements },
    { id: 'gallery', title: 'Dashboard & Gallery', show: project.gallery && project.gallery.length > 0 }
  ].filter(s => s.show);

  const shouldShowToc = tocSections.length >= 4;

  return (
    <article className="pd-container">
      {/* 1. Breadcrumbs / Navigation */}
      {isMounted && createPortal(
        <nav style={{ position: 'fixed', left: '2vw', top: '30px', zIndex: 99999 }}>
          <Link href="/#projects" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--accent-red)', borderColor: 'var(--accent-red)', color: '#fff', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
            <i className="fa-solid fa-arrow-left"></i> Back
          </Link>
        </nav>,
        document.body
      )}

      {/* 2. Hero Section */}
      <header className="pd-hero">
        <div className="pd-hero-content">
          <div className="category-badge">
            <span className="neon-text-red">●</span> {project.category}
          </div>
          <h1 className="pd-title">{project.title}</h1>
          <p className="pd-subtitle">{project.shortDescription}</p>
          <div className="pd-hero-buttons">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                <div className="btn-shine"></div>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <i className="fa-brands fa-github"></i> View Source
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Grid Layout for Content */}
      <div className="pd-layout">
        
        {/* Sidebar: Table of Contents & Project Info */}
        <aside className="pd-sidebar">
          {/* Project Information Card */}
          <div className="glass-panel pd-info-card">
            <h3 className="pd-sidebar-title">Project Info</h3>
            <ul className="pd-info-list">
              <li>
                <span className="pd-info-label">Status</span>
                <span className="pd-info-value">{project.status}</span>
              </li>
              <li>
                <span className="pd-info-label">Duration</span>
                <span className="pd-info-value">{project.duration}</span>
              </li>
              <li>
                <span className="pd-info-label">Last Updated</span>
                <span className="pd-info-value">{project.updatedDate}</span>
              </li>
              <li>
                <span className="pd-info-label">Tools</span>
                <div className="pd-tools-container">
                  {project.technologies.map(tech => (
                    <span key={tech} className="skill-badge pd-mini-badge">{tech}</span>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Table of Contents (Auto-generated for >=4 sections) */}
          {shouldShowToc && (
            <nav className="glass-panel pd-toc">
              <h3 className="pd-sidebar-title">Table of Contents</h3>
              <ul>
                {tocSections.map(section => (
                  <li key={section.id}>
                    <a 
                      href={`#${section.id}`}
                      style={{
                        display: 'block',
                        padding: '0.5rem 0 0.5rem 1rem',
                        color: activeSection === section.id ? 'var(--accent-red, #ff003c)' : 'var(--text-secondary)',
                        borderLeft: activeSection === section.id ? '3px solid var(--accent-red, #ff003c)' : '3px solid transparent',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        fontWeight: activeSection === section.id ? 'bold' : 'normal'
                      }}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </aside>

        {/* Main Content Area */}
        <div className="pd-main-content">
          {project.fullDescription && (
            <section id="overview" className="pd-section">
              <h2 className="pd-section-title">Overview</h2>
              <p className="pd-text">{project.fullDescription}</p>
            </section>
          )}

          {project.dataset && (
            <section id="dataset" className="pd-section">
              <h2 className="pd-section-title">Dataset</h2>
              <div className="glass-panel pd-card">
                <p className="pd-text" style={{ whiteSpace: 'pre-line' }}><i className="fa-solid fa-database" style={{ marginRight: '8px' }}></i>{project.dataset}</p>
              </div>
            </section>
          )}

          {project.problem && project.solution && (
            <section id="problem-solution" className="pd-section">
              <h2 className="pd-section-title">Problem & Solution</h2>
              <div className="pd-split-cards">
                <div className="glass-panel pd-card">
                  <h3 className="pd-card-title"><i className="fa-solid fa-triangle-exclamation neon-text-red"></i> The Problem</h3>
                  <p className="pd-text" style={{ whiteSpace: 'pre-line' }}>{project.problem}</p>
                </div>
                <div className="glass-panel pd-card">
                  <h3 className="pd-card-title"><i className="fa-solid fa-lightbulb" style={{ color: '#ffd700' }}></i> The Solution</h3>
                  <p className="pd-text">{project.solution}</p>
                </div>
              </div>
            </section>
          )}

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section id="key-features" className="pd-section">
              <h2 className="pd-section-title">Key Features</h2>
              <ul className="pd-list">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index}>
                    <i className="fa-solid fa-star neon-text-red"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.projectWorkflow && project.projectWorkflow.length > 0 && (
            <section id="project-workflow" className="pd-section">
              <h2 className="pd-section-title">Project Workflow</h2>
              <ul className="pd-list">
                {project.projectWorkflow.map((step, index) => (
                  <li key={index}>
                    <i className="fa-solid fa-arrow-right neon-text-red"></i>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.skillsDemonstrated && project.skillsDemonstrated.length > 0 && (
            <section id="skills-demonstrated" className="pd-section">
              <h2 className="pd-section-title">Skills Demonstrated</h2>
              <div className="pd-tools-container" style={{ marginTop: '1rem' }}>
                {project.skillsDemonstrated.map((skill, index) => (
                  <span key={index} className="skill-badge">{skill}</span>
                ))}
              </div>
            </section>
          )}

          {project.keyInsights && project.keyInsights.length > 0 && (
            <section id="key-insights" className="pd-section">
              <h2 className="pd-section-title">Key Insights</h2>
              <ul className="pd-list">
                {project.keyInsights.map((insight, index) => (
                  <li key={index}>
                    <i className="fa-solid fa-check-circle neon-text-red"></i>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.businessImpact && (
            <section id="business-impact" className="pd-section">
              <h2 className="pd-section-title">Business Impact</h2>
              <div className="glass-panel pd-impact-box">
                <i className="fa-solid fa-chart-line pd-impact-icon"></i>
                <p className="pd-impact-text">{project.businessImpact}</p>
              </div>
            </section>
          )}

          {(project.challenges || project.learnings) && (
            <section id="challenges-learnings" className="pd-section">
              <h2 className="pd-section-title">Challenges & Learnings</h2>
              <div className="pd-split-cards">
                {project.challenges && (
                  <div className="glass-panel pd-card">
                    <h3 className="pd-card-title"><i className="fa-solid fa-mountain" style={{ color: '#ff6b6b' }}></i> Challenges</h3>
                    <p className="pd-text" style={{ whiteSpace: 'pre-line' }}>{project.challenges}</p>
                  </div>
                )}
                {project.learnings && (
                  <div className="glass-panel pd-card">
                    <h3 className="pd-card-title"><i className="fa-solid fa-book-open" style={{ color: '#4facfe' }}></i> Learnings</h3>
                    <p className="pd-text" style={{ whiteSpace: 'pre-line' }}>{project.learnings}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {project.futureImprovements && (
            <section id="future-improvements" className="pd-section">
              <h2 className="pd-section-title">Future Improvements</h2>
              <div className="glass-panel pd-card">
                <p className="pd-text"><i className="fa-solid fa-rocket" style={{ marginRight: '8px', color: '#00f2fe' }}></i>{project.futureImprovements}</p>
              </div>
            </section>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <section id="gallery" className="pd-section">
              <h2 className="pd-section-title">Dashboard & Gallery</h2>
              <div className="pd-gallery-grid">
                {project.gallery.map((item, index) => {
                  const isString = typeof item === 'string';
                  const imgUrl = isString ? item : item.url;
                  const caption = isString ? undefined : item.caption;
                  const description = isString ? undefined : (item as any).description;
                  return (
                    <div key={index} className="pd-gallery-item" style={{ marginBottom: '2rem' }}>
                      <Image 
                        src={imgUrl} 
                        alt={caption || `${project.title} screenshot ${index + 1}`} 
                        width={800} 
                        height={450} 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        className="pd-gallery-img"
                      />
                      {caption && (
                        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                          <p className="pd-text" style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--accent-red, #ff003c)', marginBottom: '0.5rem' }}>
                            {caption}
                          </p>
                          {description && (
                            <p className="pd-text" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                              {description}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}
          
          {/* Related Projects */}
          <section className="pd-section" style={{ marginTop: '4rem' }}>
            <h2 className="pd-section-title">Related Projects</h2>
            <p className="pd-text" style={{ marginBottom: '2rem' }}>
              Explore more real-world data analytics projects from my portfolio. Each project demonstrates practical business problem-solving using different analytics tools and technologies.
            </p>
            {relatedProjects && relatedProjects.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {relatedProjects.map((rp) => (
                  <Link href={`/projects/${rp.slug}`} key={rp.slug} style={{ textDecoration: 'none' }}>
                    <div className="glass-panel pd-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '1.5rem', transition: 'transform 0.3s ease, border-color 0.3s ease' }}>
                      <div style={{ marginBottom: '1rem' }}>
                        <span style={{ 
                          display: 'inline-block', 
                          padding: '0.25rem 0.75rem', 
                          borderRadius: '50px', 
                          fontSize: '0.75rem', 
                          fontWeight: 'bold', 
                          textTransform: 'uppercase', 
                          backgroundColor: 'rgba(255, 0, 60, 0.1)', 
                          color: 'var(--accent-red)',
                          border: '1px solid rgba(255, 0, 60, 0.2)'
                        }}>
                          {rp.tag}
                        </span>
                      </div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.75rem' }}>{rp.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {rp.shortDescription}
                      </p>
                      <div style={{ marginTop: 'auto', fontWeight: 'bold', color: 'var(--accent-red)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        View Project <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}
          </section>
        </div>
      </div>

      {/* Navigation (Prev/Next) */}
      <nav className="pd-nav-footer" style={{ display: 'none' }}>
      </nav>

      {/* Final CTA */}
      <section className="pd-cta">
        <h2 className="pd-cta-title">Want to build something similar?</h2>
        <p className="pd-cta-text">Let&apos;s connect and discuss how I can help transform your data into actionable insights.</p>
        <button onClick={() => { setShowContactModal(true); setIsSubmitted(false); }} className="btn btn-primary" style={{ cursor: 'pointer', background: 'var(--accent-red)' }}>
          <i className="fa-solid fa-envelope"></i> Get In Touch
          <div className="btn-shine"></div>
        </button>
      </section>

      {/* Contact Modal */}
      {showContactModal && isMounted && createPortal(
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999999, backdropFilter: 'blur(4px)' }}>
          <div className="pd-card" style={{ width: '90%', maxWidth: '450px', position: 'relative', padding: '2.5rem 2rem', background: 'rgba(15, 15, 20, 0.95)', border: '1px solid rgba(255, 0, 50, 0.2)', boxShadow: '0 10px 40px rgba(0,0,0,0.8)' }}>
            <button onClick={() => setShowContactModal(false)} style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '1.2rem', transition: '0.2s', padding: '5px' }}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0, 255, 100, 0.1)', color: '#00ff64', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 1.5rem' }}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>Form submitted successfully!</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>Thank you for reaching out. We&apos;ll review your submission and get back to you soon.</p>
                <button onClick={() => setShowContactModal(false)} className="btn btn-secondary" style={{ padding: '0.6rem 2rem', borderRadius: '8px' }}>Close</button>
              </div>
            ) : (
              <>
                <h3 style={{ marginBottom: '1.5rem', color: '#fff', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-paper-plane" style={{ color: 'var(--accent-red)' }}></i> Send a Message
                </h3>
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);
                  const object = Object.fromEntries(formData);
                  const json = JSON.stringify(object);
                  try {
                    const response = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                      },
                      body: json
                    });
                    const data = await response.json();
                    if (data.success) {
                      setIsSubmitted(true);
                    } else {
                      alert('Something went wrong. Please try again.');
                    }
                  } catch (error) {
                    alert('Error submitting form.');
                  } finally {
                    setIsSubmitting(false);
                  }
                }} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <input type="hidden" name="access_key" value="92bbefd2-9f1e-48f2-a477-6cb4fd851470" />
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>Full Name</label>
                    <input type="text" name="name" required placeholder="John Doe" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff', outline: 'none', fontSize: '0.95rem', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-red)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>Email Address</label>
                    <input type="email" name="email" required placeholder="john@example.com" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff', outline: 'none', fontSize: '0.95rem', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-red)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>Message</label>
                    <textarea name="message" rows={4} required placeholder="How can I help you?" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff', outline: 'none', resize: 'vertical', fontSize: '0.95rem', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-red)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center', background: isSubmitting ? 'rgba(255, 255, 255, 0.1)' : 'var(--accent-red)', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <div className="btn-shine"></div>}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </article>
  );
}
