import CrestLogo from './CrestLogo';
import { SCHOOL_INFO } from '../data/schoolData';

export default function Footer({ setActivePage, onOpenAdmission }) {
  const buildTime = import.meta.env.VITE_BUILD_TIME || 'Continuous Deployment';
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'Configured via Secret';

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      {/* Portal Callout Strip */}
      <div className="footer-portal-strip">
        <div className="container portal-strip-content">
          <div className="portal-strip-text">
            <h3>Student, Parent &amp; Staff Online Portal</h3>
            <p>Access termly report cards, continuous UNEB assessment results, and fee payment vouchers securely online.</p>
          </div>
          <button
            type="button"
            className="footer-portal-cta"
            onClick={() => navigateTo('portal')}
          >
            🔒 Launch Access Portal
          </button>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="container footer-main-content">
        <div className="footer-grid">
          {/* Column 1: School Identity */}
          <div className="footer-col col-identity">
            <div className="footer-brand">
              <CrestLogo size={58} />
              <div>
                <h4 className="footer-school-name">{SCHOOL_INFO.name}</h4>
                <p className="footer-school-motto">&ldquo;{SCHOOL_INFO.motto}&rdquo;</p>
              </div>
            </div>
            <p className="footer-description">
              A premier secondary institution in Mbale Municipality, Eastern Uganda, committed to holistic character formation, UNEB academic excellence, and Christian and moral values under the scenic slopes of Mount Elgon.
            </p>
            <div className="uneb-badge">
              <span>UNEB Examination Center No: <strong>{SCHOOL_INFO.centerNumberUCE}</strong></span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links">
              <li>
                <button type="button" onClick={() => navigateTo('home')}>Home Overview</button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('services')}>Services &amp; Curriculum</button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('about')}>About DHS Mbale</button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('contact')}>Contact &amp; Admissions</button>
              </li>
              <li>
                <button type="button" onClick={() => navigateTo('portal')}>Access Portal (Login)</button>
              </li>
              <li>
                <button type="button" onClick={onOpenAdmission}>Admissions Inquiry</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div className="footer-col">
            <h4 className="footer-heading">Academic Programs</h4>
            <ul className="footer-links">
              <li><span>Uganda 'O' Level (UCE - S.1 to S.4)</span></li>
              <li><span>Uganda 'A' Level Sciences (PCB, PCM, BCM)</span></li>
              <li><span>Uganda 'A' Level Arts (HEG, HEL, DEG, HED)</span></li>
              <li><span>Ultra-modern Science Labs</span></li>
              <li><span>Starlink-powered ICT Center</span></li>
              <li><span>Girls &amp; Boys Boarding Dormitories</span></li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="footer-col">
            <h4 className="footer-heading">Campus Address</h4>
            <address className="footer-address">
              <p>📍 {SCHOOL_INFO.fullAddress}</p>
              <p>📞 Phone: <a href={`tel:${SCHOOL_INFO.phone}`}>{SCHOOL_INFO.phone}</a></p>
              <p>📱 Mobile: {SCHOOL_INFO.mobile1}</p>
              <p>✉️ Email: <a href={`mailto:${SCHOOL_INFO.email}`}>{SCHOOL_INFO.email}</a></p>
              <p>🕒 Hours: {SCHOOL_INFO.workingHours}</p>
            </address>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} {SCHOOL_INFO.name}, Mbale, Uganda. All Rights Reserved.
          </p>
          <div className="footer-system-info">
            <span className="system-pill">System Operational</span>
            <span className="system-meta">Build: {buildTime.slice(0, 10)}</span>
            <span className="system-meta hide-on-sm">API Base: {apiBaseUrl}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
