const fs = require('fs');
let curr = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Curriculum.jsx', 'utf8');
curr = curr.replace('<section className="acad-curriculum">', '<section className="acad-curriculum" id="sprout-curriculum">');
curr = curr.replace('<section className="acad-stages-section bg-light">', '<section className="acad-stages-section bg-light" id="academic-stages">');
curr = curr.replace('<section className="acad-pedagogy">', '<section className="acad-pedagogy" id="pedagogy">');
curr = curr.replace('<section className="acad-exams bg-light">', '<section className="acad-exams bg-light" id="examination">');
curr = curr.replace('<section className="acad-textbooks">', '<section className="acad-textbooks" id="textbooks">');
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Curriculum.jsx', curr);
console.log('Fixed Curriculum IDs');
