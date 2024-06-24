import React from "react";

export const NavBar = ({ scrollToSection, currentSection }) => {
  const linkClass = (section) =>
    currentSection === section ? "text-white" : "text-black";

  return (
    <div className={`flex flex-row justify-center items-center h-16 px-4 shadow-[rgba(0,0,0,0.3)_1px_1px_1px] bg-white bg-opacity-80 hide-on-mobile`}>
      <ul className="flex gap-40 hide-on-mobile">
        <li>
          <button className={`text-lg ${linkClass('infos')}`} onClick={() => scrollToSection("infos")}>
            Infos
          </button>
        </li>
        <li>
          <button className={`text-lg ${linkClass('realisations')}`} onClick={() => scrollToSection("realisations")}>
            Réalisations
          </button>
        </li>
        <li>
          <button className={`text-lg ${linkClass('contact')}`} onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
};
