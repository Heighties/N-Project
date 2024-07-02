import React, { useState, useEffect } from "react";

const MobileMenu = ({ scrollToSection, setMobileMenuOpen }) => {
  const [animationState, setAnimationState] = useState('entering');

  useEffect(() => {
    if (animationState === 'exiting') {
      const timer = setTimeout(() => {
        setMobileMenuOpen(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animationState, setMobileMenuOpen]);

  const handleSectionClick = (section) => {
    setAnimationState('exiting');
    setTimeout(() => {
      scrollToSection(section);
    }, 500);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-20">
      <button className="text-3xl my-4" onClick={() => handleSectionClick("showreel")}>Showreel</button>
      <button className="text-3xl my-4" onClick={() => handleSectionClick("infos")}>Infos</button>
      <button className="text-3xl my-4" onClick={() => handleSectionClick("realisations")}>Réalisations</button>
      <button className="text-3xl my-4" onClick={() => handleSectionClick("contact")}>Contact</button>
    </div>
  );
};

export default MobileMenu;
