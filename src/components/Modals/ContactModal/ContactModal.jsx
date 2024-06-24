import React from 'react';

const ContactModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="bg-black p-8 rounded-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Me contacter</h2>
        {/* Formulaire de contact */}
        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-white font-semibold mb-1">Prénom</label>
            <input type="text" id="firstName" name="firstName" className="w-full border border-gray-300 rounded-md py-2 px-3" />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-white font-semibold mb-1">Nom</label>
            <input type="text" id="lastName" name="lastName" className="w-full border border-gray-300 rounded-md py-2 px-3" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-semibold mb-1">E-mail</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3" />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-white font-semibold mb-1">Objet</label>
            <input type="text" id="subject" name="subject" className="w-full border border-gray-300 rounded-md py-2 px-3" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-semibold mb-1">Votre message</label>
            <textarea id="message" name="message" className="w-full border border-gray-300 rounded-md py-2 px-3" rows="5"></textarea>
          </div>
          <button type="submit" className="bg-white text-black font-bold rounded-md py-2 px-4">Envoyer</button>
        </form>
        {/* Bouton pour fermer la modal */}
        <button className="mt-4 bg-white text-black font-bold py-2 px-4 rounded" onClick={closeModal}>Fermer</button>
      </div>
    </div>
  );
};

export default ContactModal;
