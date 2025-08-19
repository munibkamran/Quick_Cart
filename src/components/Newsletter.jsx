import React from "react";

const Newsletter = () => {
  return (
    <section className="mt-20 max-w-[1140px] mx-auto px-4">
      <div className="flex flex-col items-center gap-3 text-center">
        
        {/* Heading */}
        <span className="text-gray-700 font-bold text-2xl sm:text-3xl md:text-4xl">
          Subscribe now & get 20% off
        </span>
        
        {/* Subtext */}
        <p className="text-gray-500 text-sm sm:text-base max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row w-full max-w-2xl mt-6 gap-3 sm:gap-0">
          <input
            type="text"
            placeholder="Enter your email..."
            className="flex-1 px-3 py-3 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none text-sm sm:text-base"
          />
          <button className="bg-orange-600 text-white px-6 py-3 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-orange-700 transition">
            Submit
          </button>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
