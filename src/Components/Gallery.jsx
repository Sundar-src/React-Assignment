
import React, { useState, useRef } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import img from '../assets/Gallery-img.jpeg'; 
import Separation from './Separation';


const Gallery = () => {
  const [images, setImages] = useState([img, img, img]);
  const scrollContainerRef = useRef(null);

  const handleAddImage = () => {
    setImages([...images, img]); 
  };
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <>
      <div className="bg-[#363C43] h-[20vh] md:h-[25vh] lg:h-[30vh] xl:h-[40vh] max-w-[50vw] min-w-[384px]  rounded-xl lg:rounded-3xl  py-4 overflow-y-hidden flex flex-col items-center justify-center shadow-[3px_3px_3px_4px_black]">
        
         
        <nav className="flex justify-between w-[90%]">
          <div className="">
            <h1 className="lg:w-[149px] w-[110px]  h-[50px] lg:h-[62px] rounded-2xl lg:rounded-3xl bg-[#171717] text-white text-[16px] lg:text-[20px] content-center text-center font-body font-medium">Gallery</h1>
          </div>
          <div className="flex gap-4 ">
            <button
              className="flex justify-center items-center rounded-[100px] h-[45px]  w-[100px] lg:w-[130px]  text-[10px] lg:text-[12px] text-white font-body font-medium shadow-[5px_8px_7px_3px_#1b1e22,inset_1px_2px_2px_#8d9197]" 
              onClick={handleAddImage} 
            >
              <AiOutlinePlus /> ADD IMAGE
            </button>
            <button className="w-[45px] h-[45px] text-2xl text-gray-600 bg-[#1b1e22] hover:bg-black rounded-full flex items-center justify-center shadow-[0_0_20px_3px_#5b8194]" onClick={scrollLeft}>
              <IoArrowBack />
            </button>
            <button className="w-[45px] h-[45px] text-2xl text-gray-600 bg-[#1b1e22] hover:bg-black rounded-full flex items-center justify-center shadow-[0_0_20px_3px_#5b8194]" onClick={scrollRight}>
              <IoArrowForward />
            </button>
          </div>
        </nav>
        <div ref={scrollContainerRef} 
        className=" w-[90%] flex overflow-hidden gap-6 overflow-x-scroll no-scrollbar px-4 pb-4" style={{overflowX: 'scroll',scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`img-${index + 1}`} 
              className=" w-[30%] flex-none lg:rounded-[24px] rounded-[20px] mt-6 grayscale hover:grayscale-0 transition ease-in hover:-translate-y-1 hover:scale-110 hover:rotate-[-2deg] delay-100 transform-origin-bottom-left hover:shadow-[2px_6px_4px_3px_rgb(33,37,43)]" 
            />
          ))}
        </div>
        </div>
        
      <Separation />
    </>
  );
};

export default Gallery;
