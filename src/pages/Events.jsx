import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Events.css'
import PageBanner from '../components/PageBanner'

export default function Events() {
  const [lightbox, setLightbox] = useState(null) // { title, date, desc, images: [], idx: 0 }

  const pastEvents = [
    {
      img: './images/education_4_chronicle_2026.png',
      title: 'Embracing the Future with Education 4.0 – Academic Heights Chronicle',
      date: 'July 31, 2026',
      desc: 'The Academic Heights Chronicle feature highlighting Education 4.0, STEM & AI Robotics labs, Early Childhood Development, Pickleball sports, and green sustainability at AHWS Pitampura.',
      objectPosition: 'center 15%',
      images: [
        './images/education_4_chronicle_2026.png'
      ]
    },
    {
      img: './images/times_of_india_nov_2025.jpeg',
      title: 'Times of India Feature – Learners Step Into a World of Creativity',
      date: 'November 22, 2025',
      desc: 'Delhi Times featured AHWS Pitampura highlighting our 21st-century experiential learning, green campus initiatives, STEAM education, and leadership of Director Ms. Rosy Ahuja.',
      objectPosition: 'center 65%',
      images: [
        './images/times_of_india_nov_2025.jpeg'
      ]
    },
    {
      img: './WEBSITE%20GALLERY/Jungan%20Fest%20(17-01-2026)/687A3097.jpeg',
      title: 'Jungan Fest 2026',
      date: 'January 17, 2026',
      desc: 'A spectacular cultural fest celebrating Indian heritage, music, and traditions, with participation from students across all classes.',
      images: [
        './WEBSITE%20GALLERY/Jungan%20Fest%20(17-01-2026)/687A3097.jpeg',
        './WEBSITE%20GALLERY/Jungan%20Fest%20(17-01-2026)/3193ff19-f360-452b-a3eb-b062a47d4bfc.jpeg',
        './WEBSITE%20GALLERY/Jungan%20Fest%20(17-01-2026)/687A3191.jpeg',
      ]
    },
    {
      img: './WEBSITE%20GALLERY/Sports%20Day%20(17-02-2026)/IMG_20260217_101527.jpeg',
      title: 'Sports Day – TEJAS 2026',
      date: 'February 17, 2026',
      desc: 'A thrilling day of athletic competitions, inter-house rivalries, march past, and prize distribution celebrating sporting excellence.',
      images: [
        './WEBSITE%20GALLERY/Sports%20Day%20(17-02-2026)/IMG_20260217_101527.jpeg',
        './WEBSITE%20GALLERY/Sports%20Day%20(17-02-2026)/IMG_20260217_114341.jpeg',
        './WEBSITE%20GALLERY/Sports%20Day%20(17-02-2026)/IMG_20260217_115300.jpeg',
      ]
    },
    {
      img: './WEBSITE%20GALLERY/Titans%20of%20Tomorrow%20(11-11-2025)/WhatsApp%20Image%202025-11-14%20at%2010.18.42%20AM.jpeg',
      title: 'Titans of Tomorrow – Cartoon Network',
      date: 'November 11, 2025',
      desc: 'AHWS hosted the Cartoon Network "Titans of Tomorrow 2025" environmental awareness drive, inspiring young leaders to build a greener future.',
      images: [
        './WEBSITE%20GALLERY/Titans%20of%20Tomorrow%20(11-11-2025)/WhatsApp%20Image%202025-11-14%20at%2010.18.42%20AM.jpeg'
      ]
    },
    {
      img: './WEBSITE%20GALLERY/Lohri%20Celebration%20(13-01-2026)/WhatsApp%20Image%202026-01-13%20at%206.07.50%20PM%20(1).jpeg',
      title: 'Lohri Celebration',
      date: 'January 13, 2026',
      desc: 'A joyful Lohri celebration with folk music, bonfire rituals, and traditional Punjabi performances by students and staff.',
      images: [
        './WEBSITE%20GALLERY/Lohri%20Celebration%20(13-01-2026)/WhatsApp%20Image%202026-01-13%20at%206.07.50%20PM%20(1).jpeg',
        './WEBSITE%20GALLERY/Lohri%20Celebration%20(13-01-2026)/WhatsApp%20Image%202026-01-13%20at%206.07.50%20PM.jpeg',
        './WEBSITE%20GALLERY/Lohri%20Celebration%20(13-01-2026)/WhatsApp%20Image%202026-01-13%20at%206.08.00%20PM.jpeg',
      ]
    },
    {
      img: "./WEBSITE%20GALLERY/Mother_s%20Day%20Celebration%20(16-05-2026)/IMG_1360.JPG",
      title: "Mother's Day Celebration",
      date: 'May 16, 2026',
      desc: 'A heartwarming event where students and parents came together to celebrate the spirit of motherhood with activities and gratitude.',
      images: [
        "./WEBSITE%20GALLERY/Mother_s%20Day%20Celebration%20(16-05-2026)/IMG_1360.JPG",
        "./WEBSITE%20GALLERY/Mother_s%20Day%20Celebration%20(16-05-2026)/IMG_1371.JPG",
        "./WEBSITE%20GALLERY/Mother_s%20Day%20Celebration%20(16-05-2026)/IMG_1372.JPG",
      ]
    },
    {
      img: './WEBSITE%20GALLERY/Gurupurab%20Celebration%20(04-11-2025)/IMG_20251104_083911.jpeg',
      title: 'Gurupurab Celebration',
      date: 'November 4, 2025',
      desc: 'A devotional assembly honouring the teachings of Guru Nanak Dev Ji, with hymns, speeches, and a langar organized by students.',
      images: [
        './WEBSITE%20GALLERY/Gurupurab%20Celebration%20(04-11-2025)/IMG_20251104_083911.jpeg',
        './WEBSITE%20GALLERY/Gurupurab%20Celebration%20(04-11-2025)/IMG_20251104_084202.jpeg',
        './WEBSITE%20GALLERY/Gurupurab%20Celebration%20(04-11-2025)/IMG_20251104_084757.jpeg',
      ]
    },
  ]

  const awards = [
    {
      img: './WEBSITE%20GALLERY/Solar%20Energy%20Powered%20School%20Award%202025/081e6c19-4d56-4f1d-9ccf-50dda8f3d28b.jpeg',
      title: 'Solar Energy Powered School Award 2025',
      date: 'November 20, 2025',
      desc: 'AHWS was honored with the prestigious Solar Energy Powered School Award 2025 in recognition of our 100% eco-friendly green campus and sustainable solar energy initiatives.',
      images: [
        './WEBSITE%20GALLERY/Solar%20Energy%20Powered%20School%20Award%202025/081e6c19-4d56-4f1d-9ccf-50dda8f3d28b.jpeg',
        './WEBSITE%20GALLERY/Solar%20Energy%20Powered%20School%20Award%202025/4043249e-44a8-4295-9870-7849253df924.jpeg',
        './WEBSITE%20GALLERY/Solar%20Energy%20Powered%20School%20Award%202025/7dff1aaf-1e04-4971-9dae-0c38bf767dfc.jpeg',
      ]
    },
    {
      img: './WEBSITE%20GALLERY/Times%20Education%20Icons%202025%20North%20Award/WhatsApp%20Image%202025-11-01%20at%208.06.42%20AM.jpeg',
      title: 'Times Education Icons 2025 North Award',
      date: 'November 2025',
      desc: 'Academic Heights World School was felicitated at the Times Education Icons 2025 North Award ceremony for outstanding academic excellence and innovative pedagogy in North Delhi.',
      objectPosition: 'center 20%',
      images: [
        './WEBSITE%20GALLERY/Times%20Education%20Icons%202025%20North%20Award/WhatsApp%20Image%202025-11-01%20at%208.06.42%20AM.jpeg',
        './WEBSITE%20GALLERY/Times%20Education%20Icons%202025%20North%20Award/3f59e0f8-26b1-4a09-8c56-3fd6b30ef4e0.jpeg',
      ]
    },
    {
      img: './WEBSITE%20GALLERY/Saina%20Nehwal%20and%20Bajrang%20Poonia/KUND1890.jpeg',
      title: 'Felicitated by Saina Nehwal & Bajrang Poonia',
      date: '2024',
      desc: 'Olympic legends Saina Nehwal and Bajrang Poonia graced AHWS Mega Competitions 2024 to felicitate student champions and inspire sports excellence.',
      images: [
        './WEBSITE%20GALLERY/Saina%20Nehwal%20and%20Bajrang%20Poonia/KUND1890.jpeg',
        './WEBSITE%20GALLERY/Saina%20Nehwal%20and%20Bajrang%20Poonia/KUND1891.jpeg',
        './WEBSITE%20GALLERY/Saina%20Nehwal%20and%20Bajrang%20Poonia/rosy%20mam%202025.jpeg',
      ]
    },
    {
      img: './WEBSITE%20GALLERY/Meet%20with%20Hon%E2%80%99ble%20Dy.%20CM%20Mr.%20Pravesh%20Verma%20Ji%20(11-09-2025)/WhatsApp%20Image%202025-09-11%20at%207.24.32%20PM%20(1).jpeg',
      title: "Hon'ble Dy. CM Mr. Pravesh Verma Ji Meeting & Honor",
      date: 'September 11, 2025',
      desc: "School leadership met with Hon'ble Deputy CM Mr. Pravesh Verma Ji to present AHWS academic milestones and model school developments in Delhi.",
      images: [
        './WEBSITE%20GALLERY/Meet%20with%20Hon%E2%80%99ble%20Dy.%20CM%20Mr.%20Pravesh%20Verma%20Ji%20(11-09-2025)/WhatsApp%20Image%202025-09-11%20at%207.24.32%20PM%20(1).jpeg',
        './WEBSITE%20GALLERY/Meet%20with%20Hon%E2%80%99ble%20Dy.%20CM%20Mr.%20Pravesh%20Verma%20Ji%20(11-09-2025)/WhatsApp%20Image%202025-09-11%20at%207.24.32%20PM.jpeg',
      ]
    },
    {
      img: './WEBSITE%20GALLERY/Meet%20with%20Hon%E2%80%99ble%20Environment%20Minister%20Mr.%20Manjinder%20Singh%20Sirsa%20Ji%20(15-09-2025)/3839dfa7-7664-40db-ba31-2ecb4448e3c4.jpeg',
      title: "Environment Minister Mr. Manjinder Singh Sirsa Ji Honor",
      date: 'September 15, 2025',
      desc: 'AHWS leadership met with Environment Minister Mr. Manjinder Singh Sirsa Ji to showcase our eco-friendly green initiatives and campus sustainability practices.',
      images: [
        './WEBSITE%20GALLERY/Meet%20with%20Hon%E2%80%99ble%20Environment%20Minister%20Mr.%20Manjinder%20Singh%20Sirsa%20Ji%20(15-09-2025)/3839dfa7-7664-40db-ba31-2ecb4448e3c4.jpeg',
        './WEBSITE%20GALLERY/Meet%20with%20Hon%E2%80%99ble%20Environment%20Minister%20Mr.%20Manjinder%20Singh%20Sirsa%20Ji%20(15-09-2025)/490b0ee2-4465-4f58-9429-98737d95f4c1.jpeg',
        './WEBSITE%20GALLERY/Meet%20with%20Hon%E2%80%99ble%20Environment%20Minister%20Mr.%20Manjinder%20Singh%20Sirsa%20Ji%20(15-09-2025)/ce21f9de-528b-4924-a76e-df41b3866097.jpeg',
      ]
    },
    {
      img: './WEBSITE%20GALLERY/Kids%20Awards/Advik%20Chauhan%20Creative.png',
      title: 'Advik Chauhan',
      date: '2026',
      desc: 'Secured 1st Position in the Zonal Level Creative Art & Expression Competition 2026.',
      images: [
        './WEBSITE%20GALLERY/Kids%20Awards/Advik%20Chauhan%20Creative.png',
        './WEBSITE%20GALLERY/Kids%20Awards/Chahat%20Sharma%20Creative.png',
        './WEBSITE%20GALLERY/Kids%20Awards/Garv%20Khowal%20Creative.png',
        './WEBSITE%20GALLERY/Kids%20Awards/Hanvika%20Dewan%20Creative.png',
        './WEBSITE%20GALLERY/Kids%20Awards/Ishant%20Tomar%20Creative.png',
        './WEBSITE%20GALLERY/Kids%20Awards/Kartik%20Sanwerriya%20Creative.png',
        './WEBSITE%20GALLERY/Kids%20Awards/Mannat%20Creative.png',
        './WEBSITE%20GALLERY/Kids%20Awards/Noman%20Mazhar%20Creative.png',
        './WEBSITE%20GALLERY/Kids%20Awards/Saksham%20Sharma%20Creative.png',
      ]
    },
    {
      img: './WEBSITE%20GALLERY/Kids%20Awards/Chahat%20Sharma%20Creative.png',
      title: 'Chahat Sharma',
      date: '2026',
      desc: 'Felicitated with 1st Prize in the Zonal Performing Arts & Cultural Competition 2026.',
      images: ['./WEBSITE%20GALLERY/Kids%20Awards/Chahat%20Sharma%20Creative.png']
    },
    {
      img: './WEBSITE%20GALLERY/Kids%20Awards/Garv%20Khowal%20Creative.png',
      title: 'Garv Khowal',
      date: '2026',
      desc: 'Awarded 1st Prize for innovative working model at the Zonal Science & Technology Exhibition 2026.',
      images: ['./WEBSITE%20GALLERY/Kids%20Awards/Garv%20Khowal%20Creative.png']
    },
    {
      img: './WEBSITE%20GALLERY/Kids%20Awards/Hanvika%20Dewan%20Creative.png',
      title: 'Hanvika Dewan',
      date: '2026',
      desc: 'Won Top Honors in the Zonal English Declamation & Literary Excellence Competition 2026.',
      images: ['./WEBSITE%20GALLERY/Kids%20Awards/Hanvika%20Dewan%20Creative.png']
    },
    {
      img: './WEBSITE%20GALLERY/Kids%20Awards/Ishant%20Tomar%20Creative.png',
      title: 'Ishant Tomar',
      date: '2026',
      desc: 'Awarded Gold Medal & Champion Trophy at the CBSE Zonal Martial Arts & Athletics Meet 2026.',
      images: ['./WEBSITE%20GALLERY/Kids%20Awards/Ishant%20Tomar%20Creative.png']
    },
    {
      img: './WEBSITE%20GALLERY/Kids%20Awards/Kartik%20Sanwerriya%20Creative.png',
      title: 'Kartik Sanwerriya',
      date: '2026',
      desc: 'Secured 1st Position in the Zonal Instrumental Music & Youth Cultural Fest 2026.',
      images: ['./WEBSITE%20GALLERY/Kids%20Awards/Kartik%20Sanwerriya%20Creative.png']
    },
    {
      img: './WEBSITE%20GALLERY/Kids%20Awards/Mannat%20Creative.png',
      title: 'Mannat',
      date: '2026',
      desc: 'Awarded 1st Prize in the Zonal Poem Recitation & Creative Writing Championship 2026.',
      images: ['./WEBSITE%20GALLERY/Kids%20Awards/Mannat%20Creative.png']
    },
    {
      img: './WEBSITE%20GALLERY/Kids%20Awards/Noman%20Mazhar%20Creative.png',
      title: 'Noman Mazhar',
      date: '2026',
      desc: 'Achieved 1st Position in the Zonal Mathematics & Analytical Reasoning Olympiad 2026.',
      images: ['./WEBSITE%20GALLERY/Kids%20Awards/Noman%20Mazhar%20Creative.png']
    },
    {
      img: './WEBSITE%20GALLERY/Kids%20Awards/Saksham%20Sharma%20Creative.png',
      title: 'Saksham Sharma',
      date: '2026',
      desc: 'Crowned Gold Medalist in the Zonal Inter-School Chess & Tactical Sports Championship 2026.',
      images: ['./WEBSITE%20GALLERY/Kids%20Awards/Saksham%20Sharma%20Creative.png']
    },
  ]

  const openLightbox = (item) => {
    setLightbox({
      title: item.title,
      date: item.date,
      desc: item.desc,
      images: item.images || [item.img],
      idx: 0
    })
  }

  const prevImage = () => {
    if (!lightbox) return
    setLightbox(prev => ({
      ...prev,
      idx: (prev.idx - 1 + prev.images.length) % prev.images.length
    }))
  }

  const nextImage = () => {
    if (!lightbox) return
    setLightbox(prev => ({
      ...prev,
      idx: (prev.idx + 1) % prev.images.length
    }))
  }

  return (
    <main className="events-page">
      <PageBanner title="News & Events" image="./WEBSITE GALLERY/1st Day of 2026/WhatsApp Image 2026-01-01 at 4.29.58 PM.jpeg" />

      {/* ───── Awards & Recognition ───── */}
      <section className="events-highlights">
        <div className="container">
          <h2 className="section-title">🏆 Awards &amp; Accolades</h2>
          <div className="divider-line" />
          <p className="acad-subtitle" style={{ textAlign: 'center', marginBottom: '40px' }}>
            Recognized for academic brilliance, green sustainability, and educational excellence across Delhi NCR. Click any card to view event photo gallery.
          </p>
          <div className="highlights-grid">
            {awards.map((award, i) => (
              <div 
                className="highlight-card interactive-award-card" 
                key={i} 
                style={{ animationDelay: `${i * 0.1}s`, cursor: 'pointer' }}
                onClick={() => openLightbox(award)}
              >
                <div className="highlight-photo">
                  <img
                    src={award.img}
                    alt={award.title}
                    loading="lazy"
                    style={award.objectPosition ? { objectPosition: award.objectPosition } : {}}
                    onError={e => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement.style.background = '#e8f4fd'
                    }}
                  />
                  {award.images && award.images.length > 1 && (
                    <span className="gallery-count-badge">📷 {award.images.length} Photos</span>
                  )}
                </div>
                <div className="highlight-info">
                  <h4 className="highlight-title">{award.title}</h4>
                  <span className="highlight-date">{award.date}</span>
                  <p className="highlight-desc">{award.desc}</p>
                  <span className="view-gallery-btn">View Event Gallery ➔</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Recent Highlights & News ───── */}
      <section className="events-highlights" style={{ background: '#f8fafc', paddingTop: '60px' }}>
        <div className="container">
          <h2 className="section-title">✨ Recent News &amp; Event Highlights</h2>
          <div className="divider-line" />
          <p className="acad-subtitle" style={{ textAlign: 'center', marginBottom: '40px' }}>
            Explore photos, stories, and cultural celebrations from recent school events at Academic Heights World School. Click any card to view event photo gallery.
          </p>
          <div className="highlights-grid">
            {pastEvents.map((pe, i) => (
              <div 
                className="highlight-card interactive-award-card" 
                key={i} 
                style={{ animationDelay: `${i * 0.1}s`, cursor: 'pointer' }}
                onClick={() => openLightbox(pe)}
              >
                <div className="highlight-photo">
                  <img
                    src={pe.img}
                    alt={pe.title}
                    loading="lazy"
                    style={pe.objectPosition ? { objectPosition: pe.objectPosition } : {}}
                    onError={e => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement.style.background = '#e8f4fd'
                    }}
                  />
                  {pe.images && pe.images.length > 1 && (
                    <span className="gallery-count-badge">📷 {pe.images.length} Photos</span>
                  )}
                </div>
                <div className="highlight-info">
                  <h4 className="highlight-title">{pe.title}</h4>
                  <p className="highlight-desc">{pe.desc}</p>
                  <span className="view-gallery-btn">View Event Gallery ➔</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Board Access Banner */}
      <section className="calendar-banner-section" style={{ padding: '60px 0 80px' }}>
        <div className="container">
          <div className="calendar-banner" style={{ background: 'linear-gradient(135deg, #002147, #004080)' }}>
            <div className="calendar-text">
              <h3>📌 Official School Notice Board &amp; Circulars</h3>
              <p>Looking for recent notices, academic planner 2026-27, upcoming event dates, or school circulars?</p>
            </div>
            <Link 
              to="/notice-board" 
              className="btn btn-primary notice-board-btn" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Visit Notice Board <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───── Lightbox Carousel Modal ───── */}
      {lightbox && (
        <div className="events-lightbox-backdrop" onClick={() => setLightbox(null)}>
          <div className="events-lightbox-modal" onClick={e => e.stopPropagation()}>
            <button className="events-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
            
            <div className="events-lightbox-img-wrap">
              <img src={lightbox.images[lightbox.idx]} alt={lightbox.title} />

              {lightbox.images.length > 1 && (
                <>
                  <button className="events-lightbox-arrow prev" onClick={prevImage}>‹</button>
                  <button className="events-lightbox-arrow next" onClick={nextImage}>›</button>
                  <span className="events-lightbox-counter">
                    {lightbox.idx + 1} / {lightbox.images.length}
                  </span>
                </>
              )}
            </div>

            <div className="events-lightbox-details">
              <h3>{lightbox.title}</h3>
              <span className="events-lightbox-date">📅 {lightbox.date}</span>
              <p>{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
