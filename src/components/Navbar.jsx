import { useState } from 'react';
import CrestLogo from './CrestLogo';
import { SCHOOL_INFO } from '../data/schoolData';

export default function Navbar({ activePage, setActivePage, onOpenAdmission }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'portal', label: 'Access Portal', isPortal: true }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      {/* Top Notification & Utility Bar */}
      <div className="top-utility-bar">
        <div className="container utility-content">
          <div className="utility-left">
            <span className="utility-item">
              <span className="utility-icon">📍</span> {SCHOOL_INFO.location}
            </span>
            <a href={`tel:${SCHOOL_INFO.phone}`} className="utility-item hide-on-sm">
              <span className="utility-icon">📞</span> {SCHOOL_INFO.phone}
            </a>
            <a href={`mailto:${SCHOOL_INFO.email}`} className="utility-item hide-on-md">
              <span className="utility-icon">✉️</span> {SCHOOL_INFO.email}
            </a>
          </div>
          <div className="utility-right">
            <span className="center-number hide-on-sm">
              UNEB Center: <strong>{SCHOOL_INFO.centerNumberUCE}</strong>
            </span>
            <button
              type="button"
              className="portal-quick-btn"
              onClick={() => handleNavClick('portal')}
            >
              <span className="lock-icon">🔒</span> Portal Login
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <div className="main-navbar">
        <div className="container nav-content">
          {/* Brand Logo & Name */}
          <button
            type="button"
            className="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            aria-label="Demo High School Home"
          >
            <CrestLogo size={54} className="brand-crest" />
            <div className="brand-text">
              <span className="brand-title">DEMO HIGH SCHOOL</span>
              <span className="brand-subtitle">MBALE &bull; UGANDA</span>
              <span className="brand-motto">&ldquo;{SCHOOL_INFO.motto}&rdquo;</span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                className={`nav-link ${activePage === link.id ? 'active' : ''} ${
                  link.isPortal ? 'nav-portal-highlight' : ''
                }`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.isPortal && <span className="nav-portal-icon">🔒</span>}
                {link.label}
              </button>
            ))}
            <button
              type="button"
              className="apply-cta-btn"
              onClick={onOpenAdmission}
            >
              Inquire / Apply
            </button>
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className={`mobile-hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Mobile Navigation"
          >
            <div className="mobile-drawer-header">
              <div className="mobile-drawer-brand">
                <CrestLogo size={42} />
                <div>
                  <strong className="mobile-school-name">DEMO HIGH SCHOOL</strong>
                  <div className="mobile-school-loc">Mbale, Uganda</div>
                </div>
              </div>
              <button
                type="button"
                className="close-drawer-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="mobile-nav-links">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  className={`mobile-nav-link ${activePage === link.id ? 'active' : ''} ${
                    link.isPortal ? 'mobile-portal-link' : ''
                  }`}
                  onClick={() => handleNavClick(link.id)}
                >
                  <span className="mobile-link-text">
                    {link.isPortal && <span className="drawer-icon">🔒</span>}
                    {link.label}
                  </span>
                  <span className="arrow-indicator">→</span>
                </button>
              ))}
            </nav>

            <div className="mobile-drawer-footer">
              <button
                type="button"
                className="mobile-apply-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmission();
                }}
              >
                Apply for Admission
              </button>
              <div className="mobile-quick-contacts">
                <p>📍 {SCHOOL_INFO.fullAddress}</p>
                <p>📞 {SCHOOL_INFO.phone}</p>
                <p>✉️ {SCHOOL_INFO.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
