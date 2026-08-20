const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');
content = content.replace(
  "import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'",
  "import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'\nimport { HelmetProvider } from 'react-helmet-async'"
);
content = content.replace(
  "<HashRouter>",
  "<HelmetProvider>\n    <HashRouter>"
);
content = content.replace(
  "</HashRouter>",
  "</HashRouter>\n    </HelmetProvider>"
);
fs.writeFileSync('src/App.jsx', content);
