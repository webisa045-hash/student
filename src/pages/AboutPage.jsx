import CrestLogo from '../components/CrestLogo';
import { SCHOOL_INFO, IMAGES, LEADERSHIP_TEAM } from '../data/schoolData';

export default function AboutPage({ setActivePage, onOpenAdmission }) {
  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-wrapper about-page">
      {/* Banner */}
      <section className="subpage-banner" style={{ backgroundImage: `url(${IMAGES.campusBuilding})` }}>
        <div className="subpage-overlay"></div>
        <div className="container subpage-banner-content">
          <span className="subpage-tag">HISTORY &bull; LEADERSHIP &bull; VALUES</span>
          <h1 className="subpage-title">About Demo High School, Mbale</h1>
          <p className="subpage-description">
            Four decades of exemplary academic excellence, moral integrity, and transformative secondary education in Eastern Uganda.
          </p>
        </div>
      </section>

      {/* History & Origin */}
      <section className="section-padding">
        <div className="container">
          <div className="about-split-row">
            <div className="about-text-col">
              <span className="section-eyebrow">OUR HERITAGE</span>
              <h2 className="section-title">Founded to Elevate Minds in Bugisu &amp; Beyond</h2>
              <p className="lead-paragraph">
                Established in 1984 along Cathedral Avenue in Mbale Municipality, <strong>{SCHOOL_INFO.name}</strong> was created to meet the soaring demand for disciplined, high-standard secondary education in Eastern Uganda.
              </p>
              <p className="body-paragraph">
                Over the past 40+ years, our campus has expanded from a modest single classroom block into a sprawling 35-acre educational complex featuring modern science laboratories, an ultra-fast Starlink ICT resource center, separate boys' and girls' boarding dormitories, and multi-purpose sports grounds under the magnificent presence of Mount Elgon.
              </p>
              <p className="body-paragraph">
                Today, registered as UNEB Examination Center <strong>{SCHOOL_INFO.centerNumberUCE}</strong>, we take immense pride in thousands of alumni serving as respected medical practitioners, engineers, jurists, civil servants, and innovative entrepreneurs across Uganda and internationally.
              </p>

              <div className="history-milestones">
                <div className="milestone-item">
                  <span className="milestone-year">1984</span>
                  <span className="milestone-desc">School founded by visionary community educators in Mbale.</span>
                </div>
                <div className="milestone-item">
                  <span className="milestone-year">1996</span>
                  <span className="milestone-desc">Accredited as official UNEB UCE Examination Center.</span>
                </div>
                <div className="milestone-item">
                  <span className="milestone-year">2008</span>
                  <span className="milestone-desc">Expanded to full UACE 'A' Level Arts &amp; Science Combinations.</span>
                </div>
                <div className="milestone-item">
                  <span className="milestone-year">2026</span>
                  <span className="milestone-desc">Fully computerized learning, digital portal &amp; high-tech labs.</span>
                </div>
              </div>
            </div>

            <div className="about-img-col">
              <div className="about-img-stack">
                <img
                  src={IMAGES.studentsLawn}
                  alt="Students on Demo High School Campus Lawn"
                  className="stack-img-main"
                  loading="lazy"
                />
                <div className="about-crest-card">
                  <CrestLogo size={74} />
                  <strong>DEMO HIGH SCHOOL</strong>
                  <span>Mbale &bull; Uganda</span>
                  <small>&ldquo;{SCHOOL_INFO.motto}&rdquo;</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="section-padding bg-alt">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">GUIDING PRINCIPLES</span>
            <h2 className="section-title">Vision, Mission &amp; Core Values</h2>
            <p className="section-subtitle">
              The foundational pillars that guide our educators, students, and administration daily.
            </p>
          </div>

          <div className="vmv-grid">
            <div className="vmv-card vision-card">
              <div className="vmv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To be a premier center of holistic secondary education, academic excellence, and ethical leadership in Uganda and the wider East African Community.
              </p>
            </div>

            <div className="vmv-card mission-card">
              <div className="vmv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide high-quality education that inspires intellectual curiosity, moral integrity, civic responsibility, and practical skills in a supportive, God-fearing environment.
              </p>
            </div>
          </div>

          <div className="values-container">
            <h3 className="values-header-title">Our Six Core Values</h3>
            <div className="values-grid">
              <div className="value-chip">
                <span className="value-symbol">🙏</span>
                <div>
                  <strong>Godliness</strong>
                  <p>Spiritual reverence and moral uprightness in all endeavors.</p>
                </div>
              </div>
              <div className="value-chip">
                <span className="value-symbol">⚖️</span>
                <div>
                  <strong>Integrity</strong>
                  <p>Honesty, accountability, and ethical transparency.</p>
                </div>
              </div>
              <div className="value-chip">
                <span className="value-symbol">📖</span>
                <div>
                  <strong>Academic Rigour</strong>
                  <p>Uncompromising dedication to scholastic achievement.</p>
                </div>
              </div>
              <div className="value-chip">
                <span className="value-symbol">🛡️</span>
                <div>
                  <strong>Discipline</strong>
                  <p>Self-mastery, punctuality, and mutual respect.</p>
                </div>
              </div>
              <div className="value-chip">
                <span className="value-symbol">💡</span>
                <div>
                  <strong>Innovation</strong>
                  <p>Practical science, digital creativity, and critical thinking.</p>
                </div>
              </div>
              <div className="value-chip">
                <span className="value-symbol">🤝</span>
                <div>
                  <strong>Community Service</strong>
                  <p>Empathy and civic contribution to Mbale and Uganda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">GOVERNANCE &amp; FACULTY</span>
            <h2 className="section-title">School Administration &amp; Leadership</h2>
            <p className="section-subtitle">
              Experienced educational administrators dedicated to steering Demo High School toward greater heights.
            </p>
          </div>

          <div className="leadership-grid">
            {LEADERSHIP_TEAM.map((leader, i) => (
              <div key={i} className="leader-card">
                <div className="leader-img-wrap">
                  <img src={leader.image} alt={leader.name} loading="lazy" />
                  <span className="leader-role-tag">{leader.role}</span>
                </div>
                <div className="leader-content">
                  <h3 className="leader-name">{leader.name}</h3>
                  <div className="leader-qual">{leader.qualification}</div>
                  <p className="leader-bio">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Anthem & Crest Symbolism */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="anthem-crest-box">
            <div className="anthem-col">
              <span className="section-eyebrow">OUR HERITAGE SONG</span>
              <h3 className="anthem-title">The Demo High School Anthem</h3>
              <div className="anthem-lyrics">
                <p className="verse">
                  <strong>Verse 1:</strong><br />
                  Under Mount Elgon's towering skies,<br />
                  Our noble standard proudly flies.<br />
                  Demo High School, our beacon bright,<br />
                  Guiding our youth with wisdom's light.
                </p>
                <p className="chorus">
                  <strong>Chorus:</strong><br />
                  <em>
                    Arise, oh scholars of Demo High,<br />
                    With faith and truth, we reach the sky!<br />
                    Discipline, knowledge, and integrity,<br />
                    For God and country, our victory!
                  </em>
                </p>
                <p className="verse">
                  <strong>Verse 2:</strong><br />
                  In lecture halls and playing field,<br />
                  To ignorance we shall not yield.<br />
                  With hands and minds we forge ahead,<br />
                  By truth and honour always led.
                </p>
              </div>
            </div>

            <div className="crest-meaning-col">
              <span className="section-eyebrow">HERALDRY</span>
              <h3 className="anthem-title">The School Crest Symbolism</h3>
              <div className="crest-display-center">
                <CrestLogo size={110} />
              </div>
              <ul className="crest-symbols-list">
                <li>
                  <strong>Royal Shield:</strong> Symbolizes moral defense and spiritual protection.
                </li>
                <li>
                  <strong>Mount Elgon Silhouette:</strong> Represents our proud heritage and grounded resilience in Eastern Uganda.
                </li>
                <li>
                  <strong>Torch of Knowledge:</strong> Represents academic illumination that conquers ignorance.
                </li>
                <li>
                  <strong>Open Book:</strong> Represents commitment to the Holy Scriptures, research, and lifelong literacy.
                </li>
                <li>
                  <strong>Gold Banner:</strong> Proclaims our guiding motto: &ldquo;Strive for Excellence and Integrity&rdquo;.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div className="cta-text">
            <h2>Experience Demo High School First-hand</h2>
            <p>Schedule a guided tour of our Cathedral Avenue campus in Mbale or submit an admissions inquiry today.</p>
          </div>
          <div className="cta-buttons">
            <button
              type="button"
              className="btn btn-gold"
              onClick={onOpenAdmission}
            >
              Apply Online
            </button>
            <button
              type="button"
              className="btn btn-outline-white"
              onClick={() => navigateTo('contact')}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
