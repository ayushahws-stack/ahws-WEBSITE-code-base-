import { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Admission from './pages/Admission'
import ContactUs from './pages/ContactUs'
import Alumni from './pages/Alumni'
import MandatoryDisclosure from './pages/MandatoryDisclosure'
import Blog from './pages/Blog'
import Events from './pages/Events'
import NoticeBoard from './pages/NoticeBoard'
import Gallery from './pages/Gallery'
import Academics from './pages/Academics'
import Results from './pages/Results'
import FeeStructure from './pages/FeeStructure'
import Careers from './pages/Careers'
import Committees from './pages/Committees'
import Infrastructure from './pages/Infrastructure'
import Curriculum from './pages/Curriculum'
import BeyondCurriculum from './pages/BeyondCurriculum'
import AnnouncementTicker from './components/AnnouncementTicker'
import FloatingEnquiry from './components/FloatingEnquiry'
import SEO from './components/SEO'
import './App.css'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const elem = document.getElementById(id)
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo(0, 0)
        }
      }, 150)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <SEO />
      <AnnouncementTicker />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/events" element={<Events />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/academics" element={<Curriculum />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/beyond-curriculum" element={<BeyondCurriculum />} />
        <Route path="/results" element={<Results />} />
        <Route path="/fee-structure" element={<FeeStructure />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
      </Routes>
      <Footer />
      <FloatingEnquiry />
    </HashRouter>
  )
}

export default App

// force refresh
