const fs = require('fs');
const file = 'D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/components/Header.jsx';
let content = fs.readFileSync(file, 'utf8');

const navItemsString = 
const navItems = [
  { 
    label: 'HOME', 
    to: '/',
    children: [
      { label: 'WORLD-CLASS FACILITIES', to: '/#facilities' },
      { label: 'WHY JOIN AHWS?', to: '/#why-join' },
      { label: 'UNIQUENESS DEFINED', to: '/#uniqueness' },
      { label: 'A DAY AT AHWS', to: '/#day-at-ahws' },
      { label: 'CAMPUS GALLERY', to: '/#gallery-preview' },
    ]
  },
  { 
    label: 'ABOUT US', 
    to: '/about',
    children: [
      { label: 'VISION & LEADERSHIP', to: '/about#leadership' },
      { label: 'OUR JOURNEY', to: '/about#journey' },
      { label: 'WHY CHOOSE AHWS', to: '/about#why-ahws' },
      { label: '360° APP', to: '/about#app' },
      { label: 'COUNSELLING', to: '/about#counselling' },
    ]
  },
  { 
    label: 'OUR CAMPUS', 
    to: '/gallery',
    children: [
      { 
        label: 'GALLERY', 
        to: '/gallery',
        children: [
          { label: 'PHOTO GALLERY', to: '/gallery#photos' },
          { label: 'VIDEO GALLERY', to: '/gallery#videos' },
          { label: 'OUR ACHIEVERS', to: '/gallery#achievers' },
        ]
      },
      { 
        label: 'INFRASTRUCTURE', 
        to: '/infrastructure',
        children: [
          { label: 'LIBRARY', to: '/infrastructure#library' },
          { label: 'LABORATORIES', to: '/infrastructure#laboratories' },
          { label: 'SPORTS', to: '/infrastructure#sports' },
          { label: 'AMENITIES', to: '/infrastructure#amenities' },
          { label: 'SAFETY', to: '/infrastructure#safety' },
        ]
      },
      { 
        label: 'SCHOOL BLOGS', 
        to: '/blog',
        children: [
          { label: 'ARTICLES', to: '/blog#articles' }
        ]
      },
      { 
        label: 'NEWS & EVENTS', 
        to: '/events',
        children: [
          { label: 'AWARDS & ACCOLADES', to: '/events#awards' },
          { label: 'RECENT NEWS', to: '/events#recent-news' },
        ]
      },
      { 
        label: 'NOTICE BOARD', 
        to: '/notice-board',
        children: [
          { label: 'NOTICES', to: '/notice-board#notices' },
          { label: 'UPCOMING EVENTS', to: '/notice-board#upcoming-events' },
          { label: 'CIRCULARS', to: '/notice-board#circulars' },
        ]
      },
    ]
  },
  { 
    label: 'ACADEMICS', 
    to: '/curriculum',
    children: [
      { 
        label: 'CURRICULUM', 
        to: '/curriculum',
        children: [
          { label: 'SPROUT CURRICULUM', to: '/curriculum#sprout-curriculum' },
          { label: 'ACADEMIC STAGES', to: '/curriculum#academic-stages' },
          { label: 'PEDAGOGY', to: '/curriculum#pedagogy' },
          { label: 'EXAMINATIONS', to: '/curriculum#examination' },
          { label: 'TEXTBOOKS', to: '/curriculum#textbooks' },
        ]
      },
      { 
        label: 'BEYOND CURRICULUM', 
        to: '/beyond-curriculum',
        children: [
          { label: 'SPROUT PILLARS', to: '/beyond-curriculum#sprout-pillars' },
          { label: 'SPECIAL PROGRAMS', to: '/beyond-curriculum#programs' },
          { label: 'SPORTS', to: '/beyond-curriculum#sports' },
        ]
      },
      { 
        label: 'WE TEACH LIFE', 
        to: '/we-teach-life',
        children: [
          { label: 'COMMUNITY', to: '/we-teach-life#community' },
          { label: 'PARENTS', to: '/we-teach-life#parents' },
          { label: 'EDUCATORS', to: '/we-teach-life#educators' },
          { label: 'HELPERS', to: '/we-teach-life#helpers' },
          { label: 'ENVIRONMENT', to: '/we-teach-life#environment' },
          { label: 'LIFE SKILLS', to: '/we-teach-life#skills' },
          { label: 'EXTRA-CURRICULAR', to: '/we-teach-life#extra-curricular' },
          { label: 'MOTIVATION', to: '/we-teach-life#motivation' },
          { label: 'GRATITUDE', to: '/we-teach-life#gratitude' },
        ]
      },
    ]
  },
  {
    label: 'WELL-BEING',
    to: '/well-being',
    children: [
      { 
        label: 'WELL-BEING', 
        to: '/well-being',
        children: [
          { label: 'OVERVIEW', to: '/well-being#overview' },
          { label: 'MENTOR-MENTEE', to: '/well-being#mentor-mentee' },
          { label: 'LIFE SKILLS', to: '/well-being#life-skills' },
          { label: 'COUNSELLING TEAM', to: '/well-being#counselling-team' },
        ]
      },
      { 
        label: 'MANDATORY DISCLOSURE', 
        to: '/mandatory-disclosure',
        children: [
          { label: 'DISCLOSURE', to: '/mandatory-disclosure#disclosure' }
        ]
      },
      { 
        label: 'ALUMNI', 
        to: '/alumni',
        children: [
          { label: 'OUR ALUMNI', to: '/alumni#alumni' }
        ]
      },
      { 
        label: 'SAFETY & COMMITTEES', 
        to: '/committees',
        children: [
          { label: 'OVERVIEW', to: '/committees#overview' },
          { label: 'COMMITTEES LIST', to: '/committees#committees-list' }
        ]
      },
    ]
  },
  {
    label: 'ADMISSION',
    to: '/admission',
    children: [
      { 
        label: 'ADMISSION PROCESS', 
        to: '/admission',
        children: [
          { label: 'ENQUIRY FORM', to: '/admission#admission-journey' },
          { label: 'AGE CRITERIA', to: '/admission#age-criteria' },
          { label: '6-STEP PROCESS', to: '/admission#admission-process' },
          { label: 'TRANSPORT', to: '/admission#transport' },
          { label: 'DOCUMENTS', to: '/admission#documents' },
        ]
      },
      { 
        label: 'FEE STRUCTURE', 
        to: '/fee-structure',
        children: [
          { label: 'ACADEMIC SESSION', to: '/fee-structure#academic-session' }
        ]
      },
      { label: 'DRAW LIST (2026-27)', to: 'https://ahws.edu.in/ADMISSION-DRAW-LIST-17.01.25.pdf', external: true },
      { label: 'AGE CRITERIA', to: '/admission#age-criteria' },
      { label: 'REGISTERED APPLICANTS', to: 'https://ahws.edu.in/list-of-registered-applicants-2026-27.pdf', external: true },
      { label: 'BOOK VENDORS LIST', to: 'https://ahws.edu.in/pdfs/book-vendors-list-2026.pdf', external: true },
    ]
  },
  { 
    label: 'CONTACT US', 
    to: '/contact',
    children: [
      { label: 'CONTACT DETAILS', to: '/contact#contact-details' },
      { label: 'LOCATION MAP', to: '/contact#location-map' },
    ]
  },
]
;

content = content.replace(/const navItems = \[[\s\S]*?\]\s*\]\n\s*\}\n\s*\]\s*\n?\s*\}\s*,\s*\{\s*label:\s*'CONTACT US',\s*to:\s*'\/contact'\s*\}\s*,?\s*\]/, navItemsString.trim());
// Wait, my regex might fail. Let's just do a simple replace using a known start and end string.

content = content.split('const navItems = [')[0] + navItemsString.trim() + content.split(']')[content.split(']').length - 1];
// That's risky. Let's use substring.

let startIdx = content.indexOf('const navItems = [');
let endIdx = content.indexOf('export default function Header()');

if (startIdx !== -1 && endIdx !== -1) {
    let before = content.substring(0, startIdx);
    let after = content.substring(endIdx);
    content = before + navItemsString.trim() + '\n\n' + after;
    fs.writeFileSync(file, content);
    console.log("navItems fully replaced!");
} else {
    console.log("Could not find boundaries.");
}
