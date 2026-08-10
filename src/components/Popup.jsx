import './Popup.css'

export default function Popup({ isOpen, onClose, title, message, buttonText = "Close" }) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content animate-pop" onClick={e => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>&times;</button>
        <div className="popup-icon">✅</div>
        <h3 className="popup-title">{title}</h3>
        <p className="popup-message">{message}</p>
        <button className="btn-primary-ahws popup-btn" onClick={onClose}>{buttonText}</button>
      </div>
    </div>
  )
}
