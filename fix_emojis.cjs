const fs = require('fs');
const file = 'D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Admission.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the specific broken emojis in the transport section
content = content.replace(
  /<span style={{ fontSize: '1.5rem' }}>\?\?<\/span>\s*<h3 style={{ color: 'var\(--ahws-primary\)', margin: 0 }}>Bus Routes & Coverage<\/h3>/g,
  <span style={{ fontSize: '1.5rem' }}>🚌</span>\n                  <h3 style={{ color: 'var(--ahws-primary)', margin: 0 }}>Bus Routes & Coverage</h3>
);

content = content.replace(
  /<span style={{ fontSize: '1.5rem' }}>\?\?\?<\/span>\s*<h3 style={{ color: 'var\(--ahws-primary\)', margin: 0 }}>Safety & GPS Monitored<\/h3>/g,
  <span style={{ fontSize: '1.5rem' }}>🛡️</span>\n                  <h3 style={{ color: 'var(--ahws-primary)', margin: 0 }}>Safety & GPS Monitored</h3>
);

content = content.replace(
  /<span style={{ fontSize: '1.5rem' }}>\?\?<\/span>\s*<h3 style={{ color: 'var\(--ahws-primary\)', margin: 0 }}>Transport Fees<\/h3>/g,
  <span style={{ fontSize: '1.5rem' }}>💳</span>\n                  <h3 style={{ color: 'var(--ahws-primary)', margin: 0 }}>Transport Fees</h3>
);

fs.writeFileSync(file, content, 'utf8');
console.log('Emojis fixed!');
