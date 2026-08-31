const fs = require('fs');
let wtl = fs.readFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/WeTeachLife.jsx', 'utf8');

wtl = wtl.replace('./images/DSC_0200.jpeg', './WEBSITE GALLERY/AHWS Baby Show (02-10-2024)/DSC_0200.jpeg');
wtl = wtl.replace('./images/WhatsApp Image 2025-09-28 at 1.50.55 PM.jpeg', './WEBSITE GALLERY/RWA Health Check-up Camp (28-09-2025)/WhatsApp Image 2025-09-28 at 1.50.55 PM.jpeg');
wtl = wtl.replace('./images/DSC_0257.jpeg', './WEBSITE GALLERY/AHWS Baby Show (02-10-2024)/DSC_0257.jpeg');
wtl = wtl.replace('./images/IMG_20251104_083911.jpeg', './WEBSITE GALLERY/Gurupurab Celebration (04-11-2025)/IMG_20251104_083911.jpeg');
wtl = wtl.replace('./images/Technology_and_App_010.jpg', './WEBSITE GALLERY/other images/Technology_and_App_010.jpg');
wtl = wtl.replace('./images/kid making art 02.png', './WEBSITE GALLERY/other images/kid making art 02.png');
wtl = wtl.replace('./images/IMG_1062.jpeg', './WEBSITE GALLERY/Dental Check-up Drive (13-05-2026)/IMG_1062.jpeg');
wtl = wtl.replace('./images/IMG_20260217_101527.jpeg', './WEBSITE GALLERY/Sports Day (17-02-2026)/IMG_20260217_101527.jpeg');

fs.writeFileSync('D:/ayush bansal/WEBSITE/01_WEBSITE_SOURCE/src/pages/WeTeachLife.jsx', wtl);
console.log('Fixed WeTeachLife image paths');
