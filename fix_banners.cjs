const fs = require('fs');
const brokenImg = './WEBSITE GALLERY/1st Day of 2026/WhatsApp Image 2026-01-01 at 4.29.58 PM.jpeg';
const fixedImg = './WEBSITE GALLERY/1st Day of 2026/WhatsApp Image 2026-03-27 at 3.44.01 PM (1).jpeg';

let events = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Events.jsx', 'utf8');
events = events.replace(brokenImg, fixedImg);
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Events.jsx', events);

let notices = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/NoticeBoard.jsx', 'utf8');
notices = notices.replace(brokenImg, fixedImg);
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/NoticeBoard.jsx', notices);
console.log('Fixed Banner Images');
