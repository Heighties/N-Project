import React, { useState, useEffect } from "react";
import ShowreelModal from "../../Modals/ShowreelModal/ShowreelModal";

const Showreel = () => {
  const [buttonOpacity, setButtonOpacity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonOpacity(0.2);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setButtonOpacity(1);
  };

  const handleMouseLeave = () => {
    setButtonOpacity(0.2);
  };

  const handleButtonClick = () => {
    console.log("Button clicked"); // Vérifie si le bouton est correctement cliqué
    openModal();
  };

  console.log("showModal:", showModal); // Vérifie si showModal est mis à jour correctement

  return (
    <div className="relative bg-slate-200 w-screen min-h-screen">
      <video
        className="w-screen h-screen object-cover"
        src="/showreel.mp4"
        muted
        loop
        autoPlay
      />
      <div className="absolute inset-0 flex items-center justify-center pt-60">
        <button
          className="bg-black bg-opacity-50 text-white font-semibold border border-white px-6 py-3 transition-opacity duration-500"
          style={{ opacity: buttonOpacity }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleButtonClick} // Utilise handleButtonClick pour ouvrir la modal
        >
          Showreel
        </button>
      </div>
      {showModal && <ShowreelModal isOpen={showModal} onRequestClose={closeModal} />}
    </div>
  );
};

export default Showreel;
