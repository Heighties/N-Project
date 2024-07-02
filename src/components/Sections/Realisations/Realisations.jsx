import React from 'react';
import { Carrousel } from '../../Carrousel/Carrousel';
import data from '../../../datas/data';

const Realisations = () => {
  return (
    <div className="relative flex flex-col justify-center gap-4 w-full min-h-screen xl:min-h-full">
      <div className="w-1/2 absolute top-28 md:top-6 xl:top-20 bg-black h-2 left-0 right-0 z-10"></div>
      <div className="flex flex-col min-h-full items-center justify-center">
        <div className="w-full h-full items-center">
          <Carrousel items={data}/>
        </div>
      </div>
      <div className="w-1/2 bg-black absolute h-2 bottom-16 self-end"></div>
    </div>
  );
};

export default Realisations;
