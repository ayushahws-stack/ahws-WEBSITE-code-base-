const fs = require('fs');
const file = 'D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/components/Header.jsx';
let content = fs.readFileSync(file, 'utf8');

// The replacement logic:
// 1. Remove the children from ABOUT US.
// 2. Add children to WELL-BEING.

content = content.replace(
  /\{\s*label:\s*'ABOUT US',[\s\S]*?children:\s*\[[\s\S]*?\]\s*\},/,
  { \n    label: 'ABOUT US', \n    to: '/about'\n  },
);

content = content.replace(
  /\{\s*label:\s*'WELL-BEING',\s*to:\s*'\/well-being'\s*\}/,
  {
    label: 'WELL-BEING',
    to: '/well-being',
    children: [
      { label: 'WELL-BEING', to: '/well-being' },
      { label: 'MANDATORY DISCLOSURE', to: '/mandatory-disclosure' },
      { label: 'ALUMNI', to: '/alumni' },
      { label: 'SAFETY & COMMITTEES', to: '/committees' },
    ]
  }
);

fs.writeFileSync(file, content);
console.log('Update complete.');
