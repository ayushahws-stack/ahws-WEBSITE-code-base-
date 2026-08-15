import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Gallery.css'
import PageBanner from '../components/PageBanner'

// ─── REAL EVENT PHOTOS ─────────────────────────────────────────────────────
// All paths are relative to /public — served as static assets by Vite.
// Folder names use URL-encoding for spaces and special chars.

const photoCategories = ['All', 'Awards & Recognition', 'Festivals & Culture', 'Sports', 'School Events', 'Community & Outreach', 'Workshops']

const photos = [
  // ── Awards & Recognition ─────────────────────────────────────────────
  {
    id: 1,
    title: 'Saina Nehwal at AHWS Mega Competitions 2024',
    category: 'Awards & Recognition',
    date: '2024',
    folder: 'Saina Nehwal and Bajrang Poonia',
    images: [
'KUND1890.jpeg',
      'KUND1891.jpeg',
      'rosy mam 2025.jpeg',
    ],
  },
  {
    id: 2,
    title: 'Solar Energy Powered School Award 2025',
    category: 'Awards & Recognition',
    date: 'November 20, 2025',
    folder: 'Solar Energy Powered School Award 2025',
    images: [
'081e6c19-4d56-4f1d-9ccf-50dda8f3d28b.jpeg',
      '4043249e-44a8-4295-9870-7849253df924.jpeg',
      '7dff1aaf-1e04-4971-9dae-0c38bf767dfc.jpeg',
    ],
  },
  {
    id: 3,
    title: 'Times Education Icons 2025 North Award',
    category: 'Awards & Recognition',
    date: 'November 2025',
    folder: 'Times Education Icons 2025 North Award',
    images: [
'3f59e0f8-26b1-4a09-8c56-3fd6b30ef4e0.jpeg',
      'WhatsApp Image 2025-11-01 at 8.06.42 AM.jpeg',
    ],
  },
  {
    id: 4,
    title: 'Meet with Hon\'ble Dy. CM Mr. Pravesh Verma Ji',
    category: 'Awards & Recognition',
    date: 'September 11, 2025',
    folder: "Meet with Hon’ble Dy. CM Mr. Pravesh Verma Ji (11-09-2025)",
    images: [
'WhatsApp Image 2025-09-11 at 7.24.32 PM (1).jpeg',
      'WhatsApp Image 2025-09-11 at 7.24.32 PM.jpeg',
    ],
  },
  {
    id: 5,
    title: 'Meet with Environment Minister Mr. Manjinder Singh Sirsa Ji',
    category: 'Awards & Recognition',
    date: 'September 15, 2025',
    folder: "Meet with Hon’ble Environment Minister Mr. Manjinder Singh Sirsa Ji (15-09-2025)",
    images: [
'3839dfa7-7664-40db-ba31-2ecb4448e3c4.jpeg',
      '490b0ee2-4465-4f58-9429-98737d95f4c1.jpeg',
      'ce21f9de-528b-4924-a76e-df41b3866097.jpeg',
    ],
  },
  {
    id: 55,
    title: 'Zonal Events Student Champions & Achievers',
    category: 'Awards & Recognition',
    date: '2025–2026',
    folder: 'Kids Awards',
    images: [
      'Advik Chauhan Creative.png',
      'Chahat Sharma Creative.png',
      'Garv Khowal Creative.png',
      'Hanvika Dewan Creative.png',
      'Ishant Tomar Creative.png',
      'Kartik Sanwerriya Creative.png',
      'Mannat Creative.png',
      'Noman Mazhar Creative.png',
      'Saksham Sharma Creative.png',
    ],
  },

  // ── Festivals & Culture ───────────────────────────────────────────────
  {
    id: 6,
    title: 'Lohri Celebration',
    category: 'Festivals & Culture',
    date: 'January 13, 2026',
    folder: 'Lohri Celebration (13-01-2026)',
    images: [
'WhatsApp Image 2026-01-13 at 6.07.50 PM (1).jpeg',
      'WhatsApp Image 2026-01-13 at 6.07.50 PM.jpeg',
      'WhatsApp Image 2026-01-13 at 6.08.00 PM.jpeg',
    ],
  },
  {
    id: 7,
    title: 'Basant Panchami Celebration',
    category: 'Festivals & Culture',
    date: 'January 23, 2026',
    folder: 'Basant Panchi Celebration (23-01-2026)',
    images: [
'WhatsApp Image 2026-01-23 at 9.12.54 AM.jpeg',
      'WhatsApp Image 2026-01-23 at 9.12.55 AM (1).jpeg',
      'WhatsApp Image 2026-01-23 at 9.12.55 AM.jpeg',
    ],
  },
  {
    id: 8,
    title: 'Gurupurab Celebration',
    category: 'Festivals & Culture',
    date: 'November 4, 2025',
    folder: 'Gurupurab Celebration (04-11-2025)',
    images: [
'IMG_20251104_083911.jpeg',
      'IMG_20251104_084202.jpeg',
      'IMG_20251104_084757.jpeg',
    ],
  },
  {
    id: 9,
    title: '78th Death Anniversary of Mahatma Gandhi',
    category: 'Festivals & Culture',
    date: 'January 30, 2026',
    folder: '78th Death Anniversary of Mahatma Gandhi (30-01-2026)',
    images: [
'3b4a8640-a98f-4af3-ae2a-cad174533b32.jpeg',
      'WhatsApp Image 2026-01-30 at 6.05.11 PM.jpeg',
      'WhatsApp Image 2026-01-30 at 6.05.13 PM (1).jpeg',
    ],
  },
  {
    id: 10,
    title: 'Gandhi Jayanti Special Assembly',
    category: 'Festivals & Culture',
    date: 'September 29, 2025',
    folder: 'Gandhi Jayanti Special Assembly',
    images: [
'86a03033-48f9-43eb-9d2b-8d11d9daa388.jpg',
      'WhatsApp Image 2025-09-29 at 10.06.27 AM.jpeg',
      'WhatsApp Image 2025-09-29 at 12.21.17 PM (2).jpeg',
    ],
  },
  {
    id: 11,
    title: 'Shaheed Bhagat Singh Tribute',
    category: 'Festivals & Culture',
    date: 'September 28, 2025',
    folder: 'Shaheed Bhagat Singh (28-09-2025)',
    images: [
'WhatsApp Image 2025-09-28 at 2.21.58 PM (2).jpeg',
      'WhatsApp Image 2025-09-28 at 2.22.00 PM (1).jpeg',
      'WhatsApp Image 2025-09-28 at 2.22.01 PM (1).jpeg',
    ],
  },

  // ── Sports ────────────────────────────────────────────────────────────
  {
    id: 12,
    title: 'Sports Day – TEJAS 2026',
    category: 'Sports',
    date: 'February 17, 2026',
    folder: 'Sports Day (17-02-2026)',
    images: [
'IMG_20260217_101527.jpeg',
      'IMG_20260217_114341.jpeg',
      'IMG_20260217_115300.jpeg',
    ],
  },
  {
    id: 12.1,
    title: 'Basketball Arena & Sports Excellence',
    category: 'Sports',
    date: 'February 2026',
    folder: null,
    images: [
      'Basketball 1.jpeg',
      'Basketball 2.jpeg',
    ],
  },

  // ── School Events ─────────────────────────────────────────────────────
  {
    id: 12.5,
    title: 'Farewell of Class XII',
    category: 'School Events',
    date: 'February 4, 2026',
    folder: 'Farewell of XII (04-02-2026)',
    images: [
'IMG_5514.jpg',
      'IMG_5517.jpg',
      'IMG_5562.jpg',
    ],
  },
  {
    id: 13,
    title: 'Jungan Fest 2026',
    category: 'School Events',
    date: 'January 17, 2026',
    folder: 'Jungan Fest (17-01-2026)',
    images: [
'3193ff19-f360-452b-a3eb-b062a47d4bfc.jpeg',
      '687A3097.jpeg',
      '687A3191.jpeg',
    ],
  },
  {
    id: 13.5,
    title: 'Annual Science Exhibition',
    category: 'School Events',
    date: 'July 5, 2025',
    folder: 'Science exhibition',
    images: [
      'IMG-20250705-WA0021.jpg',
      'IMG-20250705-WA0026.jpg',
      'IMG-20250705-WA0030.jpg',
      'IMG-20250705-WA0034.jpg',
      'IMG-20250705-WA0035.jpg',
    ],
  },
  {
    id: 14,
    title: 'AHWS Baby Show',
    category: 'School Events',
    date: 'October 2, 2024',
    folder: 'AHWS Baby Show (02-10-2024)',
    images: [
'DSC_0200.jpeg',
      'DSC_0217.jpeg',
      'DSC_0249.jpeg',
    ],
  },
  {
    id: 15,
    title: 'Cartoon Themed Baby Show 2025',
    category: 'School Events',
    date: 'November 22, 2025',
    folder: 'Cartoon Themed Baby Show (22-11-2025)',
    images: [
'IMG_3376.jpg',
      'IMG_3412.jpg',
      'IMG_3450.jpg',
    ],
  },
  {
    id: 16,
    title: 'Alumni Meet 2024',
    category: 'School Events',
    date: 'November 11, 2024',
    folder: 'Alumni Meet 2024',
    images: [
'WhatsApp Image 2024-11-11 at 2.55.28 PM.jpeg',
      'WhatsApp Image 2024-11-12 at 9.04.30 AM.jpeg',
      'WhatsApp Image 2024-11-12 at 9.04.31 AM.jpeg',
    ],
  },
  {
    id: 17,
    title: 'Scribblers AHWS Events',
    category: 'School Events',
    date: 'November 29, 2025',
    folder: 'Scribblers AHWS Events (29-11-2025)',
    images: [
'20251129_105354.jpeg',
      '20251129_110757.jpeg',
      '20251129_122759.jpeg',
    ],
  },
  {
    id: 18,
    title: 'School Yatra',
    category: 'School Events',
    date: 'December 20, 2025',
    folder: 'School Yatra (20-12-2025)',
    images: [
'WhatsApp Image 2025-12-20 at 5.14.45 PM.jpeg',
      'WhatsApp Image 2025-12-20 at 5.14.46 PM (1).jpeg',
      'WhatsApp Image 2025-12-20 at 5.14.47 PM (1).jpeg',
    ],
  },
  {
    id: 19,
    title: '1st Day of New Session 2026',
    category: 'School Events',
    date: '2026',
    folder: '1st Day of 2026',
    images: [
'WhatsApp Image 2026-03-27 at 3.43.45 PM (5).jpeg',
      'WhatsApp Image 2026-03-27 at 3.43.46 PM (4).jpeg',
      'WhatsApp Image 2026-03-27 at 3.43.50 PM (6).jpeg',
    ],
  },
  {
    id: 20,
    title: 'Titans of Tomorrow – Cartoon Network',
    category: 'School Events',
    date: 'November 11, 2025',
    folder: 'Titans of Tomorrow (11-11-2025)',
    images: [
'WhatsApp Image 2025-11-14 at 10.18.42 AM.jpeg',
      'WhatsApp Image 2025-11-14 at 10.19.07 AM (3).jpeg',
      'WhatsApp Image 2025-11-14 at 10.19.08 AM (2).jpeg',
    ],
  },
  {
    id: 21,
    title: 'Visit of Guest',
    category: 'School Events',
    date: 'May 25, 2026',
    folder: 'Visit of Guest (25-05-2026)',
    images: [
'IMG_1703.JPG',
      'IMG_1707.JPG',
      'IMG_1712.JPG',
    ],
  },

  // ── Community & Outreach ──────────────────────────────────────────────
  {
    id: 22,
    title: 'RWA Health Check-up Camp',
    category: 'Community & Outreach',
    date: 'September 28, 2025',
    folder: 'RWA Health Check-up Camp (28-09-2025)',
    images: [
'WhatsApp Image 2025-09-28 at 1.50.55 PM.jpeg',
      'WhatsApp Image 2025-09-28 at 11.05.52 AM.jpeg',
      'WhatsApp Image 2025-09-28 at 11.05.53 AM (1).jpeg',
    ],
  },
  {
    id: 23,
    title: 'Dental Check-up Drive',
    category: 'Community & Outreach',
    date: 'May 13, 2026',
    folder: 'Dental Check-up Drive (13-05-2026)',
    images: [
'IMG_1062.jpeg',
      'IMG_1063.jpeg',
      'IMG_1086.jpeg',
    ],
  },
  {
    id: 24,
    title: 'Swatch Pakwara – Cleanliness Drive',
    category: 'Community & Outreach',
    date: 'September 17, 2025',
    folder: 'Swatch Pakwara (17-09-2025)',
    images: [
'20250917_82840AMByGPSMapCamera.jpg',
      '20250917_82856AMByGPSMapCamera.jpg',
    ],
  },
  {
    id: 25,
    title: 'Vigilance Awareness Week',
    category: 'Community & Outreach',
    date: 'November 4, 2025',
    folder: 'Vigilance Awareness Week (04-11-2025)',
    images: [
'20251103_112132.jpeg',
      '20251103_112142.jpeg',
      '20251103_112225.jpeg',
    ],
  },

  // ── Workshops ─────────────────────────────────────────────────────────
  {
    id: 26,
    title: 'Summer Camp 2026',
    category: 'Workshops',
    date: 'May–June 2026',
    folder: 'Summer Camp 2026',
    images: [
'IMG_1786.JPG',
      'IMG_1852.JPG',
      'IMG_2306.JPG',
    ],
  },
  
  {
    id: 28,
    title: 'Mother\'s Day Celebration',
    category: 'Workshops',
    date: 'May 16, 2026',
    folder: "Mother_s Day Celebration (16-05-2026)",
    images: [
'IMG_1360.JPG',
      'IMG_1371.JPG',
      'IMG_1372.JPG',
    ],
  },
]

