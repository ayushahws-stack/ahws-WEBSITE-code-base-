import './WhatsAppWidget.css';

export default function WhatsAppWidget() {
  const phoneNumber = "918860455000";
  const message = "Hello Academic Heights World School, I would like to inquire about admission for my child.";
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-widget"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <div className="whatsapp-icon-wrapper">
        <svg viewBox="0 0 32 32" className="whatsapp-icon" fill="currentColor">
          <path d="M16.03 1.25C7.9 1.25 1.3 7.82 1.3 15.93c0 2.6.68 5.14 1.97 7.4L1.25 30.7l7.55-1.97c2.18 1.18 4.6 1.8 7.23 1.8 8.13 0 14.73-6.57 14.73-14.7S24.16 1.25 16.03 1.25zM16.03 27.9c-2.2 0-4.36-.6-6.26-1.72l-.45-.27-4.66 1.22 1.25-4.52-.28-.46c-1.22-1.96-1.87-4.24-1.87-6.57 0-6.73 5.48-12.22 12.27-12.22 6.75 0 12.25 5.5 12.25 12.22S22.8 27.9 16.03 27.9zm6.73-9.15c-.37-.18-2.18-1.07-2.52-1.2-.34-.12-.58-.18-.83.18-.25.37-.95 1.2-1.16 1.44-.22.25-.43.27-.8.1-1.77-.85-3.13-2.13-4.36-4.04-.33-.5-.03-.78.15-.96.16-.16.37-.43.55-.65.18-.22.25-.37.37-.6.12-.25.06-.46-.03-.65-.1-.18-.83-1.98-1.13-2.7-.3-.7-.6-.62-.83-.63l-.7-.01c-.25 0-.64.1-.98.46-.34.37-1.3 1.26-1.3 3.06s1.33 3.56 1.5 3.8c.18.25 2.58 3.93 6.25 5.52.88.37 1.56.6 2.1.77.88.28 1.68.24 2.3.15.7-.1 2.18-.88 2.5-1.74.3-86 .3-1.6.22-1.74-.08-.15-.3-.24-.67-.43z"/>
        </svg>
      </div>
      <div className="whatsapp-tooltip">Chat with us</div>
    </a>
  );
}
