import React from 'react';
import { FaVimeo, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="flex flex-col gap-2 xl:gap-0 justify-center items-center xl:w-full xl:h-full">
      <h2 className="font-bold text-black text-xl xl:text-4xl">Me contacter</h2>
      <div className="xl:p-8 rounded-lg xl:w-[80%]">
        
        {/* Formulaire de contact */}
        <form className='flex flex-col items-center'>
          <div className='flex items-center lg:items-center md:items-stretch flex-col md:flex-row w-full md:gap-4 xl:gap-24'>
            <div className='flex flex-col w-3/4 md:w-1/2  xl:gap-2'>
              <div className='flex flex-row gap-4'>
                <div className="md:w-1/2">
                  <label htmlFor="firstName" className="block text-black font-semibold mb-1">Prénom</label>
                  <input type="text" id="firstName" name="firstName" className="w-full border border-gray-300 rounded-md py-2 md:py-0 lg:py-2 px-3" />
                </div>
                <div className="md:w-1/2">
                  <label htmlFor="lastName" className="block text-black font-semibold mb-1">Nom</label>
                  <input type="text" id="lastName" name="lastName" className="w-full border border-gray-300 rounded-md py-2 md:py-0 lg:py-2 px-3" />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block text-black font-semibold mb-1">E-mail</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 md:py-0 lg:py-2 px-3" />
              </div>
              <div className="w-full">
                <label htmlFor="subject" className="block text-black font-semibold mb-1">Objet</label>
                <input type="text" id="subject" name="subject" className="w-full border border-gray-300 rounded-md py-2 md:py-0 lg:py-2 px-3" />
              </div>
            </div>
            <div className="w-3/4 md:w-1/2 h-32 xl:h-[198px]">
              <label htmlFor="message" className="block text-black font-semibold mb-1">Votre message</label>
              <textarea id="message" name="message" className="w-full h-full border border-gray-300 rounded-md resize-none" rows="10"></textarea>
            </div>
          </div>
          <button type="submit" className="bg-black text-white border-2 border-white font-bold py-2 px-4 mt-10 md:w-1/6 rounded-full">Envoyer</button>
        </form>
      </div>
      <div className="flex flex-row mt-2 xl:mt-4">
            <FaVimeo className=" mr-4 xl:size-10" />
            <FaTwitter className=" mr-4 xl:size-10" />
            <FaInstagram className=" mr-4 xl:size-10" />
            <FaLinkedin className=" mr-4 xl:size-10" />
            <FaYoutube className="xl:size-10" />
          </div>
    </div>
  )
}

export default Contact;

