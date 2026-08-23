const fs = require('fs');
let content = fs.readFileSync('src/components/Header.jsx', 'utf8');

// Replace the buggy includes logic with an exact path check
content = content.replace(
  /if \(child\.to\.includes\('#'\) && \(window\.location\.hash === '' \? '\/' : window\.location\.hash\)\.includes\(child\.to\.split\('#'\)\[0\]\)\) \{/g,
  "const targetPath = child.to.split('#')[0] || '/';\n                                  const currentPath = window.location.hash.replace('#', '').split('?')[0] || '/';\n                                  if (child.to.includes('#') && currentPath === targetPath) {"
);

content = content.replace(
  /if \(sub\.to\.includes\('#'\) && \(window\.location\.hash === '' \? '\/' : window\.location\.hash\)\.includes\(sub\.to\.split\('#'\)\[0\]\)\) \{/g,
  "const targetPath = sub.to.split('#')[0] || '/';\n                                        const currentPath = window.location.hash.replace('#', '').split('?')[0] || '/';\n                                        if (sub.to.includes('#') && currentPath === targetPath) {"
);

fs.writeFileSync('src/components/Header.jsx', content);
