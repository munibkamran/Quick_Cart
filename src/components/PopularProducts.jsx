import React from 'react'
import products from '../assets/data'
import { CiHeart } from "react-icons/ci";
import { LiaStarSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const PopularProducts = () => {

  return (
    <section className='w-full max-w-[1140px] mx-auto px-10 mt-20'>
      <span className='text-gray-600 font-medium text-2xl'>Popular Products.</span>
      <div className='bg-gray-700 h-0.5 w-52 mt-1'></div>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8 cursor-pointer'>
        {products.map((item, index) => (
          <Link to={`/product/${item.id}`} key={index} className='relative rounded-2xl mb-10'>
            {/* Heart Icon */}
            <div className='cursor-pointer flex justify-center items-center bg-white w-[30px] h-[30px] absolute right-2 top-2 rounded-full'>
              <CiHeart className='size-4 text-gray-500 stroke-[1]'/>
            </div>

            {/* Image */}
            <div className='bg-gray-100 rounded-xl'>
              <img src={item.imgSrc} alt="" className='transition duration-200 hover:scale-105' />
            </div>

            {/* Product Details */}
            <p className='text-gray-700 font-medium mt-3'>{item.name}</p>
            <span className='w-40 inline-block text-gray-400 text-[13px] truncate whitespace-nowrap overflow-hidden'>
              {item.description}
            </span>
            <div className='flex gap-2'>
              <span className='text-gray-700 text-sm'>{item.rating}</span>
              <span className='flex items-center'>
                {[...Array(4)].map((_, index) => (
                  <LiaStarSolid key={index} className="text-orange-500 flex size-3.5" />
                ))}
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-800 font-medium'>{item.price}</span>
              <button className='cursor-pointer border border-gray-300 rounded-2xl px-1.5 text-gray-500 text-[14px]'>
                Buy now
              </button>
            </div>
          </Link>
        ))}
      </div>
       <div className='flex justify-center items-center mt-8 mb-8'>
           <button className='text-gray-500 font-normal border border-gray-300 px-12 py-2 hover:bg-gray-100 cursor-pointer transition-all rounded-sm  '>See more</button>
        </div>  
    </section>
  )
}

export default PopularProducts
