import { useState } from 'react'
import './App.css'
import AdmissionModal from './components/AdmissionModal'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import { SCHOOL_INFO } from './data/schoolData'

function PortalPage({ setActivePage }) {
  return (
    <main className="portal-page">
      <section className="portal-hero">
        <div className="container portal-hero-inner">
          <div>
            <span className="section-eyebrow">STUDENT, PARENT & STAFF ACCESS</span>
            <h1 className="portal-title">Secure School Portal</h1>
            <p className="portal-description">
              Access academic reports, fee statements, announcements, and school services through our secure partner portal.
            </p>
            <div className="portal-actions">
              <a className="btn btn-gold" href={SCHOOL_INFO.portalUrl} target="_blank" rel="noreferrer">
                Open Portal in New Tab ↗
              </a>
              <button type="button" className="btn btn-outline-white" onClick={() => setActivePage('home')}>
                Back to Home
              </button>
            </div>
          </div>
          <div className="portal-trust-card">
            <span className="portal-lock">🔒</span>
            <strong>Protected access</strong>
            <p>Use the login details provided by the school administration.</p>
          </div>
        </div>
      </section>
      <section className="section-padding portal-embed-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">WORM DAM ACADEMIC SYSTEM</span>
            <h2 className="section-title">Sign in to your school account</h2>
            <p className="section-subtitle">
              If the embedded login is blocked by your browser, use the button above to open the portal directly.
            </p>
          </div>
          <div className="portal-frame-wrap">
            <iframe
              title="Demo High School secure access portal"
              src={SCHOOL_INFO.portalUrl}
              className="portal-frame"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function App() {
  const [activePage, setActivePage] = useState('home')
  const [admissionOpen, setAdmissionOpen] = useState(false)

  const pageProps = {
    setActivePage,
    onOpenAdmission: () => setAdmissionOpen(true),
  }

  const renderPage = () => {
    switch (activePage) {
      case 'services':
        return <ServicesPage {...pageProps} />
      case 'about':
        return <AboutPage {...pageProps} />
      case 'contact':
        return <ContactPage {...pageProps} />
      case 'portal':
        return <PortalPage setActivePage={setActivePage} />
      default:
        return <HomePage {...pageProps} />
    }
  }

  return (
    <div className="app-shell">
      <Navbar activePage={activePage} setActivePage={setActivePage} onOpenAdmission={() => setAdmissionOpen(true)} />
      {renderPage()}
      <Footer setActivePage={setActivePage} onOpenAdmission={() => setAdmissionOpen(true)} />
      <AdmissionModal isOpen={admissionOpen} onClose={() => setAdmissionOpen(false)} />
    </div>
  )
}

export default App
