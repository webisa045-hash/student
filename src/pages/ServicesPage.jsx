import { SERVICES_LIST, IMAGES, FAQS } from '../data/schoolData';

export default function ServicesPage({ setActivePage, onOpenAdmission }) {
  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-wrapper services-page">
      {/* Subpage Header Banner */}
      <section className="subpage-banner" style={{ backgroundImage: `url(${IMAGES.library})` }}>
        <div className="subpage-overlay"></div>
        <div className="container subpage-banner-content">
          <span className="subpage-tag">OUR ACADEMIC &amp; STUDENT OFFERINGS</span>
          <h1 className="subpage-title">Curriculum, Facilities &amp; Services</h1>
          <p className="subpage-description">
            Empowering boys and girls in Mbale and across East Africa with balanced, high-standard secondary education, practical science training, and rich co-curricular life.
          </p>
        </div>
      </section>

      {/* Services Detailed Breakdown */}
      <section className="section-padding">
        <div className="container">
          <div className="services-detailed-list">
            {SERVICES_LIST.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`service-detail-row ${isEven ? 'row-reversed' : ''}`}
                >
                  <div className="service-img-col">
                    <div className="service-img-wrapper">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="service-feature-img"
                      />
                      <span className="service-badge-category">{service.category}</span>
                    </div>
                  </div>

                  <div className="service-text-col">
                    <div className="service-icon-heading">
                      <span className="service-large-icon">{service.icon}</span>
                      <h2>{service.title}</h2>
                    </div>
                    <p className="service-full-desc">{service.description}</p>

                    <div className="service-features-card">
                      <h4>Key Highlights &amp; Facilities:</h4>
                      <ul className="service-features-list">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx}>
                            <span className="check-bullet">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-action-btns">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={onOpenAdmission}
                      >
                        Inquire About This Program
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline"
                        onClick={() => navigateTo('contact')}
                      >
                        Contact Admissions Desk
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Daily Student Schedule & Pastoral Care */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">STUDENT LIFE AT DHS</span>
            <h2 className="section-title">A Day in the Life of a Demo Scholar</h2>
            <p className="section-subtitle">
              Balanced daily routines structured for discipline, intensive prep, physical wellness, and spiritual reflection.
            </p>
          </div>

          <div className="schedule-grid">
            <div className="schedule-card">
              <div className="schedule-time">05:30 AM &ndash; 06:30 AM</div>
              <h4>Morning Devotion &amp; Physical Warm-up</h4>
              <p>Dormitory inspection, personal hygiene, and morning prayers guided by school chaplains.</p>
            </div>
            <div className="schedule-card">
              <div className="schedule-time">07:00 AM &ndash; 08:00 AM</div>
              <h4>Nutritious Breakfast &amp; Assembly</h4>
              <p>Hot porridge, bread, and tea served in the Dining Hall followed by the Monday/Friday morning assembly.</p>
            </div>
            <div className="schedule-card">
              <div className="schedule-time">08:00 AM &ndash; 01:00 PM</div>
              <h4>Morning Academic Sessions</h4>
              <p>Intensive core curriculum lessons and science laboratory practical demonstrations.</p>
            </div>
            <div className="schedule-card">
              <div className="schedule-time">01:00 PM &ndash; 02:00 PM</div>
              <h4>Lunch &amp; Social Fellowship</h4>
              <p>Freshly prepared balanced meal (matooke, rice, beans, posho, and fresh fruits from Mount Elgon farms).</p>
            </div>
            <div className="schedule-card">
              <div className="schedule-time">02:00 PM &ndash; 04:30 PM</div>
              <h4>Afternoon Classes &amp; ICT Labs</h4>
              <p>Computer center sessions, elective subjects, library research, and student group discussions.</p>
            </div>
            <div className="schedule-card">
              <div className="schedule-time">04:30 PM &ndash; 06:00 PM</div>
              <h4>Games, Sports &amp; Club Activities</h4>
              <p>Inter-house football, netball, volleyball, athletics, brass band rehearsals, and debate society.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">COMMON INQUIRIES</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Learn about our admissions process, requirements, and fee payment systems.
            </p>
          </div>

          <div className="faq-grid">
            {FAQS.map((faq, i) => (
              <div key={i} className="faq-card">
                <h3 className="faq-question">
                  <span className="faq-icon">❓</span> {faq.q}
                </h3>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Portal Banner */}
      <section className="portal-subpage-cta">
        <div className="container portal-cta-inner">
          <div className="portal-cta-badge">SECURE ACADEMIC GATEWAY</div>
          <h2>Need to Check Continuous UNEB Assessment Marks?</h2>
          <p>
            Our school management system powered by WORM DAM is available 24/7. Access student records, report cards, and fee ledgers.
          </p>
          <button
            type="button"
            className="btn btn-gold"
            onClick={() => navigateTo('portal')}
          >
            🔒 Launch Access Portal (sec.wormdam.org)
          </button>
        </div>
      </section>
    </div>
  );
}
