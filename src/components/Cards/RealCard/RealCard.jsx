import React from 'react';

const RealCard = ({ realisation, openModal }) => {
  return (
    <div className="cursor-pointer w-32 h-32 md:w-20 md:h-20 xl:w-44 xl:h-44 flex flex-col mb-4" onClick={() => openModal(realisation)}>
      <img src={process.env.PUBLIC_URL + realisation.image} alt={realisation.title} className="min-w-full min-h-full object-over rounded-sm border-l-2 border-black" />
      <h2 className="xl:text-xl border-l-2 border-black pl-2 xl:pl-4">{realisation.title}</h2>
    </div>
  );
};

export default RealCard;
