import { useState, useEffect } from 'react';

const useScrollPosition = ({ threshold }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      const scrolled = currentScrollY > threshold;

      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    // Check initial position on mount
    updateScrollPosition();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isScrolled, threshold]); // Add dependencies

  return isScrolled;
};

export default useScrollPosition;