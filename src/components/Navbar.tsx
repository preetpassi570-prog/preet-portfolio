import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-logo">
        <span className="neon-text-red">DATA</span>ANALYST<span className="dot">.</span>
      </div>
      <nav className="nav-links">
        <Link href="/" className="active">HOME</Link>
        <Link href="/projects">PROJECTS</Link>
        <Link href="/certificates">CERTIFICATES</Link>
        <Link href="/about">ABOUT ME</Link>
        <Link href="/contact">CONTACT</Link>
      </nav>
      <div className="nav-buttons">
        <a href="/images/Resume.pdf" download className="nav-cta-btn">
          <i className="fa-solid fa-download"></i> Resume
        </a>
      </div>
    </header>
  );
}
