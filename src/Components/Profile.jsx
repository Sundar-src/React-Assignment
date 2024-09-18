import React, { useState } from 'react';
import Separation from './Separation';
import Sidebar from './Sidebar';
const Profile = () => {
    const [active, setActive] = useState('About Me');
    
  
    const menuItems = ['About Me', 'Experiences', 'Recommended'];
  return (
  <>
   <div className="bg-[#363C43] h-[20vh] md:h-[25vh] lg:h-[30vh] xl:h-[40vh] max-w-[50vw] min-w-[384px]  rounded-xl lg:rounded-[26px]  py-4 shadow-[3px_3px_3px_4px_black]">
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col items-center justify-center -ml-4'>
        <nav className="bg-[#171717] w-[90%] min-w-[350px] rounded-lg lg:rounded-2xl">
          <ul className="flex  gap-[10px] text-[#969696] p-1">
            {menuItems.map((item) => (
              <div key={item} className="z-10 flex-grow">
                <li 
                  onClick={() => setActive(item)}
                  className={`relative  px-[1rem] py-[0.75rem]  text-center content-center  border-0 cursor-pointer rounded-lg lg:rounded-2xl text-[12px] lg:text-[18px] font-body font-medium leading-[16.12px] overflow-hidden transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-lg before:lg:rounded-2xl before:origin-top-left before:scale-x-0 before:bg-gradient-to-l from-gray-700  before:transition-transform before:duration-500 before:content-[''] before:hover:scale-x-100
                    ${active === item ? '  bg-[#363C43] text-[#FFFFFF] shadow-[5px_26px_71px_18px_black] ' : ''}`}
                >
                  {item}
                  
                </li>
              </div>
            ))}
          </ul>
        </nav>
        <div className='w-[90%] min-w-[350px]'>
          <p className=" mt-8 text-[#969696] font-jakarta text-[10px] md:text-[14px] lg:text-[18px] font-normal">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            <br />
            <br />
            I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
          </p>
        </div>
        </div>
        </div>
      </div>
      <Separation />
  </>
  )

}

export default Profile;


