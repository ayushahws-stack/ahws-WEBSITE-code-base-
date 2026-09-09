const fs = require('fs');
const path = require('path');

const srcDir = 'src/pages';
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jsx'));

let markdown = '# AHWS Website - Raw Page Copy\n\nThis document contains the raw text content extracted from the React application for every page. Use this to copy and paste text directly into your WordPress page builder without dealing with HTML or code.\n\n';

for (const file of files) {
  const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
  
  // Very basic regex to strip HTML/JSX tags and import statements
  let textOnly = content
    .replace(/import.*?from.*?;?/g, '')
    .replace(/export default function.*?\(/g, '')
    .replace(/return\s*\(/g, '')
    .replace(/<[^>]+>/g, '\n')
    .replace(/\{[^\}]+\}/g, '')
    .replace(/className="[^"]+"/g, '')
    .replace(/^\s*[\r\n]/gm, '')
    .replace(/&amp;/g, '&')
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"');

  // Clean up excessive newlines
  textOnly = textOnly.split('\n').map(line => line.trim()).filter(line => line.length > 2 && !line.includes('const ') && !line.includes('useState') && !line.includes('useEffect') && !line.includes('e.prevent') && !line.includes('window.') && !line.includes('document.') && !line.includes(';')).join('\n\n');

  markdown += '## Page: ' + file.replace('.jsx', '') + '\n\n';
  markdown += textOnly + '\n\n---\n\n';
}

fs.writeFileSync('D:/ayush bansal/WEBSITE/02_HANDOVER_DOCS/02_WORDPRESS_DEVELOPER_PACKAGE/AHWS_Page_Copy.md', markdown);
console.log('Copy document created in 02_WORDPRESS_DEVELOPER_PACKAGE.');
