import React from "react";

const MobileMenu = ({ scrollToSection, setMobileMenuOpen }) => {
  const handleSectionClick = (section) => {
    scrollToSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center z-50">
      <button className="text-3xl my-4" onClick={() => handleSectionClick("showreel")}>Showreel</button>
      <button className="text-3xl my-4" onClick={() => handleSectionClick("infos")}>Infos</button>
      <button className="text-3xl my-4" onClick={() => handleSectionClick("realisations")}>Réalisations</button>
      <button className="text-3xl my-4" onClick={() => handleSectionClick("contact")}>Contact</button>
    </div>
  );
};

export default MobileMenu;
