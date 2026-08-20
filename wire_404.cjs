const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

content = content.replace(
  "import Home from './pages/Home'",
  "import Home from './pages/Home'\nimport NotFound from './pages/NotFound'"
);

content = content.replace(
  "<Route path=\"*\" element={<Navigate to=\"/\" replace />} />",
  "<Route path=\"*\" element={<NotFound />} />"
);

fs.writeFileSync('src/App.jsx', content);
