import React from 'react';

const Infos = () => {
  return (
    <div className="w-full flex p-4">
      <div className="flex flex-col md:flex-row items-center sm:items-center md:items-stretch gap-2 md:gap-0 w-full">
        <div className='md:w-1/2'>
        <img src={process.env.PUBLIC_URL + "/photoP2.jpg"} alt="Profile" className="w-40 h-40 xl:w-full xl:h-full object-cover object-top xl:object-center" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h1 className="font-bold text-center text-md md:text-2xl">
            <span>NIMA </span>
            <span>GHASHGHAEI</span>
          </h1>
          <div className="flex flex-col gap-4 items-center flex-grow p-4 md:p-0">
            <div className="w-full h-1 bg-black"></div>
            <p className="text-justify ml-4 text-xs md:text-xs xl:text-md">
            Je m'appelle Nima GHASHGHAEI, et je suis vidéaste passionné. Fort d'une formation spécialisée dans le domaine du documentaire, j'ai eu la chance de travailler sur une grande variété de projets et de toucher à différents genres cinématographiques. Mon parcours m'a permis d'explorer des domaines aussi divers que le film institutionnel, les teasers, le film documentaire, et même la fiction.  Ce qui m'anime avant tout, c'est la passion pour la vidéo et la création visuelle. Chaque projet est une nouvelle aventure où je m'engage pleinement pour garantir un résultat à la hauteur de vos attentes. Que vous ayez besoin d'un film institutionnel pour valoriser votre entreprise, d'un teaser percutant pour promouvoir un événement. Mon objectif est de donner vie à vos idées, de capturer et de transmettre l'émotion à travers l'image. Avec un œil attentif pour les détails et un engagement sans faille, je vous propose des réalisations de qualité qui sauront marquer les esprits.
Merci de votre visite et au plaisir de collaborer sur vos futurs projets vidéo !
            </p>
            <div className="mt-auto mb-4">
              <button className="bg-black text-white rounded-3xl w-20 h-6 text-sm xl:text-base xl:w-40 xl:h-10">Mon CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
