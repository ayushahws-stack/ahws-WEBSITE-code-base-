const fs = require('fs');
let about = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/About.jsx', 'utf8');
about = about.replace('Rachana Anand', 'Rachna Anand');
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/About.jsx', about);
console.log('Fixed Rachna Anand spelling');
