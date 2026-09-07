const fs = require('fs');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = dir + '/' + file;
    try {
      filelist = fs.statSync(dirFile).isDirectory() ? walkSync(dirFile, filelist) : filelist.concat(dirFile);
    } catch (err) { }
  });
  return filelist;
};

const files = walkSync('src').filter(f => f.endsWith('.jsx'));
let totalFixed = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;
  
  content = content.replace(/<img([^>]+)>/g, (match, p1) => {
    if (!p1.includes('alt=')) {
      changed = true;
      let closing = p1.trim().endsWith('/') ? '>' : ' />';
      let inner = p1.trim().endsWith('/') ? p1.trim().slice(0, -1) : p1;
      return '<img' + inner + ' alt="Academic Heights World School"' + closing;
    }
    return match;
  });
  
  if (changed) {
    fs.writeFileSync(f, content);
    console.log('Fixed alts in: ' + f);
    totalFixed++;
  }
});
console.log('Done. Fixed ' + totalFixed + ' files.');
