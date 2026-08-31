const fs = require('fs');
let css = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Admission.css', 'utf8');

const newGridCSS = 
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
}
.form-row-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
};

const mobileGridCSS = 
  .form-row { grid-template-columns: 1fr; }
  .form-row-3 { grid-template-columns: 1fr; };

css = css.replace(
  ".form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 20px;\n}",
  newGridCSS
);
css = css.replace(
  ".form-row { grid-template-columns: 1fr; }",
  mobileGridCSS
);

fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/Admission.css', css);
console.log('Fixed CSS Grids');
