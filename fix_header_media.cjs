const fs = require('fs');
let css = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/components/Header.css', 'utf8');
css = css.replace('.topbar-contact, .topbar-right, .topbar-social { display: none; }\n    .topbar-center { text-align: center; width: 100%; }', '.header-topbar { display: none; }');
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/components/Header.css', css);
console.log('Fixed Header.css media query cleanly');
