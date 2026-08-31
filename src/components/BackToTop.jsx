import { useState, useEffect } from 'react';
import './BackToTop.css';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down 300px from top
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={'back-to-top ' + (isVisible ? 'show' : '')}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
    >
      <span className="arrow-up">↑</span>
    </button>
  );
}
