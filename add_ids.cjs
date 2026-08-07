const fs = require('fs');
const path = require('path');
const src = 'D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages';

// 1. About.jsx
let about = fs.readFileSync(path.join(src, 'About.jsx'), 'utf8');
about = about.replace('<section className="leadership-section">', '<section className="leadership-section" id="leadership">');
about = about.replace('<section className="timeline-section">', '<section className="timeline-section" id="journey">');
about = about.replace('<section className="why-ahws-section">', '<section className="why-ahws-section" id="why-ahws">');
about = about.replace('<section className="app-section">', '<section className="app-section" id="app">');
about = about.replace('<section className="counselling-section">', '<section className="counselling-section" id="counselling">');
fs.writeFileSync(path.join(src, 'About.jsx'), about);

// 2. Infrastructure.jsx
let infra = fs.readFileSync(path.join(src, 'Infrastructure.jsx'), 'utf8');
infra = infra.replace('<section className="infra-library">', '<section className="infra-library" id="library">');
infra = infra.replace('<section className="infra-labs">', '<section className="infra-labs" id="laboratories">');
infra = infra.replace('<section className="infra-sports">', '<section className="infra-sports" id="sports">');
infra = infra.replace('<section className="infra-amenities">', '<section className="infra-amenities" id="amenities">');
infra = infra.replace('<section className="infra-safety">', '<section className="infra-safety" id="safety">');
fs.writeFileSync(path.join(src, 'Infrastructure.jsx'), infra);

// 3. Curriculum.jsx
let curr = fs.readFileSync(path.join(src, 'Curriculum.jsx'), 'utf8');
curr = curr.replace('<section className="sprout-section">', '<section className="sprout-section" id="sprout-curriculum">');
curr = curr.replace('<section className="stages-section">', '<section className="stages-section" id="academic-stages">');
curr = curr.replace('<section className="pedagogy-section">', '<section className="pedagogy-section" id="pedagogy">');
curr = curr.replace('<section className="exam-section">', '<section className="exam-section" id="examination">');
curr = curr.replace('<section className="books-section">', '<section className="books-section" id="textbooks">');
fs.writeFileSync(path.join(src, 'Curriculum.jsx'), curr);

// 4. Admission.jsx
let adm = fs.readFileSync(path.join(src, 'Admission.jsx'), 'utf8');
adm = adm.replace('<section className="admission-main">', '<section className="admission-main" id="admission-journey">');
adm = adm.replace('<section className="age-criteria-section">', '<section className="age-criteria-section" id="age-criteria">');
// Note: "Admission Process" isn't wrapped in its own section, it's part of admission-main, but wait, looking at Admission.jsx:
// The 6 steps are inside <div className="admission-process">. Let's add ID there if there is no section wrapper.
// Actually, I can just link to #admission-process and add it to that div.
adm = adm.replace('<div className="admission-process">', '<div className="admission-process" id="admission-process">');
adm = adm.replace('<section className="admission-transport" style=', '<section className="admission-transport" id="transport" style=');
adm = adm.replace('<section className="admission-links">', '<section className="admission-links" id="documents">');
fs.writeFileSync(path.join(src, 'Admission.jsx'), adm);

// 5. Wellbeing.jsx
let wb = fs.readFileSync(path.join(src, 'Wellbeing.jsx'), 'utf8');
wb = wb.replace('<section className="wellbeing-intro">', '<section className="wellbeing-intro" id="overview">');
wb = wb.replace('<section className="mentor-section">', '<section className="mentor-section" id="mentor-mentee">');
wb = wb.replace('<section className="life-skills-section">', '<section className="life-skills-section" id="life-skills">');
wb = wb.replace('<section className="counsellor-section">', '<section className="counsellor-section" id="counselling-team">');
fs.writeFileSync(path.join(src, 'Wellbeing.jsx'), wb);

console.log("IDs added to pages successfully!");
