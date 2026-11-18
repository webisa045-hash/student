import { useState } from 'react';
import { SCHOOL_INFO, IMAGES } from '../data/schoolData';

export default function ContactPage({ setActivePage }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'Admissions & Inquiries',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      department: 'Admissions & Inquiries',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="page-wrapper contact-page">
      {/* Banner */}
      <section className="subpage-banner" style={{ backgroundImage: `url(${IMAGES.campusBuilding})` }}>
        <div className="subpage-overlay"></div>
        <div className="container subpage-banner-content">
          <span className="subpage-tag">LOCATE US &bull; GET IN TOUCH</span>
          <h1 className="subpage-title">Contact &amp; Campus Location</h1>
          <p className="subpage-description">
            We are always delighted to welcome prospective parents, scholars, alumni, and education partners to our Mbale campus.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left: Contact Info Cards */}
            <div className="contact-info-column">
              <span className="section-eyebrow">REACH OUR OFFICES</span>
              <h2 className="section-title">Get in Touch with DHS Mbale</h2>
              <p className="contact-lead">
                Have questions regarding S.1 or S.5 admissions, student welfare, or visiting hours? Connect directly with our administration.
              </p>

              <div className="contact-cards-stack">
                <div className="contact-card-item">
                  <div className="contact-card-icon">📍</div>
                  <div className="contact-card-content">
                    <h4>Physical Campus Location</h4>
                    <p>{SCHOOL_INFO.fullAddress}</p>
                    <span className="contact-landmark">Landmark: Along Cathedral Avenue, overlooking Wanale Ridge</span>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="contact-card-icon">📞</div>
                  <div className="contact-card-content">
                    <h4>Direct Telephone Lines</h4>
                    <p>
                      Reception: <a href={`tel:${SCHOOL_INFO.phone}`}>{SCHOOL_INFO.phone}</a>
                    </p>
                    <p>
                      Admissions: <a href={`tel:${SCHOOL_INFO.mobile1}`}>{SCHOOL_INFO.mobile1}</a>
                    </p>
                    <p>
                      Administration: <a href={`tel:${SCHOOL_INFO.mobile2}`}>{SCHOOL_INFO.mobile2}</a>
                    </p>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="contact-card-icon">✉️</div>
                  <div className="contact-card-content">
                    <h4>Official Email Inquiries</h4>
                    <p>
                      General: <a href={`mailto:${SCHOOL_INFO.email}`}>{SCHOOL_INFO.email}</a>
                    </p>
                    <p>
                      Admissions: <a href={`mailto:${SCHOOL_INFO.admissionsEmail}`}>{SCHOOL_INFO.admissionsEmail}</a>
                    </p>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="contact-card-icon">🕒</div>
                  <div className="contact-card-content">
                    <h4>Visiting &amp; Office Hours</h4>
                    <p>Monday &ndash; Friday: 8:00 AM &ndash; 5:00 PM</p>
                    <p>Saturday: 8:30 AM &ndash; 1:00 PM</p>
                    <p className="contact-landmark">Sunday: Closed (Official Boarding Visitation Days by calendar)</p>
                  </div>
                </div>
              </div>

              {/* Portal Callout */}
              <div className="contact-portal-callout">
                <h4>Already an Enrolled Student or Parent?</h4>
                <p>To check examination continuous assessments or term balances, visit our secure online portal directly.</p>
                <button
                  type="button"
                  className="btn btn-portal-small"
                  onClick={() => {
                    setActivePage('portal');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  🔒 Access Online Portal
                </button>
              </div>
            </div>

            {/* Right: Interactive Message Form */}
            <div className="contact-form-column">
              <div className="contact-form-card">
                <h3>Send Us an Inquiry</h3>
                <p className="form-subtext">Fill in the form below and our administrative secretary will respond within 24 hours.</p>

                {submitted ? (
                  <div className="contact-success-state">
                    <div className="success-badge-icon">✓</div>
                    <h4>Message Successfully Sent!</h4>
                    <p>
                      Thank you, <strong>{formData.name}</strong>. Your inquiry has been routed to our <strong>{formData.department}</strong>.
                    </p>
                    <p>A confirmation email and SMS reply will be delivered shortly.</p>
                    <button type="button" className="btn btn-primary" onClick={resetForm}>
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Your Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. Moses Wanambwa"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="e.g. +256 772 000 000"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="e.g. moses@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label htmlFor="department">Department *</label>
                        <select
                          id="department"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                        >
                          <option value="Admissions & Inquiries">Admissions &amp; Registration</option>
                          <option value="Academic Registrar">Director of Studies (DOS)</option>
                          <option value="Bursar & Accounts">Bursar &amp; School Fees</option>
                          <option value="Boarding & Welfare">Boarding &amp; Student Welfare</option>
                          <option value="Headteacher Office">Office of the Headteacher</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="subject">Subject *</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          placeholder="e.g. S.1 Admission Inquiry"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message Details *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                        placeholder="Please write your detailed inquiry or message here..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary submit-full-btn">
                      Send Message &rarr;
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map & Travel Directions */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">DIRECTIONS &amp; ACCESS</span>
            <h2 className="section-title">How to Find Us in Mbale</h2>
            <p className="section-subtitle">
              Conveniently accessible from Mbale City Center, Pallisa Road, Tororo Road, and the Soroti Highway.
            </p>
          </div>

          <div className="map-card-wrapper">
            <div className="map-interactive-view">
              <div className="map-placeholder-box">
                <div className="map-pin-pulse">
                  <span className="map-pin">📍</span>
                  <div className="map-pulse-ring"></div>
                </div>
                <div className="map-caption-card">
                  <h4>Demo High School Campus</h4>
                  <p>Plot 14 Cathedral Avenue, Mbale Municipality</p>
                  <small>Slopes of Wanale Ridge &bull; Coordinates: 1.0784&deg; N, 34.1755&deg; E</small>
                </div>
              </div>
            </div>

            <div className="directions-box">
              <h4>Travel Directions to Campus:</h4>
              <ul className="directions-list">
                <li>
                  <strong>From Mbale Clock Tower / Post Office:</strong> Head east along Republic Street, turn left onto Cathedral Avenue for approximately 1.2 kilometers. The main school gates will be on your right.
                </li>
                <li>
                  <strong>From Tororo / Jinja Highway:</strong> Enter Mbale via Tororo Road, branch right at the Cathedral junction towards Wanale view.
                </li>
                <li>
                  <strong>Public Transport (Boda Boda &amp; Matatu):</strong> Tell any driver &ldquo;Demo High School, Cathedral Avenue&rdquo; &mdash; our campus is a well-known educational landmark.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
