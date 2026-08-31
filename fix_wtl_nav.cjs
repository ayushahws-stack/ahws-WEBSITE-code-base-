const fs = require('fs');
let css = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/WeTeachLife.css', 'utf8');
css = css.replace('top: 0;', 'top: 80px;');
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/WeTeachLife.css', css);
console.log('Fixed sticky nav top offset');
