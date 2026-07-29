"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'certificates', 'about', 'contact'];
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-logo">
        <span className="neon-text-red">DATA</span>ANALYST<span className="dot">.</span>
      </div>
      <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <Link href="#home" onClick={closeMobileMenu} className={activeSection === 'home' ? 'active' : ''}>HOME</Link>
        <Link href="#projects" onClick={closeMobileMenu} className={activeSection === 'projects' ? 'active' : ''}>PROJECTS</Link>
        <Link href="#certificates" onClick={closeMobileMenu} className={activeSection === 'certificates' ? 'active' : ''}>CERTIFICATES</Link>
        <Link href="#about" onClick={closeMobileMenu} className={activeSection === 'about' ? 'active' : ''}>ABOUT ME</Link>
        <Link href="#contact" onClick={closeMobileMenu} className={activeSection === 'contact' ? 'active' : ''}>CONTACT</Link>
        <a href="/images/Resume.pdf" download className="nav-cta-btn mobile-cta" onClick={closeMobileMenu}>
          <i className="fa-solid fa-download"></i> <span>Download Resume</span>
        </a>
      </nav>
      <div className="nav-buttons desktop-cta">
        <a href="/images/Resume.pdf" download className="nav-cta-btn">
          <i className="fa-solid fa-download"></i> <span>Download Resume</span>
        </a>
      </div>
      <button 
        className="mobile-menu-toggle" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </button>
    </header>
  );
}
