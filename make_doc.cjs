const fs = require('fs');
const { execSync } = require('child_process');

const mdPath = 'D:\\ayush bansal\\WEBSITE\\02_HANDOVER_DOCS\\AHWS_SEO_Implementation_Guide.md';
const docxPath = 'D:\\ayush bansal\\WEBSITE\\02_HANDOVER_DOCS\\AHWS_SEO_Implementation_Guide.docx';

// Convert using PowerShell Word.Application COM Object
const psScript = 
\ = New-Object -ComObject Word.Application
\.Visible = \False
\ = \.Documents.Add()
\ = \.Selection
\ = Get-Content -Path "\" -Raw
\.TypeText(\)
\.SaveAs2("\", 16)
\.Close()
\.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject(\) | Out-Null
;

fs.writeFileSync('create_word.ps1', psScript);
try {
  execSync('powershell -ExecutionPolicy Bypass -File create_word.ps1');
  console.log('Successfully created Word Document');
} catch (e) {
  console.log('Error creating Word doc, falling back to markdown only: ', e.message);
}
