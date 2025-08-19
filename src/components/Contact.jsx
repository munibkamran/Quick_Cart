import React from 'react'
import { FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
   <section className='max-w-[1140px] mx-auto'>
       <div className='flex flex-col gap-4 items-center mt-18'>
        <span className='text-gray-500 blo flex gap-2 font-bold text-3xl'>Contact <p className='text-orange-600'>Me</p></span>
        <div className='max-w-[sm] w-[380px]'><input className='hover:border-orange-600 transition-all text-gray-500 w-full px-3 py-3 border border-gray-300 rounded-l-md focus:outline-none' type="text" placeholder='Phone...'/></div>
        <div className='max-w-[sm] w-[380px]'><input className='hover:border-orange-600 transition-all text-gray-500 w-full px-3 py-3 border border-gray-300 rounded-l-md focus:outline-none' type="text" placeholder='enter name'/></div>
        <div className='max-w-[sm] w-[380px]'><input className='hover:border-orange-600 transition-all text-gray-500 w-full px-3 py-3 border border-gray-300 rounded-l-md focus:outline-none' type="text" placeholder='email'/></div>
        <div className='max-w-[sm] w-[380px]'><input className='hover:border-orange-600 transition-all text-gray-500 w-full px-3 py-3 border border-gray-300 rounded-l-md focus:outline-none' type="text" placeholder='enter city'/></div>
        <div className='max-w-[sm] w-[380px]'>
        <button className='text-white bg-orange-600 text-md font-medium border-0 w-full focus:outline-none cursor-pointer py-2 flex justify-center gap-3 items-center'>Submit<FaLocationArrow className=''/></button>
        </div>
       </div>
      </section>
  )
}

export default Contact
