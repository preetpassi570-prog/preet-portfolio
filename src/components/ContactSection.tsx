"use client";
import React from 'react';
import { playPop } from '@/lib/soundFx';

export default function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-container-wrapper">
        <div className="section-header-centered">
          <div className="section-badge-pill">
            <i className="fa-solid fa-paper-plane"></i>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-heading-large">
            Let's Build Something<br />Impactful Together
          </h2>
          <p className="section-subtext">
            I'm actively open to <strong>full-time Data Analyst roles</strong>, <strong>freelance dashboards</strong>, and technical collaborations. Reach out via email or send a message below.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Socials */}
          <div className="contact-left-col">
            <div className="bespoke-contact-cards">
              {/* EMAIL CARD */}
              <a 
                href="mailto:preetpassi570@gmail.com" 
                className="bespoke-contact-card"
                onClick={() => playPop(700)}
              >
                <div className="contact-card-icon-box theme-purple">
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="contact-card-content">
                  <div className="contact-card-label-row">
                    <span className="contact-card-label">OFFICIAL EMAIL</span>
                    <span className="contact-card-pill">PRIMARY</span>
                  </div>
                  <span className="contact-card-value">preetpassi570@gmail.com</span>
                  <span className="contact-card-sub">Click to send direct email <i className="fa-solid fa-arrow-up-right-from-square"></i></span>
                </div>
              </a>

              {/* STATUS CARD */}
              <div className="bespoke-contact-card status-card">
                <div className="contact-card-icon-box theme-yellow">
                  <i className="fa-solid fa-briefcase" aria-hidden="true"></i>
                </div>
                <div className="contact-card-content">
                  <div className="contact-card-label-row">
                    <span className="contact-card-label">CURRENT STATUS</span>
                    <span className="contact-status-verified">
                      <span className="online-indicator"></span> VERIFIED
                    </span>
                  </div>
                  <span className="contact-card-value">Open to Work • Immediate Joiner</span>
                  <span className="contact-card-sub">Available for Full-time & Freelance Projects</span>
                </div>
              </div>

              {/* LOCATION CARD */}
              <a 
                href="https://www.google.com/maps?q=28.730778,77.174722" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bespoke-contact-card"
                onClick={() => playPop(650)}
                aria-label="Open Delhi, India location on Google Maps"
              >
                <div className="contact-card-icon-box theme-purple">
                  <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                </div>
                <div className="contact-card-content">
                  <div className="contact-card-label-row">
                    <span className="contact-card-label">BASE LOCATION</span>
                    <span className="contact-card-pill">HYBRID</span>
                  </div>
                  <span className="contact-card-value">Delhi, India</span>
                  <span className="contact-card-sub">Open to Remote & On-Site Relocation <i className="fa-solid fa-arrow-up-right-from-square"></i></span>
                </div>
              </a>
            </div>

            {/* Pitch Text */}
            <p className="bespoke-contact-pitch">
              Whether you have a query, want to discuss a potential analytics pipeline, or simply want to connect, feel free to drop a message! I always respond promptly.
            </p>

            {/* 2D Neo-Brutalist Social Links Strip */}
            <div className="bespoke-social-strip">
              <a 
                href="https://github.com/preetpassi570-prog" 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub" 
                aria-label="Connect on GitHub"
                className="bespoke-social-btn"
                onClick={() => playPop(600)}
              >
                <i className="fa-brands fa-github" aria-hidden="true"></i>
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/preet-passi-567b25426/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn" 
                aria-label="Connect on LinkedIn"
                className="bespoke-social-btn"
                onClick={() => playPop(650)}
              >
                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://wa.me/919315971839" 
                target="_blank" 
                rel="noopener noreferrer"
                title="WhatsApp" 
                aria-label="Chat on WhatsApp"
                className="bespoke-social-btn"
                onClick={() => playPop(700)}
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://www.instagram.com/preet_passii/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram" 
                aria-label="Connect on Instagram"
                className="bespoke-social-btn"
                onClick={() => playPop(750)}
              >
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                <span>Instagram</span>
              </a>
              <a 
                href="https://in.pinterest.com/preet_passii/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Pinterest" 
                aria-label="Connect on Pinterest"
                className="bespoke-social-btn"
                onClick={() => playPop(800)}
              >
                <i className="fa-brands fa-pinterest" aria-hidden="true"></i>
                <span>Pinterest</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-right-col">
            <form 
              id="contact-form" 
              className="bespoke-contact-form" 
              action="https://api.web3forms.com/submit" 
              method="POST" 
              noValidate
            >
              <input type="hidden" name="access_key" value="92bbefd2-9f1e-48f2-a477-6cb4fd851470" />
              
              <div className="form-group">
                <label htmlFor="form-name" className="bespoke-form-label">
                  <i className="fa-solid fa-user"></i> Full Name
                </label>
                <div className="input-wrapper">
                  <input type="text" id="form-name" name="name" className="bespoke-form-input" placeholder="e.g. Rahul Sharma" required />
                </div>
                <span className="error-message" id="error-name">Name is required</span>
              </div>

              <div className="form-group">
                <label htmlFor="form-email" className="bespoke-form-label">
                  <i className="fa-solid fa-envelope"></i> Email Address
                </label>
                <div className="input-wrapper">
                  <input type="email" id="form-email" name="email" className="bespoke-form-input" placeholder="name@company.com" required />
                </div>
                <span className="error-message" id="error-email">Please enter a valid email address</span>
              </div>

              <div className="form-group">
                <label htmlFor="form-phone" className="bespoke-form-label">
                  <i className="fa-solid fa-phone"></i> Phone Number
                </label>
                <div className="input-wrapper">
                  <input type="tel" id="form-phone" name="phone" className="bespoke-form-input" placeholder="+91 98765 43210" required />
                </div>
                <span className="error-message" id="error-phone">Please enter a valid phone number</span>
              </div>

              <div className="form-group">
                <label htmlFor="form-message" className="bespoke-form-label">
                  <i className="fa-solid fa-message"></i> Message
                </label>
                <div className="input-wrapper">
                  <textarea id="form-message" name="message" className="bespoke-form-input textarea-input" placeholder="Describe your project, team requirements, or analytics goals..." rows={4} required></textarea>
                </div>
                <span className="error-message" id="error-message">Message is required</span>
              </div>

              <button 
                type="submit" 
                id="form-submit-btn" 
                className="btn-bespoke-submit"
                onClick={() => playPop(850)}
              >
                <span className="btn-text">Send Message Now</span>
                <i className="fa-solid fa-paper-plane" style={{ marginLeft: '8px' }}></i>
                <span className="spinner-hidden" id="form-spinner"></span>
              </button>

              <p className="reply-disclaimer">⚡ Direct delivery: I typically respond within 24 hours.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
