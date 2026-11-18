import { useState } from 'react'
import './App.css'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '(not set)'
const BUILD_TIME = import.meta.env.VITE_BUILD_TIME || 'Build time unavailable'
const MODE = import.meta.env.MODE || 'unknown'
const IS_PROD = import.meta.env.PROD

function App() {
  const [copied, setCopied] = useState(false)
  const [apiStatus, setApiStatus] = useState(null)
  const [testingApi, setTestingApi] = useState(false)

  const apiBaseUrl = API_BASE_URL
  const buildTime = BUILD_TIME
  const mode = MODE
  const isProd = IS_PROD

  const copyDetails = () => {
    const info = `Target: RackGenius VPS Test Deployment\nDomain: one.webisa.site\nStatus: Operational\nVITE_API_BASE_URL: ${apiBaseUrl}\nBuild Timestamp: ${buildTime}\nMode: ${mode}`
    navigator.clipboard.writeText(info)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const testApiConnection = async () => {
    if (!apiBaseUrl || apiBaseUrl === '(not set)') {
      setApiStatus({ success: false, message: 'No API Base URL configured' })
      return
    }

    setTestingApi(true)
    try {
      const res = await fetch(apiBaseUrl, { method: 'GET', mode: 'cors' })
      setApiStatus({
        success: res.ok,
        message: `HTTP ${res.status} ${res.statusText || 'OK'}`,
      })
    } catch (err) {
      setApiStatus({
        success: false,
        message: err.message || 'Network request failed (CORS or unreachable)',
      })
    } finally {
      setTestingApi(false)
    }
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-badge">RackGenius VPS Deployment</div>
        <h1 className="header-title">one.webisa.site</h1>
        <p className="header-subtitle">
          React Test Application &amp; Automated CI/CD Pipeline
        </p>
        <div className="status-indicator-bar">
          <span className="status-ping">
            <span className="status-ping-bubble"></span>
            <span className="status-ping-dot"></span>
          </span>
          <span className="status-text">System Operational</span>
        </div>
      </header>

      <main className="dashboard-grid">
        {/* Core Verification Card */}
        <section className="dashboard-card highlight-card">
          <div className="card-header">
            <span className="card-icon">⚡</span>
            <h2>Build &amp; Environment Injection</h2>
          </div>
          <div className="key-value-list">
            <div className="key-value-row">
              <span className="key-label">VITE_API_BASE_URL</span>
              <span className="key-value code-value" data-testid="api-base-url">
                {apiBaseUrl}
              </span>
            </div>
            <div className="key-value-row">
              <span className="key-label">Build Timestamp</span>
              <span className="key-value code-value" data-testid="build-time">
                {buildTime}
              </span>
            </div>
            <div className="key-value-row">
              <span className="key-label">Environment Mode</span>
              <span className="key-value">
                <span className={`badge ${isProd ? 'badge-prod' : 'badge-dev'}`}>
                  {mode.toUpperCase()}
                </span>
              </span>
            </div>
            <div className="key-value-row">
              <span className="key-label">Variable Source</span>
              <span className="key-value">
                {apiBaseUrl.startsWith('http')
                  ? 'Injected via Build / Secret'
                  : 'Fallback / Default'}
              </span>
            </div>
          </div>
        </section>

        {/* Server & Deployment Card */}
        <section className="dashboard-card">
          <div className="card-header">
            <span className="card-icon">🚀</span>
            <h2>VPS &amp; Server Specs</h2>
          </div>
          <div className="key-value-list">
            <div className="key-value-row">
              <span className="key-label">Target Domain</span>
              <span className="key-value code-value">one.webisa.site</span>
            </div>
            <div className="key-value-row">
              <span className="key-label">VPS Deploy Path</span>
              <span className="key-value code-value">/var/www/test-app</span>
            </div>
            <div className="key-value-row">
              <span className="key-label">Internal Port</span>
              <span className="key-value code-value">8080</span>
            </div>
            <div className="key-value-row">
              <span className="key-label">Process Manager</span>
              <span className="key-value code-value">PM2 SPA Serve</span>
            </div>
          </div>
        </section>

        {/* CI/CD Pipeline Status Card */}
        <section className="dashboard-card">
          <div className="card-header">
            <span className="card-icon">🔄</span>
            <h2>CI/CD Pipeline Details</h2>
          </div>
          <ul className="pipeline-steps">
            <li className="pipeline-step done">
              <span className="step-icon">✓</span>
              <span className="step-text">Trigger: Push to <code>main</code> branch</span>
            </li>
            <li className="pipeline-step done">
              <span className="step-icon">✓</span>
              <span className="step-text">Runner: <code>ubuntu-latest</code> (Node 20)</span>
            </li>
            <li className="pipeline-step done">
              <span className="step-icon">✓</span>
              <span className="step-text">Build: <code>npm ci</code> &amp; <code>npm run build</code></span>
            </li>
            <li className="pipeline-step done">
              <span className="step-icon">✓</span>
              <span className="step-text">Deploy: <code>easingthemes/ssh-deploy@v5</code></span>
            </li>
            <li className="pipeline-step done">
              <span className="step-icon">✓</span>
              <span className="step-text">Remote Hook: PM2 serve / restart on port 8080</span>
            </li>
          </ul>
        </section>

        {/* Live Diagnostics Card */}
        <section className="dashboard-card">
          <div className="card-header">
            <span className="card-icon">🩺</span>
            <h2>Live Connectivity Diagnostics</h2>
          </div>
          <p className="card-description">
            Verify connectivity to the configured API endpoint directly from this browser session.
          </p>
          <div className="action-buttons">
            <button
              type="button"
              className="action-btn"
              onClick={testApiConnection}
              disabled={testingApi}
            >
              {testingApi ? 'Testing API...' : 'Test API Base URL'}
            </button>
            <button
              type="button"
              className="action-btn secondary-btn"
              onClick={copyDetails}
            >
              {copied ? 'Copied ✓' : 'Copy System Info'}
            </button>
          </div>
          {apiStatus && (
            <div
              className={`diagnostic-box ${
                apiStatus.success ? 'diagnostic-success' : 'diagnostic-warning'
              }`}
            >
              <strong>Status:</strong> {apiStatus.message}
            </div>
          )}
        </section>
      </main>

      <footer className="dashboard-footer">
        <p>RackGenius Infrastructure &bull; Automated Deployment Pipeline &bull; React + Vite</p>
      </footer>
    </div>
  )
}

export default App
