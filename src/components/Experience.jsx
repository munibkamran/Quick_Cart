import React from 'react'
import img1 from '../assets/jbl_soundbox_image.png'
import img2 from '../assets/md_controller_image.png';
import { FaArrowRightLong } from "react-icons/fa6";

const Experience = () => {
  return (
    <section className='w-full max-w-[1200px] mx-auto mt-12 px-4'>
      <div className='flex flex-col md:flex-row justify-between items-center bg-gray-200 rounded-lg p-6 gap-6'>
        
        {/* Left Image */}
        <div className='flex justify-center'>
          <img 
            src={img1} 
            alt="Soundbox" 
            className='h-[200px] w-[180px] sm:h-[240px] sm:w-[220px] md:h-[260px] md:w-[240px] object-contain'
          />
        </div>

        {/* Middle Text */}
        <div className='text-center md:text-left flex-1'>
          <span className='block text-gray-700 font-bold text-2xl sm:text-3xl md:text-4xl leading-snug'>
            Level Up Your <br /> Gaming Experience
          </span>
          <p className='text-gray-500 font-medium text-sm sm:text-base mt-2'>
            From immersive sound to precise controls — <br className='hidden sm:block' /> 
            everything you need to win
          </p>
          <button className='bg-orange-600 group flex mx-auto md:mx-0 mt-4 items-center gap-3 text-white px-6 sm:px-8 font-medium rounded-md py-2 hover:bg-orange-700 transition'>
            Buy now 
            <span className="transform transition-transform duration-200 group-hover:translate-x-1">
              <FaArrowRightLong />
            </span>
          </button>  
        </div>

        {/* Right Image */}
        <div className='flex justify-center'>
          <img 
            src={img2} 
            alt="Controller" 
            className='h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] md:h-[280px] md:w-[280px] object-contain'
          />
        </div>
      </div>
    </section>
  )
}

export default Experience
