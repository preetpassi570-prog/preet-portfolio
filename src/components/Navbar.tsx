"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

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

  return (
    <header className="navbar">
      <div className="nav-logo">
        <span className="neon-text-red">DATA</span>ANALYST<span className="dot">.</span>
      </div>
      <nav className="nav-links">
        <Link href="#home" className={activeSection === 'home' ? 'active' : ''}>HOME</Link>
        <Link href="#projects" className={activeSection === 'projects' ? 'active' : ''}>PROJECTS</Link>
        <Link href="#certificates" className={activeSection === 'certificates' ? 'active' : ''}>CERTIFICATES</Link>
        <Link href="#about" className={activeSection === 'about' ? 'active' : ''}>ABOUT ME</Link>
        <Link href="#contact" className={activeSection === 'contact' ? 'active' : ''}>CONTACT</Link>
      </nav>
      <div className="nav-buttons">
        <a href="/images/Resume.pdf" download className="nav-cta-btn">
          <i className="fa-solid fa-download"></i> <span>Download Resume</span>
        </a>
      </div>
    </header>
  );
}
