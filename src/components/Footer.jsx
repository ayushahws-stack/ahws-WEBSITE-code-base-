import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="ahws-footer">
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/">
              <img
                src="https://ahws.edu.in/images/ahws-footer-logo.png"
                alt="AHWS Logo"
                className="footer-logo"
                onError={e => { e.target.src = 'https://ahws.edu.in/images/logo.webp' }}
              />
            </Link>
            <p className="footer-desc">
              AHWS is from the Academic Heights Group of Schools, with the experience of over a decade,
              and 120+ AHWS and 1200+ Bachpan branches. AHWS is all set to provide a nurturing,
              wholesome, and stimulating atmosphere where students are equipped to cultivate the
              intellectual seeds of tomorrow's leaders.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=61555732875904" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/ahws.official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.youtube.com/@AcademicHeightsWorldSchool" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Academics', to: '/academics' },
                { label: 'Admission', to: '/admission' },
                { label: 'Fee Structure', to: '/fee-structure' },
                { label: 'Gallery', to: '/gallery' },
                { label: 'Events', to: '/events' },
                { label: 'Results', to: '/results' },
                { label: 'Alumni', to: '/alumni' },
                { label: 'Mandatory Disclosure', to: '/mandatory-disclosure' },
                { label: 'Contact Us', to: '/contact' },
              ].map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="footer-link">
                    <span className="link-arrow">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portals */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Portals</h4>
            <ul className="footer-links">
              <li>
                <a href="https://ah5000.skeducations.com/" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <span className="link-arrow">›</span> 360 App Login
                </a>
              </li><br />
              <li>
                <Link to="/careers" className="footer-link">
                  <span className="link-arrow">›</span> Careers /Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Reach Us */}
          <div className="footer-reach">
            <h4 className="footer-heading">Reach Us</h4>
            <ul className="reach-list">
              <li>
                <div className="reach-icon">📍</div>
                <a
                  href="https://maps.app.goo.gl/8XoVEYAENZAcG6ro7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reach-text"
                >
                  SD - QD Block, Near TV Tower, Opposite Metro Pillar No: 319, Pitampura, Delhi - 110034
                </a>
              </li>
              <li>
                <div className="reach-icon">📞</div>
                <div className="reach-text">
                  <a href="tel:8860455000">8860455000</a>
                  <span> | </span>
                  <a href="tel:01149402170">011-49402170</a>
                </div>
              </li>
              <li>
                <div className="reach-icon">✉</div>
                <a href="mailto:info@ahws.edu.in" className="reach-text">info@ahws.edu.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>Copyright © {new Date().getFullYear()} Academic Heights World School. All Rights Reserved.</p>
          <p className="footer-tagline">Nurturing Tomorrow's Leaders Today</p>
        </div>
      </div>
    </footer>
  )
}
