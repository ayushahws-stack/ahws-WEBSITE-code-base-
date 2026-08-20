const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

content = content.replace(
  "import Breadcrumbs from './components/Breadcrumbs'",
  ""
);

content = content.replace(
  "        <Breadcrumbs />\n",
  ""
);

fs.writeFileSync('src/App.jsx', content);
