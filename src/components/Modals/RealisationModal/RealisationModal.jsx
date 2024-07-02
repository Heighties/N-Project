import React, { useEffect } from 'react';

const RealisationModal = ({ isOpen, closeModal, realisation }) => {
    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (!isOpen) return;
          if (!event.target.closest('.modal-content')) {
            closeModal();
          }
        };
    
      }, [isOpen, closeModal]);
    
      if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black bg-opacity-80 p-8 rounded-sm min-w-full min-h-screen flex flex-col items-center">
          <video controls className="w-full md:w-1/2">
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
