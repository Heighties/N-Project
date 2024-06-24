import React from 'react';

const RealCard = ({ realisation, openModal }) => {
  return (
    <div className="cursor-pointer w-44 h-44 flex flex-col mb-6" onClick={() => openModal(realisation)}>
      <img src={realisation.image} alt={realisation.title} className="w-full h-full object-cover rounded-sm border-l-2 border-black" />
      <h2 className="text-xl border-l-2 border-black pl-4">{realisation.title}</h2>
    </div>
  );
};

export default RealCard;
