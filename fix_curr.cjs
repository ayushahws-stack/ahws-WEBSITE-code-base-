const fs = require('fs');
let css = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Academics.css', 'utf8');

css += '\n@media (max-width: 1024px) {\n  .acad-pedagogy-grid-6 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n';
css += '\n@media (max-width: 640px) {\n  .acad-pedagogy-grid-6 {\n    grid-template-columns: 1fr;\n  }\n}\n';

fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Academics.css', css);
console.log('Fixed Curriculum grid');
