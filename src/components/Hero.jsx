import React from 'react'
import Sony_Airbods from '../assets/sony_airbuds_image.png'
import { FaArrowRight } from "react-icons/fa6";
import { SiHelpdesk } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 md:px-10 mt-9">
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center shadow-2xl rounded-3xl overflow-hidden">
        
        {/* Sale Tag */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-bold text-sm sm:text-lg text-white bg-orange-400 
                     h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] 
                     rounded-full absolute right-2 top-2 sm:right-4 sm:top-4 
                     flex justify-center items-center shadow-lg"
        >
          Sale Now!
        </motion.div>

        {/* Image */}
        <div className="py-6 sm:py-8 flex justify-center">
          <img 
            src={Sony_Airbods} 
            alt="image_banner" 
            className="h-[200px] sm:h-[250px] md:h-[400px] object-contain"
          />
        </div>

        {/* Text + Buttons */}
        <div className="px-4 sm:px-8 md:px-12 py-6 text-center md:text-left flex flex-col gap-3">
          <p className="text-gray-500 text-sm sm:text-base md:text-xl">
            Best Deal Online on Airbod's
          </p>
          <span className="font-bold text-gray-700 text-2xl sm:text-3xl md:text-5xl leading-snug">
            SMART WEARABLE.
          </span>
          <hr className="border-gray-300 my-2 sm:my-3" />
          <span className="text-gray-500 font-normal text-base sm:text-lg">
            Up to 80% OFF
          </span>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4 w-full">
            {/* Shop Now */}
            <Link to={'/AllProduct'} className="w-full sm:w-auto py-3 flex justify-center items-center 
                               text-orange-400 border border-orange-400 rounded-3xl 
                               font-medium px-6 cursor-pointer 
                               hover:bg-orange-500 hover:text-white transition-all gap-2 
                               hover:translate-y-1">
              Shop Now <FaArrowRight className="text-orange-400" />
            </Link>

            {/* Help */}
            <button className="w-full sm:w-auto py-3 flex justify-center items-center 
                               text-orange-400 border border-orange-400 rounded-3xl 
                               font-medium px-6 cursor-pointer 
                               hover:bg-orange-500 hover:text-white transition-all gap-2 
                               hover:translate-y-1">
              Help <SiHelpdesk className="text-orange-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
