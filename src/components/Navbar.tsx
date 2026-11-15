"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { playPop } from '@/lib/soundFx';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isProjectPage = pathname?.startsWith('/projects/');

  useEffect(() => {
    if (isProjectPage) return;
    
    const handleScroll = () => {
      const sections = ['home', 'vibe-check', 'data-lab', 'projects', 'hire-me', 'certificates', 'about', 'contact'];
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isProjectPage]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="navbar bespoke-nav">
        <div className="nav-logo">
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => playPop(700)}>
            <div className="logo-badge-icon">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <span className="logo-name">Preet Passi</span>
            <span className="logo-role-tag">ANALYTICS</span>
          </Link>
        </div>
        
        {!isProjectPage && (
          <>
            <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
              <Link href="/#home" onClick={() => { playPop(); closeMobileMenu(); }} className={activeSection === 'home' ? 'active' : ''}>Overview</Link>
              <Link href="/#vibe-check" onClick={() => { playPop(); closeMobileMenu(); }} className={activeSection === 'vibe-check' ? 'active' : ''}>Bento Stack</Link>
              <Link href="/#data-lab" onClick={() => { playPop(); closeMobileMenu(); }} className={`nav-featured-link ${activeSection === 'data-lab' ? 'active' : ''}`}>
                Live Data Lab <span className="live-dot-tag">LIVE</span>
              </Link>
              <Link href="/#projects" onClick={() => { playPop(); closeMobileMenu(); }} className={activeSection === 'projects' ? 'active' : ''}>Projects</Link>
              <Link href="/#certificates" onClick={() => { playPop(); closeMobileMenu(); }} className={activeSection === 'certificates' ? 'active' : ''}>Credentials</Link>
              <Link href="/#contact" onClick={() => { playPop(); closeMobileMenu(); }} className={activeSection === 'contact' ? 'active' : ''}>Contact</Link>
              
              <a 
                href="/images/Resume.pdf" 
                download="Preet_Passi_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-cta-btn mobile-cta" 
                onClick={() => { playPop(); closeMobileMenu(); }}
                aria-label="Download Preet Passi Resume"
              >
                <span>Download Resume</span>
              </a>
            </nav>

            <div className="nav-buttons desktop-cta">
              <button
                className="replay-intro-pill"
                onClick={() => {
                  playPop(850);
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new CustomEvent("replay-cartoon-intro"));
                  }
                }}
                title="Watch Cartoon Boxing Battle Again"
              >
                <i className="fa-solid fa-film"></i>
                <span>Cartoon Intro</span>
              </button>

              <a 
                href="#contact" 
                className="btn-nav-primary"
                onClick={() => playPop(900)}
                aria-label="Hire Preet Passi"
              >
                <span>Hire Me</span>
              </a>
            </div>

            <button 
              className="mobile-menu-toggle" 
              onClick={() => { playPop(); setIsMobileMenuOpen(!isMobileMenuOpen); }}
              aria-label="Toggle navigation menu"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true"></i>
            </button>
          </>
        )}
      </header>
    </>
  );
}
