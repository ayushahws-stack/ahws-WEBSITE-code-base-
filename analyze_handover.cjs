const fs = require('fs');
const path = require('path');

const dir = 'D:/ayush bansal/WEBSITE/02_HANDOVER_DOCS';

function getFiles(d, filesList = []) {
  const files = fs.readdirSync(d);
  for (const file of files) {
    const fullPath = path.join(d, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, filesList);
    } else {
      filesList.push(fullPath);
    }
  }
  return filesList;
}

const files = getFiles(dir);

const results = [];
for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  let preview = '';
  if (['.md', '.txt', '.js', '.css', '.csv'].includes(ext)) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      preview = content.substring(0, 150).replace(/\n/g, ' ') + '...';
    } catch(e) {}
  } else {
    preview = '[Binary or Spreadsheet file]';
  }
  results.push({ name: path.relative(dir, file).replace(/\\/g, '/'), ext, preview });
}

console.log(JSON.stringify(results, null, 2));