// Helper to build a public URL for a gallery image
function imgUrl(folder, filename) {
  if (!folder) return `./images/${filename}`
  return `./WEBSITE GALLERY/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`
}

// ─── VIDEO DATA ─────────────────────────────────────────────────────────────
const videos = [
  { id: 1, title: 'School Activities & Events', videoId: 'y9Ew2QONNPQ' },
  { id: 2, title: 'Student Performances', videoId: 'aYty_Dx9YSE' },
  { id: 3, title: 'Campus Tour & Highlights', videoId: '57_cDpB684M' },
  { id: 4, title: 'Sports & Extra-Curriculars', videoId: '61HyDdWNMcg' },
  { id: 5, title: 'Academic Achievements', videoId: 'zZhYZBR35BM' },
  { id: 6, title: 'Annual Day Celebrations', videoId: 'LNpKBBK6fac' },
]

// ─── ACHIEVER DATA ───────────────────────────────────────────────────────────
const achieverCategories = ['All', 'Academic', 'Sports', 'Co-Curricular']

const achievers = [
  { id: 1, name: 'Arjun Sharma', initials: 'AS', achievement: 'State Topper – CBSE Board Exams', category: 'Academic', class: 'Class XII – 2025', color: '#002147' },
  { id: 2, name: 'Priya Patel', initials: 'PP', achievement: 'Gold Medal – Inter-School Athletics', category: 'Sports', class: 'Class X – 2025', color: '#1a5276' },
  { id: 3, name: 'Rohan Mehta', initials: 'RM', achievement: '1st Place – National Science Olympiad', category: 'Academic', class: 'Class IX – 2024', color: '#0e6655' },
  { id: 4, name: 'Ananya Gupta', initials: 'AG', achievement: 'Best Speaker – MUN Conference', category: 'Co-Curricular', class: 'Class XI – 2025', color: '#6c3483' },
  { id: 5, name: 'Vikram Singh', initials: 'VS', achievement: 'District Champion – Cricket Tournament', category: 'Sports', class: 'Class XII – 2024', color: '#b9770e' },
  { id: 6, name: 'Sneha Reddy', initials: 'SR', achievement: '100% Score – Mathematics Board Exam', category: 'Academic', class: 'Class X – 2025', color: '#1f618d' },
  { id: 7, name: 'Kabir Das', initials: 'KD', achievement: 'Winner – State Robotics Challenge', category: 'Co-Curricular', class: 'Class VIII – 2025', color: '#117864' },
  { id: 8, name: 'Meera Joshi', initials: 'MJ', achievement: 'Silver Medal – National Swimming Championship', category: 'Sports', class: 'Class IX – 2025', color: '#a04000' },
  { id: 9, name: 'Aditya Kumar', initials: 'AK', achievement: 'Gold Medal – International Math Olympiad', category: 'Academic', class: 'Class XI – 2024', color: '#2e4053' },
  { id: 10, name: 'Ishita Verma', initials: 'IV', achievement: '1st Prize – All India Art Competition', category: 'Co-Curricular', class: 'Class VII – 2025', color: '#7d3c98' },
]

