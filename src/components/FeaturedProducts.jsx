import React from 'react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { featuredProducts } from '../assets/FeaturedData.js'


const FeaturedProducts = () => {
  return (
    <section className='w-full max-w-[1140px] mx-auto px-10'>
      <div className='flex justify-center mt-12'>
        <span className='text-3xl text-gray-700 font-medium'>Featured Products</span>
      </div>
      <div className='bg-orange-500 h-0.5 w-[130px] m-auto mt-2'></div>

      <div className='mt-9 flex justify-around flex-wrap gap-6'>
        {featuredProducts.map((item, index) => (
          <div
            key={index}
            className='h-[300px] relative max-w-[260px] cursor-pointer overflow-hidden  group'
          >
            {/* Image */}
            <img src={item.imgSrc} alt='' className='w-full h-auto object-cover' />

            {/* Text — always visible, moves up on hover */}
            <div
              className='mb-4 absolute bottom-4 left-4 right-4 bg-opacity-80 p-2 rounded transform transition-transform duration-300 group-hover:-translate-y-2'
            >
              <span className='text-xl font-bold text-white'>{item.name}</span>
              <p className='text-sm font-semibold text-white mb-2'>{item.about}</p>
              <button className='flex items-center gap-4 bg-orange-600 text-white font-semibold text-md rounded-md px-2 py-2 cursor-pointer'>Buy now <FaArrowUpRightFromSquare /></button>
            </div>
             
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
