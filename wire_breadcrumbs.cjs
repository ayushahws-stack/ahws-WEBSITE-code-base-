const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

content = content.replace(
  "import Header from './components/Header'",
  "import Header from './components/Header'\nimport Breadcrumbs from './components/Breadcrumbs'"
);

content = content.replace(
  "<Header />",
  "<Header />\n        <Breadcrumbs />"
);

fs.writeFileSync('src/App.jsx', content);
