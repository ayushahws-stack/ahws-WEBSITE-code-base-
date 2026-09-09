const fs = require('fs');
const path = require('path');

const srcDir = 'src/pages';
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jsx'));

let markdown = '# AHWS Website - Downloadable Documents Mapping\n\nThis guide tells the WordPress developer exactly which PDF documents need to be linked on which pages.\n\n';

for (const file of files) {
  const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
  
  const regex = /<a[^>]+href=["']([^"']+\.pdf)["'][^>]*>(.*?)<\/a>/gi;
  let match;
  let found = false;
  
  let pageContent = '## Page: ' + file.replace('.jsx', '') + '\n';
  
  while ((match = regex.exec(content)) !== null) {
    found = true;
    let url = match[1];
    let linkText = match[2].replace(/<[^>]+>/g, '').trim() || 'Download Link';
    pageContent += '* **Link Text:** "' + linkText + '"\n  * **File Path:** ' + url + '\n';
  }
  
  if (found) {
    markdown += pageContent + '\n';
  }
}

fs.writeFileSync('D:/ayush bansal/WEBSITE/02_HANDOVER_DOCS/02_WORDPRESS_DEVELOPER_PACKAGE/AHWS_Documents_Mapping.md', markdown);
console.log('Mapping created in 02_WORDPRESS_DEVELOPER_PACKAGE.');
