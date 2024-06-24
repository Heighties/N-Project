import React, { useEffect } from 'react';

const RealisationModal = ({ isOpen, closeModal, realisation }) => {
    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (!isOpen) return;
          if (!event.target.closest('.modal-content')) {
            closeModal();
          }
        };
    
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, [isOpen, closeModal]);
    
      if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black bg-opacity-80 p-8 rounded-sm w-screen max-w-screen-xl">
          <video controls className="w-full">
            <source src={process.env.PUBLIC_URL+ realisation.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 className="mt-4 text-white text-xl font-bold">{realisation.title}</h2>
          <p className="mt-2 text-white">{realisation.description}</p>
          <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default RealisationModal;
