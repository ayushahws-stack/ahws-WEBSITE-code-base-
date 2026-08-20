const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Modify the schema array
content = content.replace(
  "@type": ["School", "EducationalOrganization"],,
  "@type": ["School", "EducationalOrganization", "LocalBusiness"],
);

fs.writeFileSync('index.html', content);
