import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

const routeMetadata = {
  '/': {
    title: 'CBSE School in Pitampura, Delhi | Academic Heights World School',
    description: 'At Academic Heights World School Pitampura, our purpose is to nurture learners who are academically grounded, curious, and confident through conceptual, experiential, and competency-based learning.'
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
  '/facilities': {
    title: 'Explore Facilities & 360° Virtual Tour | AHWS Pitampura',
    description: 'Explore AHWS campus facilities and upcoming 360° virtual reality campus tour. Library, Science & AI Labs, Sports Arena, and Smart Classrooms.'
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
  },
  '/we-teach-life': {
    title: 'We Teach Life | Holistic Development at AHWS',
    description: 'Explore how AHWS imparts life skills, emotional intelligence, and real-world leadership qualities through the We Teach Life initiative.'
  },
  '/well-being': {
    title: 'Student Wellbeing & Counselling Support | AHWS Pitampura',
    description: 'Learn about student mental health, emotional wellness, parent coaching, and guidance under in-house counsellor Dr. Rashmi Bajaj Singh (28+ years experience) at AHWS.'
  },
  '/blog': {
    title: 'School Blog & Educational Insights | Academic Heights World School',
    description: 'Articles on 21st-century schooling, NEP 2020 pedagogical practices, parenting tips, AI & STEM education from Academic Heights World School, Pitampura.'
  },
  '/academics': {
    title: 'Academics & SPROUT Curriculum | Academic Heights World School',
    description: 'Comprehensive academic framework from Nursery to Class XII aligned with NEP 2020, experiential learning, and SPROUT 7-layer pedagogy.'
  },
  '/tc-database': {
    title: 'Transfer Certificate Database | AHWS Pitampura',
    description: 'Search and download student Transfer Certificates (TC) officially issued by Academic Heights World School.'
  }
};

export default function SEO() {
  const location = useLocation();
  const path = location.pathname;
  
  const meta = routeMetadata[path] || {
    title: 'Academic Heights World School | Pitampura',
    description: 'Academic Heights World School (AHWS) is a top CBSE school in Pitampura, Delhi.'
  };

  const siteUrl = 'https://ahws.edu.in';
  const canonicalUrl = `${siteUrl}${path === '/' ? '' : path}`;

  useEffect(() => {
    // Legacy support to ensure standard scroll restoration
    window.scrollTo(0, 0);
  }, [path]);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      ...(path !== '/' ? [{
        "@type": "ListItem",
        "position": 2,
        "name": meta.title.split('|')[0].trim(),
        "item": canonicalUrl
      }] : [])
    ]
  };

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonicalUrl} />
      
      <meta property="og:site_name" content="Academic Heights World School" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonicalUrl} />
      
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />

      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}

