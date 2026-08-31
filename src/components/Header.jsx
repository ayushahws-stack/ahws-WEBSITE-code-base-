import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const navItems = [
  { label: 'HOME', to: '/' },
  { 
    label: 'ABOUT US', 
    to: '/about'
  },
  { 
    label: 'OUR CAMPUS', 
    to: '/gallery',
    children: [
      { label: 'GALLERY', to: '/gallery' },
      { label: 'INFRASTRUCTURE', to: '/infrastructure' },
      { label: 'SCHOOL BLOGS', to: '/blog' },
      { label: 'NEWS & EVENTS', to: '/events' },
      { label: 'NOTICE BOARD', to: '/notice-board' },
    ]
  },
  { 
    label: 'ACADEMICS', 
    to: '/curriculum',
    children: [
      { label: 'CURRICULUM', to: '/curriculum' },
      { label: 'BEYOND CURRICULUM', to: '/beyond-curriculum' },
      { label: 'WE TEACH LIFE', to: '/we-teach-life' },
      // { label: 'RESULTS & ACHIEVEMENTS', to: '/results' }, // Hidden per user request
    ]
  },
  {
    label: 'WELL-BEING',
    to: '/well-being',
    children: [
      { label: 'WELL-BEING', to: '/well-being' },
      { label: 'MANDATORY DISCLOSURE', to: '/mandatory-disclosure' },
      { label: 'ALUMNI', to: '/alumni' },
      { label: 'SAFETY & COMMITTEES', to: '/committees' },
    ]
  },
  {
    label: 'ADMISSION',
    to: '/admission',
    children: [
      { label: 'ADMISSION PROCESS', to: '/admission' },
      { label: 'FEE STRUCTURE', to: '/fee-structure' },
      { label: 'DRAW LIST (2026-27)', to: 'https://ahws.edu.in/ADMISSION-DRAW-LIST-17.01.25.pdf', external: true },
      { label: 'AGE CRITERIA', to: '/admission#age-criteria' },
      { label: 'REGISTERED APPLICANTS', to: 'https://ahws.edu.in/list-of-registered-applicants-2026-27.pdf', external: true },
      { label: 'BOOK VENDORS LIST', to: 'https://ahws.edu.in/pdfs/book-vendors-list-2026.pdf', external: true },
    ]
  },
  { label: 'CONTACT US', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location])

  return (
    <header className={`ahws-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="header-topbar">
        <div className="container topbar-inner">
          <div className="topbar-contact">
            <a href="tel:+918860455000">
              <i className="icon-phone">📞</i> +91 8860455000
            </a>
            <a href="mailto:info@ahws.edu.in">
              <i className="icon-mail">✉</i> info@ahws.edu.in
            </a>
          </div>
          <div className="topbar-center">
            <Link
              to="/admission"
              className="blink-badge"
            >
              🔴 REGISTRATION OPEN 2026-27
            </Link>
          </div>
          <div className="topbar-right">
            <div className="topbar-portals">
              <a href="https://ah5000.skeducations.com/" target="_blank" rel="noopener noreferrer" className="portal-link">360 App Login</a>
            </div>
            <div className="topbar-social">
              <a href="https://www.facebook.com/profile.php?id=61555732875904" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/ahws.official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.youtube.com/@AcademicHeightsWorldSchool" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="header-main">
        <div className="container nav-inner">
          <Link to="/" className="logo-link">
            <img
              src="https://ahws.edu.in/images/logo.webp"
              alt="Academic Heights World School Logo"
              className="logo-img"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={`nav-item ${item.children ? 'has-dropdown' : ''}`}
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onFocus={() => item.children && setOpenDropdown(item.label)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                      setOpenDropdown(null)
                    }
                  }}
                >
                  {item.to ? (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      aria-haspopup={item.children ? "true" : undefined}
                      aria-expanded={item.children ? (openDropdown === item.label) : undefined}
                    >
                      {item.label} {item.children && <span className="chevron">▾</span>}
                    </NavLink>
                  ) : (
                    <button 
                      className="nav-link nav-btn"
                      aria-haspopup={item.children ? "true" : undefined}
                      aria-expanded={item.children ? (openDropdown === item.label) : undefined}
                    >
                      {item.label} <span className="chevron">▾</span>
                    </button>
                  )}
                  {item.children && openDropdown === item.label && (
                    <ul className="dropdown-menu">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          {child.external ? (
                            <a href={child.to} target="_blank" rel="noopener noreferrer" className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                              {child.label}
                            </a>
                          ) : (
                            <NavLink to={child.to} className="dropdown-item" onClick={() => setOpenDropdown(null)}>{child.label}</NavLink>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className={`hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div className={`menu-backdrop ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-inner">
          {navItems.map((item) => (
            <div key={item.label} className="mobile-item">
              {item.children ? (
                <>
                  <button
                    className="mobile-link mobile-parent"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <span className={`chevron-mobile ${openDropdown === item.label ? 'up' : ''}`}>▾</span>
                  </button>
                  {openDropdown === item.label && (
                    <div className="mobile-sub">
                      {item.children.map((child) => (
                        child.external ? (
                          <a key={child.label} href={child.to} target="_blank" rel="noopener noreferrer" className="mobile-sub-link" onClick={() => setMobileOpen(false)}>
                            {child.label}
                          </a>
                        ) : (
                          <NavLink key={child.label} to={child.to} className="mobile-sub-link" onClick={() => setMobileOpen(false)}>
                            {child.label}
                          </NavLink>
                        )
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink to={item.to} className="mobile-link" onClick={() => setMobileOpen(false)}>{item.label}</NavLink>
              )}
            </div>
          ))}
          <div className="mobile-social">
            <a href="https://www.facebook.com/profile.php?id=61555732875904" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/ahws.official/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.youtube.com/@AcademicHeightsWorldSchool" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </header>
  )
}

