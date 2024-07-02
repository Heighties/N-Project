import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import RealCard from '../Cards/RealCard/RealCard';
import RealisationModal from '../Modals/RealisationModal/RealisationModal';
import Select, { components } from 'react-select';

export const Carrousel = ({ items }) => {
  const [scrollLeftVisible, setScrollLeftVisible] = useState(false);
  const [scrollRightVisible, setScrollRightVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRealisation, setSelectedRealisation] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState({ value: 'Tout', label: 'Tout' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  const getItemsPerSlide = () => {
    if (window.innerWidth < 768) {
      return 4;
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1280) {
      return 6;
    }
    return 8;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide);

  const handleResize = () => {
    setItemsPerSlide(getItemsPerSlide());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      setScrollLeftVisible(container.scrollLeft > 0);
      setScrollRightVisible(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: -container.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: container.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const openModal = (realisation) => {
    setSelectedRealisation(realisation);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRealisation(null);
    setModalOpen(false);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  const getUniqueCategories = () => {
    const categories = items.map(item => item.category);
    const uniqueCategories = [...new Set(categories)];
    if (!uniqueCategories.includes('Tout')) {
      uniqueCategories.unshift('Tout');
    }
    return uniqueCategories.map(category => ({
      value: category,
      label: category,
      isDisabled: category === selectedCategory.value && category !== 'Tout'
    }));
  };

  const filteredItems = selectedCategory.value === 'Tout' 
    ? items 
    : items.filter(item => item.category === selectedCategory.value);

  const slides = [];
  for (let i = 0; i < filteredItems.length; i += itemsPerSlide) {
    slides.push(filteredItems.slice(i, i + itemsPerSlide));
  }

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <IoIosArrowDown color="white" />
      </components.DropdownIndicator>
    );
  };

  return (
    <div className="relative h-full w-full flex flex-col items-center border-black overflow-hidden">
      <div className="xl:w-full flex justify-center xl:mb-4">
        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          options={getUniqueCategories()}
          onMenuOpen={() => setIsMenuOpen(true)}
          onMenuClose={() => setIsMenuOpen(false)}
          components={{ DropdownIndicator }}
          isSearchable={false}
          styles={{
            control: (provided) => ({
              ...provided,
              backgroundColor: 'black',
              color: 'white',
              border: 'none',
              borderRadius: '0',
              textAlign: 'center',
              width: '120px',
              transition: 'border-radius 0.3s',
              boxShadow: 'none',
              cursor: 'pointer',
            }),
            indicatorSeparator: () => ({ display: 'none' }),
            singleValue: (provided) => ({
              ...provided,
              color: 'white',
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              transition: 'all 0.5s ease',
              transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0)',
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor: 'rgba(0, 0, 0, 1.1)',
              color: 'white',
              marginTop: '-1px',
              borderTopLeftRadius: '0',
              borderTopRightRadius: '0',
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
              overflow: 'hidden',
            }),
            menuList: (provided) => ({
              ...provided,
              padding: '0',
            }),
            option: (provided, state) => ({
              ...provided,
              cursor: 'pointer',
              backgroundColor: state.isFocused ? '#111827' : 'black',
              color: 'white',
              '&:hover': {
                backgroundColor: '#111827',
              },
            }),
            placeholder: (provided) => ({
              ...provided,
              color: 'white',
            }),
          }}
        />
      </div>
      
      <div className='min-h-full'>
      {scrollLeftVisible && (
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2  z-10 bg-black bg-opacity-35 rounded-md ml-2"
          onClick={scrollLeft}
        >
          <IoIosArrowBack size={32} />
        </button>
      )}
      {scrollRightVisible && (
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-4 z-10 bg-black bg-opacity-35 rounded-md"
          onClick={scrollRight}
        >
          <IoIosArrowForward size={32} />
        </button>
      )}
      <div
        ref={containerRef}
        className="flex overflow-x-auto hide-scrollbar overflow-hidden"
        onScroll={handleScroll}
      >
        <div className="flex flex-nowrap h-[22rem] md:h-[28rem] gap-4 p-4">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="flex-none w-full ml-2 xl:ml-0 grid gap-4 sm:gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"
            >
              {slide.map((item, index) => (
                <RealCard key={index} realisation={item} openModal={openModal} />
              ))}
            </div>
          ))}
        </div>
      </div>
      </div>
      <RealisationModal isOpen={modalOpen} closeModal={closeModal} realisation={selectedRealisation} />
    </div>
  );
};

export default Carrousel;
