import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Home.css'
import Popup from '../components/Popup'


/* ── Feature Card with 3D Flip & Bullet Points ── */
function FeatureCard({ icon, title, description, points = [], bgGradient, delay }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className={`feature-flip-card ${isFlipped ? 'is-flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsFlipped(!isFlipped)}
      style={{ animationDelay: `${delay}ms` }}
      role="button"
      tabIndex={0}
      title="Click to flip card"
    >
      <div className="feature-flip-inner">
        {/* Front Face: Info */}
        <div className="feature-flip-front feature-card">
          <div className="feature-icon-wrap">
            {typeof icon === 'string' && (icon.startsWith('http') || icon.startsWith('./')) ? (
              <img src={icon} alt={title} className="feature-icon" loading="lazy" />
            ) : (
              <span className="feature-icon-emoji">{icon}</span>
            )}
          </div>
          <h3 className="feature-title">{title}</h3>
          <p className="feature-desc">{description}</p>
          <div className="flip-hint-feature">🔄 Click for Key Highlights</div>
        </div>

        {/* Back Face: Colorful Background + Bullet Points + White Text */}
        <div className="feature-flip-back" style={{ background: bgGradient || 'linear-gradient(135deg, #0b2545 0%, #134074 100%)' }}>
          <div>
            <h4 className="feature-back-title">{title}</h4>
            <ul className="feature-back-bullets">
              {points.map((pt, idx) => (
                <li key={idx}>
                  <span className="bullet-star">✦</span> {pt}
                </li>
              ))}
            </ul>
          </div>
          <span className="flip-hint-back-feature">🔄 Click to Flip Back</span>
        </div>
      </div>
    </div>
  )
}

/* ── Desk Card ── */
function DeskCard({ image, fallbackImage, name, role, message, onImageClick }) {
  return (
    <div className="desk-card">
      <div 
        className="desk-img-wrap clickable-avatar" 
        onClick={() => onImageClick({ src: image, fallbackImage, name, role, message })}
        title="Click to view full portrait"
      >
        <img
          src={image}
          alt={name}
          className="desk-img"
          loading="lazy"
          onError={(e) => {
            if (fallbackImage && e.currentTarget.src !== fallbackImage) {
              e.currentTarget.src = fallbackImage;
            }
          }}
        />
        <span className="avatar-zoom-badge">🔍 Click to View</span>
      </div>
      <div className="desk-content">
        <h3 className="desk-name">{name}</h3>
        <p className="desk-role">{role}</p>
        <p className="desk-msg">{message}</p>
      </div>
    </div>
  )
}

/* ── Flippable Infrastructure Card ── */
function FlippableInfraCard({ item }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className={`infra-flip-card ${isFlipped ? 'is-flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      title="Click to flip card"
    >
      <div className="infra-flip-inner">
        {/* Front: Info Card */}
        <div className="infra-flip-front infra-card">
          <div className="infra-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <div className="flip-hint">🔄 Click for Photo</div>
        </div>

        {/* Back: Photo */}
        <div className="infra-flip-back">
          <img src={item.image} alt={item.title} className="infra-back-img" loading="lazy" />
          <div className="infra-back-overlay">
            <h4>{item.title}</h4>
            <span className="flip-hint-back">🔄 Click for Info</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [showPopup, setShowPopup] = useState(false)
  const [leaderModal, setLeaderModal] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const heroVideoRef = useRef(null)

  const toggleMute = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const togglePlay = () => {
    if (heroVideoRef.current) {
      if (isPlaying) {
        heroVideoRef.current.pause()
      } else {
        heroVideoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }


  const features = [
    {
      icon: 'https://ahws.edu.in/images/21st-Century-Technology_-150x100.webp',
      title: 'Technology-Integrated',
      description: 'Smart classrooms, modern labs, and AI-integrated tools that prepare our students with essential digital age competencies.',
      bgGradient: 'linear-gradient(135deg, #0b2545 0%, #134074 100%)',
      points: [
        'Interactive 3D Smart Boards in Classrooms',
        'Robotics & AI Hands-On Kits',
        'X-Wall & Speak-O-Pen Language Tools',
        '360° Mobile App Real-Time Access'
      ]
    },
    {
      icon: 'https://ahws.edu.in/images/Holistic-Education-150x100.webp',
      title: 'Learning Beyond Books',
      description: 'Equal emphasis on academics, sports, performing arts, leadership, life skills, and experiential learning.',
      bgGradient: 'linear-gradient(135deg, #004d40 0%, #00695c 100%)',
      points: [
        'Experiential & Outdoor Field Learning',
        'Theater, Dance, Music & Fine Arts',
        'Leadership & Personality Workshops',
        '9-Sport Athletic Infrastructure'
      ]
    },
    {
      icon: 'https://ahws.edu.in/images/Future-Ready-150x100.webp',
      title: 'Global Outlook, Indian Values',
      description: 'Nurturing responsible global citizens rooted in Indian ethics, culture, compassion, and respect.',
      bgGradient: 'linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)',
      points: [
        'Rooted in Rich Indian Ethics & Heritage',
        'Global Citizen Competencies & Mindset',
        'Character Building & Value Education',
        'Empathy, Integrity & Social Compassion'
      ]
    },
    {
      icon: 'https://ahws.edu.in/images/Future-Ready-150x100.webp',
      title: 'Playgroup to University',
      description: 'A seamless academic journey from early years to university pathways through Rishihood University — all part of our unified brand group.',
      bgGradient: 'linear-gradient(135deg, #880e4f 0%, #c2185b 100%)',
      points: [
        'Playgroup to Higher Education',
        'Unified Group: Bachpan, AHWS & Rishihood',
        'Continuous Guided Mentorship',
        'Smooth Higher Ed Transitions'
      ]
    },
  ]

  const uniquenessData = [
    {
      icon: 'https://ahws.edu.in/images/icons-section-01-1024x1024.webp',
      title: 'SPROUT Curriculum',
      tagline: 'NEP-2020 aligned holistic development',
      desc: 'Our signature SPROUT curriculum integrates scholastic and co-scholastic pedagogies, life skills, value education, critical thinking, and future-ready abilities — aligned with NEP-2020, NCF-2023, and the NIPUN Bharat Mission.',
      hero: true,
    },
    {
      icon: 'https://ahws.edu.in/images/icons-section-02-1024x1024.webp',
      title: 'Bright Class & Smart Boards',
      tagline: 'AI-powered interactive classrooms with immersive 3D learning experiences.',
    },
    {
      icon: 'https://ahws.edu.in/images/icons-section-05-1024x1024.webp',
      title: 'Robotics & AI Labs',
      tagline: 'Hands-on STEM learning with real robotic kits and programming.',
    },
    {
      icon: 'https://ahws.edu.in/images/icons-section-03-1024x1024.png',
      title: '360° Support App',
      tagline: 'Complete Parent & School Automation',
      desc: 'Fully encompassing automation solution with role-customized portals for parents, teachers, and students. Monitor daily progress, attendance, academic reports, and school communications in real-time.',
      hero: true,
    },
    {
      icon: 'https://ahws.edu.in/images/icons-section-04-1024x1024.webp',
      title: '9-Sport Portfolio',
      tagline: 'Comprehensive Athletics Infrastructure',
      desc: 'Pickleball, Cricket, Football, Badminton, Tennis, Basketball, Volleyball, Taekwondo & Chess — dedicated coaching and professional athletic infrastructure for all-round physical excellence.',
      hero: true,
    },
    {
      icon: 'https://ahws.edu.in/images/icons-section-07-1024x1024.webp',
      title: 'Decode Startup',
      tagline: 'Entrepreneurship in school',
      desc: 'Students pitch real business ideas to investors and receive initial funding — building entrepreneurs while still in school. A one-of-a-kind program that nurtures innovation, financial literacy, and leadership from an early age.',
      hero: true,
    },
    {
      icon: 'https://ahws.edu.in/images/icons-section-06-1024x1024.webp',
      title: 'Performing Arts',
      tagline: 'Theatre, Dance, Music & Art with professional coaches and stage exposure.',
    },
    {
      icon: 'https://ahws.edu.in/images/icons-section-08-1024x1024.webp',
      title: 'X-Wall & Speak-O-Pen',
      tagline: 'Immersive learning wall + smart pronunciation tools for language mastery.',
    },
  ]

  const infraItems = [
    { 
      title: 'Smart Classrooms', 
      icon: '💻', 
      desc: 'Interactive digital boards, ergonomic seating, and 3D digital learning tools.',
      image: './WEBSITE GALLERY/other images/smart class room with 3D modes in the smart screen .jpeg'
    },
    { 
      title: 'Science Laboratories', 
      icon: '🔬', 
      desc: 'Fully equipped Physics, Chemistry, Composite, and Biology labs with advanced safety features.',
      image: './WEBSITE GALLERY/other images/science lab.jpeg'
    },
    { 
      title: 'Robotics Lab', 
      icon: '🤖', 
      desc: 'An immersive setting equipped with distinct types of robotic kits, empowering students to harness the power of programming to design and build practical robots.',
      image: './WEBSITE GALLERY/other images/robotics lab.jpeg'
    },
    { 
      title: 'Library', 
      icon: '📚', 
      desc: 'A vast collection of academic books, journals, fiction, and digital resources.',
      image: './images/library 1.jpeg'
    },
    { 
      title: 'Sports', 
      icon: '🏅', 
      desc: 'Pickleball court, outdoor basketball court, outdoor football field, and cricket nets.',
      image: './images/Basketball 1.jpeg'
    },
    { 
      title: 'Art & Music Studios', 
      icon: '🎨', 
      desc: 'Dedicated spaces for painting, sculpture, classical music, and dance.',
      image: './WEBSITE GALLERY/other images/kid making art.jpeg'
    },
  ]

  const galleryImages = [
    { src: './WEBSITE GALLERY/other images/science lab.jpeg', alt: 'Science Lab', title: 'Science Laboratory' },
    { src: './images/Robotics 1.jpeg', alt: 'Robotics Lab', title: 'Robotics & AI Innovation Lab' },
    { src: './images/Green campus.png', alt: 'Green Campus', title: 'Lush Green Eco-Campus' },
    { src: './images/library 1.jpeg', alt: 'Library', title: 'Library & Resource Centre' },
    { src: './WEBSITE GALLERY/other images/smart class room with 3D modes in the smart screen .jpeg', alt: 'Classroom', title: 'Smart Classrooms' },
    { src: './images/Basketball 1.jpeg', alt: 'Basketball Court', title: 'Basketball & Sports Court' },
  ]

  return (
    <main className="home-page">
      <h1 className="sr-only">Academic Heights World School (AHWS) – Best CBSE School in Pitampura, Delhi</h1>
      {/* ── Hero Section ── */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-video-wrap">
            <video
              ref={heroVideoRef}
              className="hero-video"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              poster="https://ahws.edu.in/images/hero-fallback.jpg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="https://ahws.edu.in/images/world-school.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero-video-controls-overlay">
              <button 
                type="button" 
                className="video-control-btn" 
                onClick={togglePlay}
                title={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? '⏸️ Pause' : '▶️ Play'}
              </button>
              <button 
                type="button" 
                className="video-control-btn" 
                onClick={toggleMute}
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
              >
                {isMuted ? '🔇 Unmute Sound' : '🔊 Sound On'}
              </button>
            </div>
          </div>

          <div className="hero-form-container">
          <div className="hero-form-card">
            <h3>Quick Enquiry</h3>
            <p>Connect with our admissions team instantly. (Parent/Guardian details)</p>
            <form onSubmit={(e) => { 
              e.preventDefault(); 
              const form = e.target;
              setIsSubmitting(true);
              setTimeout(() => {
                setShowPopup(true); 
                form.reset();
                setIsSubmitting(false);
              }, 1000);
            }}>
                <label htmlFor="hf-parentname" className="sr-only">Parent's Name</label>
                <input id="hf-parentname" type="text" placeholder="Parent's Name" className="hf-input" required />
                
                <div className="phone-input-group">
                  <label htmlFor="hf-phone" className="sr-only">Phone Number</label>
                  <span className="phone-prefix">+91</span>
                  <input id="hf-phone" type="tel" placeholder="Phone Number" className="hf-input phone-input" pattern="[0-9]{10}" maxLength={10} required />
                </div>
                
                <label htmlFor="hf-class" className="sr-only">Select Class</label>
                <select id="hf-class" className="hf-input" required defaultValue="">
                <option value="">Select Class</option>
                <option value="Nursery">Nursery</option>
                <option value="KG">Kindergarten</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
              <button type="submit" className="btn-primary-ahws hf-submit" disabled={isSubmitting}>
                {isSubmitting ? '⏳ Sending...' : 'Get a Call Back'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

      {/* ── Infrastructure / World-Class Facilities ── */}
      <section className="infra-section">
        <div className="container">
          <h2 className="section-title">World-Class Facilities</h2>
          <div className="divider-line" />
          <p className="infra-intro">
            At Academic Heights World School, we believe that the right environment is crucial for effective learning.
            Our campus is thoughtfully designed to provide students with state-of-the-art facilities that cater to
            academic, athletic, and artistic pursuits.
          </p>
          <div className="infra-grid">
            {infraItems.map((item, i) => (
              <FlippableInfraCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission, Vision & Values ── */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To provide a world-class education that empowers students with knowledge, skills, and values to excel academically and become compassionate, responsible global citizens who contribute meaningfully to society.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>To be the leading educational institution in India, recognized for nurturing innovative thinkers, ethical leaders, and lifelong learners through cutting-edge technology, holistic development, and academic excellence.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">💎</div>
              <h3>Our Values</h3>
              <p>Excellence, Integrity, Innovation, Compassion, and Collaboration — these core values guide every aspect of our educational approach, shaping students into well-rounded individuals ready for tomorrow's challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Empowering Section (Why Join AHWS) ── */}
      <section className="empowering-section">
        <div className="container">
          <h2 className="section-title">Why Join Academic Heights World School?</h2>
          <div className="divider-line" />
          <div className="features-grid">
            {features.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* ── From The Desk ── */}
      <section className="desk-section">
        <div className="container">
          <h2 className="section-title">Guiding Voices</h2>
          <div className="divider-line" />
          <div className="desk-grid">
            <DeskCard
              image="./images/Ms Rosy Ahuja.png"
              fallbackImage="https://ahws.edu.in/images/OUR-SKILLED-INSTRUCTORS-002-1.jpg"
              name="Mrs. Rosy Ahuja"
              role="Director"
              message="Welcome to Academic Heights World School. With an unwavering dedication to excellence, our mission is to mold inquisitive young minds into the visionary leaders of tomorrow. By fostering innovation, creativity, and academic rigor, we build the foundation for a brighter future—together."
              onImageClick={setLeaderModal}
            />
            <DeskCard
              image="./images/Ms Rachna Anand.png"
              fallbackImage="https://ahws.edu.in/images/OUR-SKILLED-INSTRUCTORS-001-1.webp"
              name="Mrs. Rachna Anand"
              role="Principal"
              message="It is my absolute privilege to welcome you to our vibrant community of learners, parents, and educators. As we set the standard for educational excellence in Delhi, I am deeply grateful for your continued trust and collaboration. Let us inspire greatness in every child."
              onImageClick={setLeaderModal}
            />
          </div>
        </div>
      </section>

      {/* ── Uniqueness Defined ── */}
      <section className="uniqueness-section">
        <div className="container">
          <h2 className="section-title">UNIQUENESS DEFINED</h2>
          <p className="uniqueness-subtitle">What sets Academic Heights World School apart — 8 pillars of educational excellence.</p>
          <div className="divider-line" />
          <div className="bento-grid">
            {uniquenessData.map((item, i) => (
              <div key={i} className={`bento-card${item.hero ? ' bento-hero' : ''}`}>
                <div className="bento-icon-wrap">
                  <img src={item.icon} alt={item.title} loading="lazy" />
                </div>
                <div className="bento-text">
                  <h4 className="bento-title">{item.title}</h4>
                  <p className="bento-tagline">{item.tagline}</p>
                  {item.desc && <p className="bento-desc">{item.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Campus Gallery ── */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Life at AHWS — Campus Gallery</h2>
          <div className="divider-line" />
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="gallery-swiper"
          >
            {galleryImages.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="gallery-item">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <div className="gallery-overlay">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Popup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)}
        title="We're Thrilled to Connect!"
        message="Your enquiry has been successfully submitted. Our admissions counselors will be in touch with you very soon to answer all your questions."
        buttonText="Done"
      />

      {leaderModal && (
        <div className="leader-modal-backdrop" onClick={() => setLeaderModal(null)}>
          <div className="leader-modal-content" onClick={e => e.stopPropagation()}>
            <button className="leader-modal-close" onClick={() => setLeaderModal(null)}>✕</button>
            <div className="leader-modal-img-wrap">
              <img 
                src={leaderModal.src} 
                alt={leaderModal.name} 
                onError={e => {
                  if (leaderModal.fallbackImage && e.currentTarget.src !== leaderModal.fallbackImage) {
                    e.currentTarget.src = leaderModal.fallbackImage;
                  }
                }}
              />
            </div>
            <div className="leader-modal-details">
              <h3>{leaderModal.name}</h3>
              <span className="leader-modal-role">{leaderModal.role}</span>
              <p className="leader-modal-msg">{leaderModal.message}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
