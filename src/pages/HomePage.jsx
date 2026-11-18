import { SCHOOL_INFO, IMAGES, QUICK_STATS, ANNOUNCEMENTS, TESTIMONIALS } from '../data/schoolData';

export default function HomePage({ setActivePage, onOpenAdmission }) {
  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-wrapper home-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${IMAGES.heroBanner})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            Premier Secondary Institution &bull; Mbale, Uganda
          </div>
          <h1 className="hero-title">
            Nurturing Excellence, Discipline &amp; Future Leaders
          </h1>
          <p className="hero-tagline">
            Welcome to <strong>{SCHOOL_INFO.name}</strong>, nestled at the foot of Mount Elgon. We provide world-class Uganda National Curriculum (UCE &amp; UACE) instruction, state-of-the-art science laboratories, and holistic pastoral care.
          </p>
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenAdmission}
            >
              Apply for Admission
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigateTo('services')}
            >
              Explore Curriculum &amp; Services
            </button>
            <button
              type="button"
              className="btn btn-portal-hero"
              onClick={() => navigateTo('portal')}
            >
              🔒 Access Online Portal
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats Strip */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {QUICK_STATS.map((stat, i) => (
              <div key={i} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-desc">{stat.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome from Headteacher */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="welcome-split">
            <div className="welcome-image-col">
              <div className="image-frame">
                <img
                  src={IMAGES.teacherStudent}
                  alt="Headteacher addressing learners at Demo High School"
                  className="welcome-img"
                  loading="lazy"
                />
                <div className="image-badge-floating">
                  <span className="badge-years">Over 40 Years</span>
                  <span className="badge-text">Of Academic Legacy in Mbale</span>
                </div>
              </div>
            </div>
            <div className="welcome-text-col">
              <span className="section-eyebrow">HEADTEACHER'S WELCOME</span>
              <h2 className="section-title">A Tradition of Hard Work, Moral Virtue &amp; Discovery</h2>
              <p className="lead-paragraph">
                &ldquo;On behalf of the Board of Governors, PTA executive, and teaching faculty, I warmly welcome you to Demo High School, Mbale.&rdquo;
              </p>
              <p className="body-paragraph">
                Located in the heart of Bugisu Sub-region along Cathedral Avenue, our mission is to build intellectual competence and spiritual maturity in every boy and girl entrusted to us. We combine rigorous UNEB exam preparation with practical science innovation, ICT literacy, and active sports.
              </p>
              <div className="quote-box">
                <p>
                  &ldquo;We don't merely educate for certificates; we educate for lifelong impact, integrity, and national transformation.&rdquo;
                </p>
                <cite>&mdash; Mr. Charles Wanyama, Headteacher</cite>
              </div>
              <div className="welcome-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => navigateTo('about')}
                >
                  Read Our Full Story &amp; Values &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Academic Pillars */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">CORE PILLARS</span>
            <h2 className="section-title">Why Parents Trust Demo High School</h2>
            <p className="section-subtitle">
              Comprehensive secondary education designed to foster academic triumph, technological competency, and personal character.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">🔬</div>
              <h3>Advanced Science Labs</h3>
              <p>Dedicated Physics, Chemistry, and Biology laboratories equipped with modern apparatus and chemicals for UNEB practical excellence.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">💻</div>
              <h3>Starlink ICT Center</h3>
              <p>60-seat computer laboratory delivering digital literacy, programming fundamentals, and online academic research access.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">🏡</div>
              <h3>Secure Boarding Facilities</h3>
              <p>Monitored residential halls for boys and girls with solar backup, clean water, pastoral chaplaincy, and on-site healthcare.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">⚽</div>
              <h3>Sports &amp; Cultural MDD</h3>
              <p>Championship football, netball, athletics, brass band, and award-winning cultural music, dance, and drama groups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview with Images */}
      <section className="section-padding bg-alt">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">ACADEMIC EXCELLENCE</span>
            <h2 className="section-title">Our Learning Programs &amp; Campus Services</h2>
            <p className="section-subtitle">
              From S.1 foundation up to pre-university S.6 combinations, discover how we support every learner's aspirations.
            </p>
          </div>

          <div className="services-showcase-grid">
            <div className="showcase-card">
              <div className="showcase-img-wrap">
                <img src={IMAGES.classroom} alt="O-Level learners" loading="lazy" />
                <span className="showcase-tag">Lower Secondary</span>
              </div>
              <div className="showcase-body">
                <h3>Uganda 'O' Level (UCE)</h3>
                <p>NCDC revised competence-based curriculum focusing on science discovery, languages, humanities, and vocational skills.</p>
                <button
                  type="button"
                  className="link-btn"
                  onClick={() => navigateTo('services')}
                >
                  Learn more &rarr;
                </button>
              </div>
            </div>

            <div className="showcase-card">
              <div className="showcase-img-wrap">
                <img src={IMAGES.studyGroup} alt="A-Level scholars" loading="lazy" />
                <span className="showcase-tag">Advanced Secondary</span>
              </div>
              <div className="showcase-body">
                <h3>Uganda 'A' Level (UACE)</h3>
                <p>Top-tier Arts and Science combinations (PCB, PCM, BCM, HEG, HEL) mentoring learners for university scholarship placement.</p>
                <button
                  type="button"
                  className="link-btn"
                  onClick={() => navigateTo('services')}
                >
                  Learn more &rarr;
                </button>
              </div>
            </div>

            <div className="showcase-card">
              <div className="showcase-img-wrap">
                <img src={IMAGES.library} alt="Campus Library" loading="lazy" />
                <span className="showcase-tag">Resource Center</span>
              </div>
              <div className="showcase-body">
                <h3>Modern Library &amp; E-Learning</h3>
                <p>Over 10,000 reference volumes, past paper archives, quiet reading rooms, and digital research terminals.</p>
                <button
                  type="button"
                  className="link-btn"
                  onClick={() => navigateTo('services')}
                >
                  Learn more &rarr;
                </button>
              </div>
            </div>
          </div>

          <div className="center-btn-wrap">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigateTo('services')}
            >
              Explore All Academic Services &amp; Facilities
            </button>
          </div>
        </div>
      </section>

      {/* Noticeboard & Announcements */}
      <section className="section-padding">
        <div className="container">
          <div className="noticeboard-container">
            <div className="noticeboard-header">
              <div>
                <span className="section-eyebrow">SCHOOL NOTICEBOARD</span>
                <h2 className="section-title">Latest News &amp; Upcoming Events</h2>
              </div>
              <div className="portal-notice-chip" onClick={() => navigateTo('portal')}>
                <span>🔒 View Student Portals &amp; Term Reports</span>
              </div>
            </div>

            <div className="announcements-grid">
              {ANNOUNCEMENTS.map((item) => (
                <div key={item.id} className="announcement-card">
                  <div className="announcement-meta">
                    <span className="badge-tag">{item.tag}</span>
                    <span className="announcement-date">📅 {item.date}</span>
                  </div>
                  <h3 className="announcement-title">{item.title}</h3>
                  <p className="announcement-summary">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Photo Gallery */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">CAMPUS LIFE</span>
            <h2 className="section-title">Life at Demo High School</h2>
            <p className="section-subtitle">
              Take a visual tour through our vibrant campus, laboratories, and student activities under Wanale Ridge.
            </p>
          </div>

          <div className="gallery-masonry">
            <div className="gallery-item item-large">
              <img src={IMAGES.campusBuilding} alt="Historic Campus Building" loading="lazy" />
              <div className="gallery-caption">Main Administration Block &amp; Quadrangle</div>
            </div>
            <div className="gallery-item">
              <img src={IMAGES.scienceLab} alt="Students in Chemistry Lab" loading="lazy" />
              <div className="gallery-caption">Chemistry Practical Sessions</div>
            </div>
            <div className="gallery-item">
              <img src={IMAGES.computerLab} alt="Computer Lab Workstations" loading="lazy" />
              <div className="gallery-caption">ICT &amp; Digital Literacy Center</div>
            </div>
            <div className="gallery-item">
              <img src={IMAGES.sportsField} alt="School Sports Field" loading="lazy" />
              <div className="gallery-caption">Athletics &amp; Inter-House Competitions</div>
            </div>
            <div className="gallery-item">
              <img src={IMAGES.studentsLawn} alt="Scholars on Campus Lawn" loading="lazy" />
              <div className="gallery-caption">Friendly, Inclusive Student Community</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">VOICES OF SUCCESS</span>
            <h2 className="section-title">What Our Community Says</h2>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <strong className="testimonial-author">{t.author}</strong>
                    <div className="testimonial-role">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div className="cta-text">
            <h2>Ready to Join Demo High School, Mbale?</h2>
            <p>Admissions for Senior One, Senior Five, and transfer vacancies are open for the upcoming academic term.</p>
          </div>
          <div className="cta-buttons">
            <button
              type="button"
              className="btn btn-gold"
              onClick={onOpenAdmission}
            >
              Enroll / Inquire Online
            </button>
            <button
              type="button"
              className="btn btn-outline-white"
              onClick={() => navigateTo('contact')}
            >
              Visit Our Mbale Campus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
