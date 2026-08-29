const fs = require('fs');
const path = require('path');

function getFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = dir + '/' + file;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, filesList);
    } else {
      if (name.endsWith('.jsx')) filesList.push(name);
    }
  }
  return filesList;
}

const jsxFiles = getFiles('src');
const publicPath = path.resolve('public');
const missingFiles = [];

for (const file of jsxFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.matchAll(/(?:src|href|image)=["'](\.\/[^"']+)["']/g);
  for (const match of matches) {
    const urlPath = match[1];
    // Remove './' at the beginning
    const relativePath = decodeURIComponent(urlPath.substring(2));
    const fullPath = path.join(publicPath, relativePath);
    if (!fs.existsSync(fullPath)) {
      missingFiles.push({ file: file, missing: relativePath, urlPath: urlPath });
    }
  }
}

console.log('Missing files referenced in code:');
console.log(JSON.stringify(missingFiles, null, 2));
