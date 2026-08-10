import { useState } from 'react'
import { Link } from 'react-router-dom'
import './AnnouncementTicker.css'

const announcements = [
  { text: '📢 Admissions Open for 2027-28! Apply Now', link: '/admission', isNew: true },
  { text: '🏆 AHWS ranked among Top Schools in Delhi NCR', link: '/about', isNew: true },
  { text: '📅 Summer Vacation: June 1 - July 5, 2026', link: '/events', isNew: false },
  { text: '📋 PTM scheduled for July 12, 2026 — All parents are requested to attend', link: '/events', isNew: false },
  { text: '🎯 Annual Sports Day on August 15, 2026', link: '/events', isNew: false },
]

export default function AnnouncementTicker() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="ticker-bar">
      <div className="ticker-label">
        <span className="ticker-icon">📌</span>
        <span>Updates</span>
      </div>
      <div className="ticker-content">
        <div className="ticker-track">
          {[...announcements, ...announcements].map((item, i) => (
            <Link key={i} to={item.link} className="ticker-item">
              {item.isNew && <span className="ticker-new">NEW</span>}
              {item.text}
            </Link>
          ))}
        </div>
      </div>
      <button className="ticker-close" onClick={() => setIsVisible(false)} aria-label="Close announcements">
        ✕
      </button>
    </div>
  )
}
