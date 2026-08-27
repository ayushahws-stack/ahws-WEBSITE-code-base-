$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open("D:\ayush bansal\WEBSITE\01_WEBSITE_SOURCE\public\AHWS_Admission_Application_Form.html")

# Save as DOCX
$doc.SaveAs([ref]"D:\ayush bansal\WEBSITE\01_WEBSITE_SOURCE\public\AHWS_Admission_Application_Form.docx", [ref]16)

# Save as PDF
$doc.SaveAs([ref]"D:\ayush bansal\WEBSITE\01_WEBSITE_SOURCE\public\AHWS_Admission_Application_Form.pdf", [ref]17)

$doc.Close()
$word.Quit()
