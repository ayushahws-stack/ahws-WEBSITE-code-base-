const fs = require('fs');
let home = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Home.jsx', 'utf8');

home = home.replace('<section className="infra-section">', '<section className="infra-section" id="facilities">');
home = home.replace('<section className="empowering-section">', '<section className="empowering-section" id="why-join">');
home = home.replace('<section className="timeline-section">', '<section className="timeline-section" id="day-at-ahws">');

fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Home.jsx', home);
console.log('Fixed Home.jsx section IDs');
