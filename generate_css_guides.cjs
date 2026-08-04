const fs = require('fs');
const path = require('path');

const srcDir = 'D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src';
const outDir = 'D:/ayush bansal/WEBSITE/02_HANDOVER_DOCS/03_WORDPRESS_CSS';

function getFiles(d, filesList = []) {
  const files = fs.readdirSync(d);
  for (const file of files) {
    const fullPath = path.join(d, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, filesList);
    } else {
      if (fullPath.endsWith('.css')) filesList.push(fullPath);
    }
  }
  return filesList;
}

const cssFiles = getFiles(srcDir);
let standardCss = '';
let elementorCss = '';

const standardHeader = /*
================================================================================
  AHWS WEBSITE - WORDPRESS (NON-ELEMENTOR) IMPLEMENTATION GUIDE
  Academic Heights World School
  Compatible with: Classic Editor, Gutenberg, GeneratePress, Astra, etc.
================================================================================

  HOW TO USE THIS FILE:
  "?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?
  STEP 1: Log in to WordPress admin (yoursite.com/wp-admin)
  STEP 2: Go to Appearance > Customize
  STEP 3: Click "Additional CSS" in the left sidebar
  STEP 4: Copy and paste ALL of the content below into that box
  STEP 5: Click "Publish"

  This contains all the updated styles from the React application.
================================================================================
*/\n\n;

const elementorHeader = /*
================================================================================
  AHWS WEBSITE - WORDPRESS ELEMENTOR IMPLEMENTATION GUIDE
  Academic Heights World School
================================================================================

  HOW TO USE THIS FILE:
  "?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?
  STEP 1: Log in to your WordPress admin panel (yoursite.com/wp-admin)
  STEP 2: Go to Appearance > Customize
  STEP 3: Click "Additional CSS" in the left sidebar
  STEP 4: Copy and paste ALL of the content below into that box
  STEP 5: Click "Publish" to save changes

  ELEMENTOR-SPECIFIC TIPS:
  "?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?
  - This CSS uses !important on several properties. This is REQUIRED to
    override Elementor inline styles, which have very high specificity.
  - After adding CSS, always clear Elementor cache:
    Elementor > Tools > Regenerate CSS & Data
================================================================================
*/\n\n;

standardCss += standardHeader;
elementorCss += elementorHeader;

for (const file of cssFiles) {
  const filename = path.basename(file);
  const content = fs.readFileSync(file, 'utf8');
  
  standardCss += /* ---  --- */\n;
  standardCss += content + '\n\n';
  
  elementorCss += /* ---  --- */\n;
  
  // Add !important before semicolons, excluding @import, --var declarations, etc.
  // This is a naive regex but matches what was likely done before.
  let elContent = content;
  // Replace simple css property declarations with !important
  elContent = elContent.replace(/([a-zA-Z-]+)\s*:\s*([^;{}]+?)\s*;/g, (match, prop, val) => {
    // Don't add if it already has !important, or if it's a CSS variable (--...)
    if (val.includes('!important') || prop.startsWith('--')) {
      return match;
    }
    return ${prop}:  !important;;
  });
  
  elementorCss += elContent + '\n\n';
}

fs.writeFileSync(path.join(outDir, 'WordPress-Standard-Guide.css'), standardCss);
fs.writeFileSync(path.join(outDir, 'WordPress-Elementor-Guide.css'), elementorCss);

console.log('CSS guides updated successfully.');
