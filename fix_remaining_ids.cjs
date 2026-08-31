const fs = require('fs');
let about = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/About.jsx', 'utf8');

about = about.replace('<section className="about-journey">', '<section className="about-journey" id="journey">');
about = about.replace('<section className="why-ahws">', '<section className="why-ahws" id="why-ahws">');
about = about.replace('<section className="app360-section">', '<section className="app360-section" id="app">');

fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/About.jsx', about);

let infra = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Infrastructure.jsx', 'utf8');
infra = infra.replace('<section className="library-section">', '<section className="library-section" id="library">');
infra = infra.replace('<section className="labs-section bg-light">', '<section className="labs-section bg-light" id="laboratories">');
infra = infra.replace('<section className="sports-section">', '<section className="sports-section" id="sports">');
infra = infra.replace('<section className="amenities-section bg-primary text-white">', '<section className="amenities-section bg-primary text-white" id="amenities">');
infra = infra.replace('<section className="safety-section">', '<section className="safety-section" id="safety">');
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Infrastructure.jsx', infra);

let beyond = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/BeyondCurriculum.jsx', 'utf8');
beyond = beyond.replace('<section className="enrichment-pillars-section">', '<section className="enrichment-pillars-section" id="sprout-pillars">');
beyond = beyond.replace('<section className="special-programs-section bg-light">', '<section className="special-programs-section bg-light" id="programs">');
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/BeyondCurriculum.jsx', beyond);

let fee = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/FeeStructure.jsx', 'utf8');
fee = fee.replace('<section className="fee-section">', '<section className="fee-section" id="academic-session">');
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/FeeStructure.jsx', fee);

console.log('Fixed remaining IDs across the site');
