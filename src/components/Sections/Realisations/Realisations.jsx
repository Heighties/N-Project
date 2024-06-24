import React from 'react';
import { Carrousel } from '../../Carrousel/Carrousel';
import data from '../../../datas/data';

const Realisations = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-1/2 bg-black h-2 left-0 right-0 z-10"></div>
      <div className="flex flex-col items-center justify-center">
        <div className="items-center">
          <Carrousel items={data}/>
        </div>
      </div>
      <div className="w-1/2 bg-black h-2 bottom-16 self-end"></div>
    </div>
  );
};

export default Realisations;