const mainTabs = [
  { key: 'photos', label: '📸 Photo Gallery' },
  { key: 'videos', label: '📹 Video Gallery' },
  { key: 'achievers', label: '🏆 Achievers' },
]

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function Gallery() {
  const [activeTab, setActiveTab] = useState('photos')
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '')
      if (['photos', 'videos', 'achievers'].includes(hash)) {
        setActiveTab(hash)
        setTimeout(() => {
          const el = document.getElementById(hash)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location.hash])
  
  const [photoFilter, setPhotoFilter] = useState('All')
  const [achieverFilter, setAchieverFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null) // { src, title, date }

  const filteredPhotos = photoFilter === 'All' ? photos : photos.filter(p => p.category === photoFilter)
  const filteredAchievers = achieverFilter === 'All' ? achievers : achievers.filter(a => a.category === achieverFilter)

  const openLightbox = (event) => {
    setLightbox({
      src: imgUrl(event.folder, event.images[0]),
      title: event.title,
      date: event.date,
      images: event.images.map(img => imgUrl(event.folder, img)),
      idx: 0,
    })
  }

  const closeLightbox = () => setLightbox(null)

  const lightboxPrev = () => {
    if (!lightbox) return
    const newIdx = (lightbox.idx - 1 + lightbox.images.length) % lightbox.images.length
    setLightbox(prev => ({ ...prev, idx: newIdx, src: prev.images[newIdx] }))
  }

  const lightboxNext = () => {
    if (!lightbox) return
    const newIdx = (lightbox.idx + 1) % lightbox.images.length
    setLightbox(prev => ({ ...prev, idx: newIdx, src: prev.images[newIdx] }))
  }

  return (
    <main className="gallery-page">
      <PageBanner title="Gallery" image="./WEBSITE GALLERY/other images/kids Dance .jpg" />

      {/* ── Main Tab Navigation ─────────────────────────────────────────── */}
      <section className="gallery-tabs-section">
        <div className="container">
          <div className="gallery-tabs">
            {mainTabs.map(tab => (
              <button
                key={tab.key}
                className={`gallery-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tab Content ─────────────────────────────────────────────────── */}
      <div className="gallery-tab-content">

        {/* ─── Photo Gallery ─── */}
        {activeTab === 'photos' && (
          <section className="gallery-photos-section fade-in-tab">
            <div className="container">
              <h2 className="section-title" id="photos">📸 Photo Gallery</h2>
              <div className="divider-line" />

              {/* Filter Bar */}
              <div className="gallery-filter-bar">
                {photoCategories.map(cat => (
                  <button
                    key={cat}
                    className={`filter-btn ${photoFilter === cat ? 'active' : ''}`}
                    onClick={() => setPhotoFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Event Cards Grid */}
              <div className="photo-masonry-grid">
                {filteredPhotos.map((event, i) => (
                  <div
                    key={event.id}
                    className="photo-card"
                    style={{ animationDelay: `${i * 0.07}s` }}
                    onClick={() => openLightbox(event)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && openLightbox(event)}
                  >
                    <div className="photo-card-image">
                      <img
                        src={imgUrl(event.folder, event.images[0])}
                        alt={event.title}
                        loading="lazy"
                        onError={e => {
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.parentElement.style.backgroundColor = '#002147'
                        }}
                      />
                      {event.images.length > 1 && (
                        <span className="photo-count-badge">+{event.images.length - 1} more</span>
                      )}
                    </div>
                    <div className="photo-card-overlay">
                      <h4>{event.title}</h4>
                      <span className="photo-card-date">📅 {event.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── Video Gallery ─── */}
        {activeTab === 'videos' && (
          <section className="gallery-videos-section fade-in-tab">
            <div className="container">
              <h2 className="section-title" id="videos">📹 Video Gallery</h2>
              <div className="divider-line" />
              <div className="video-grid">
                {videos.map((video, i) => (
                  <div
                    key={video.id}
                    className="video-card"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="video-embed-container">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="video-info">
                      <h4 className="video-title">{video.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── Achievers ─── */}
        {activeTab === 'achievers' && (
          <section className="gallery-achievers-section fade-in-tab">
            <div className="container">
              <h2 className="section-title" id="achievers">🏆 Our Achievers</h2>
              <div className="divider-line" />

              <div className="gallery-filter-bar">
                {achieverCategories.map(cat => (
                  <button
                    key={cat}
                    className={`filter-btn ${achieverFilter === cat ? 'active' : ''}`}
                    onClick={() => setAchieverFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="achiever-grid">
                {filteredAchievers.map((a, i) => (
                  <div
                    key={a.id}
                    className="achiever-card"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <div className="achiever-avatar" style={{ background: `linear-gradient(135deg, ${a.color}, ${a.color}dd)` }}>
                      <span>{a.initials}</span>
                    </div>
                    <div className="achiever-info">
                      <h4 className="achiever-name">{a.name}</h4>
                      <p className="achiever-achievement">{a.achievement}</p>
                      <span className="achiever-class">🎓 {a.class}</span>
                    </div>
                    <div className="achiever-badge">
                      {a.category === 'Academic' && '📚'}
                      {a.category === 'Sports' && '🏅'}
                      {a.category === 'Co-Curricular' && '🎭'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* ─── Lightbox Modal ─── */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Image Lightbox">
          <div className="lightbox-box" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="lightbox-img"
            />
            {lightbox.images.length > 1 && (
              <>
                <button className="lightbox-nav lightbox-prev" onClick={lightboxPrev} aria-label="Previous">‹</button>
                <button className="lightbox-nav lightbox-next" onClick={lightboxNext} aria-label="Next">›</button>
                <div className="lightbox-counter">{lightbox.idx + 1} / {lightbox.images.length}</div>
              </>
            )}
            <div className="lightbox-caption">
              <strong>{lightbox.title}</strong>
              <span>📅 {lightbox.date}</span>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

