import React, { useRef } from 'react'; // Importer useRef depuis React
import ReactModal from 'react-modal';
import { FaTimes } from 'react-icons/fa'; // Importer l'icône de la croix depuis react-icons/fa

const ShowreelModal = ({ isOpen, onRequestClose }) => {
  const videoRef = useRef(null); // Utiliser useRef pour accéder à l'élément vidéo

  const handleCloseModal = () => {
    onRequestClose(); // Appeler onRequestClose pour fermer la modal
  };

  const handleVideoEnded = () => {
    handleCloseModal(); // Appeler handleCloseModal lorsque la vidéo est terminée
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Showreel Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fond noir semi-transparent
          zIndex: 9999 // Valeur de z-index élevée pour s'assurer que la modal s'affiche au-dessus de la vidéo
        },
        content: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: 'auto', // Centrer la modal
          border: 'none', 
          borderRadius: '8px',
          maxWidth: '100%',
          maxHeight: '100%',
          overflow: 'auto',
        }
      }}
    >
      {/* Croix pour fermer la modal */}
      <button className="absolute top-4 right-4 text-white" onClick={handleCloseModal}>
        <FaTimes />
      </button>

      {/* Vidéo */}
      <video
        ref={videoRef} // Attribuer la référence videoRef à l'élément vidéo
        src="/showreel.mp4"
        autoPlay
        controls // Affiche les contrôles vidéo
        controlsList="nodownload" // Empêcher le téléchargement de la vidéo
        className="w-full h-full"
        onEnded={handleVideoEnded} // Appeler handleVideoEnded lorsque la vidéo est terminée
      />
    </ReactModal>
  );
};

export default ShowreelModal;
