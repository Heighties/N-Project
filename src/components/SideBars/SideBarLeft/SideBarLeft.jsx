import React from "react";

const SideBarLeft = ({ scrollToSection }) => {
  return (
    <div className="flex flex-col w-full h-full bg-black text-white items-center">
      <button
        onClick={() => scrollToSection("showreel")}
        className="w-2/4 mt-4 sticky top-4 z-10"
      >
        <img src="/logo-nima-blanc.png" alt="Logo" />
      </button>
    </div>
  );
};

export default SideBarLeft;
