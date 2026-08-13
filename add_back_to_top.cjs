const fs = require('fs');
let app = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/App.jsx', 'utf8');

app = app.replace(
    "import FloatingEnquiry from './components/FloatingEnquiry'",
    "import FloatingEnquiry from './components/FloatingEnquiry'\nimport BackToTop from './components/BackToTop'"
);

app = app.replace(
    "<FloatingEnquiry />",
    "<FloatingEnquiry />\n      <BackToTop />"
);

fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/App.jsx', app);
console.log('App.jsx updated with BackToTop component');
