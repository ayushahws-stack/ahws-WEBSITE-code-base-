const fs = require('fs');
let wb = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Wellbeing.jsx', 'utf8');

wb = wb.replace('<section className="wellbeing-intro-section">', '<section className="wellbeing-intro-section" id="overview">');
wb = wb.replace(
    '<div key={idx} className="wb-card">', 
    '<div key={idx} className="wb-card" id={sec.title.includes("Mentor") ? "mentor-mentee" : sec.title.includes("Life") ? "life-skills" : ""}>'
);

fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Wellbeing.jsx', wb);
console.log('Fixed Wellbeing IDs');
