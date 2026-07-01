import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const routeMetadata = {
  '/': {
    title: 'Academic Heights World School (AHWS) – Best CBSE School in Pitampura, Delhi',
    description: 'Academic Heights World School (AHWS) is a top CBSE school in Pitampura, Delhi. Offering NEP-2020 aligned SPROUT curriculum, AI & Robotics labs, 150 CCTV cameras, and holistic 360° education.'
  },
  '/about': {
    title: 'About Us | Academic Heights World School (AHWS) Delhi',
    description: 'Learn about Academic Heights World School leadership, mission, vision, and our 20+ year legacy in nurturing future-ready global leaders in Delhi.'
  },
  '/curriculum': {
    title: 'SPROUT Curriculum & Academics | AHWS Pitampura',
    description: 'Explore the 7 Layers of SPROUT Curriculum, NEP 5+3+3+4 stage-wise education framework, Multiple Intelligences, and examination schedules at AHWS.'
  },
  '/beyond-curriculum': {
    title: 'Beyond Curriculum & Co-Scholastic Programs | AHWS',
    description: 'Discover Decode Startup, Wordsworth Digital Language Lab, Theater & Performing Arts, Sports Excellence, and 21st Century Skills at AHWS.'
  },
  '/admission': {
    title: 'Admissions Open 2026-27 | Academic Heights World School',
    description: 'Apply for admission at Academic Heights World School, Pitampura for Nursery to Class XII. Online enquiry, eligibility criteria, and fee structure.'
  },
  '/fee-structure': {
    title: 'Fee Structure 2026-27 | Academic Heights World School',
    description: 'Official fee breakdown for Academic Heights World School, Pitampura, Delhi. Admission fee, tuition fee, annual charges, and payment guidelines.'
  },
  '/infrastructure': {
    title: 'World-Class Infrastructure & Facilities | AHWS',
    description: 'Explore AHWS campus facilities: 150 CCTV cameras, 6,000+ book library, Science & AI Robotics labs, Basketball courts, and air-conditioned smart classrooms.'
  },
  '/gallery': {
    title: 'Photo & Video Gallery | Academic Heights World School',
    description: 'View photos and videos of AHWS Sports Day, Annual Celebrations, Science Exhibitions, Achievers, and vibrant campus life.'
  },
  '/events': {
    title: 'News & Event Highlights | AHWS Delhi',
    description: 'Stay updated with news coverage, cultural festivals, sports meets, and photo highlights of events at Academic Heights World School.'
  },
  '/notice-board': {
    title: 'School Notice Board & Circulars | AHWS Pitampura',
    description: 'Official AHWS Notice Board, Academic Calendar 2026-27, upcoming event dates, PTM schedules, and downloadable school circulars.'
  },
  '/results': {
    title: 'CBSE Board Results & Toppers | AHWS Pitampura',
    description: 'Celebrate Class X & XII CBSE Board exam toppers, 100% pass rate records, and academic excellence achievements at AHWS.'
  },
  '/committees': {
    title: 'Safety & School Committees | AHWS Pitampura',
    description: 'View official CBSE mandatory school committees: POSH Sexual Harassment Committee, POCSO Child Protection, Anti-Bullying, Safety, and Tobacco Control.'
  },
  '/mandatory-disclosure': {
    title: 'CBSE Mandatory Disclosure | Academic Heights World School',
    description: 'Public transparency documents as per CBSE guidelines: Affiliation letters, NOC, Society registration, Building Safety, Fire Safety, and DEO certificates.'
  },
  '/careers': {
    title: 'Careers & Job Openings | Academic Heights World School',
    description: 'Join the team at AHWS Pitampura. We are recruiting PGT, TGT, PRT teachers, administrative staff, and sports coaches.'
  },
  '/contact': {
    title: 'Contact Us | Academic Heights World School Pitampura',
    description: 'Get in touch with AHWS Pitampura. Phone: 011-49402170 / 8860455000, Email: info@ahws.edu.in, Address: SD-QD Block, Near TV Tower, Pitampura, Delhi.'
  },
  '/alumni': {
    title: 'Alumni Network | Academic Heights World School',
    description: 'Connect with distinguished AHWS alumni excelling in IITs, AIIMS, sports, and corporate leadership. Register for the AHWS Alumni Network.'
  }
}

export default function SEO() {
  const location = useLocation()

  useEffect(() => {
    const meta = routeMetadata[location.pathname] || routeMetadata['/']
    document.title = meta.title

    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', meta.description)
    
    window.scrollTo(0, 0)
  }, [location])

  return null
}
