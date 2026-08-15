const fs = require('fs');
let css = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/index.css', 'utf8');

const newVars = '\n  --surface: #ffffff;\n  --text: #1a1a2e;\n  --text-light: #6c757d;\n  --shadow-sm: 0 2px 8px rgba(0,33,71,0.06);\n  --shadow-md: 0 4px 16px rgba(0,33,71,0.12);\n  --ahws-light-bg: #f8f9fa;\n  --ahws-secondary: #FFC700;\n  --ahws-primary: #002147;\n  --ahws-muted: #6c757d;\n  --radius-md: 8px;';

css = css.replace("--font-main: 'Outfit', 'Inter', sans-serif;", "--font-main: 'Outfit', 'Inter', sans-serif;" + newVars);
fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/index.css', css);
console.log('Fixed CSS Variables');
