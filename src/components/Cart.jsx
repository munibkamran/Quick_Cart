import React from 'react'
import { Link } from 'react-router-dom';
const Cart = ({ cart, setCart }) => {
  return (
    <>
      <section className="mx-auto max-w-[1140px] px-4 sm:px-10">
        {cart.length === 0 ? (
          <div className="text-center mt-10">
            <span className="block text-2xl text-gray-400 mb-4">Product is Empty...</span>
            <Link to={'/'} className="bg-orange-500 text-white px-6 py-2 rounded">
              Continue Shopping..
            </Link>
          </div>
        ) : (
          cart.map((product) => {
            return (
              <section key={product.id} className="mx-auto max-w-[1140px]">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-14 items-center sm:items-start justify-center">
                  
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
  src={product.imgSrc}
  alt={product.name}
  className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 object-cover rounded-md"
/>

                  </div>

                  {/* Product Info */}
                  <div className="flex flex-col items-center sm:items-start justify-center text-center sm:text-left">
                    <span className="text-gray-700 text-xl sm:text-2xl font-bold">{product.name}</span>
                    <span className="text-gray-400 text-sm sm:text-base">{product.description}</span>
                  </div>

                  {/* Buy Button */}
                  <div className="mt-4 sm:mt-0">
                    <button className="cursor-pointer bg-orange-500 text-white font-medium px-6 sm:px-10 py-2 sm:py-3 rounded">
                      Buy now
                    </button>
                  </div>
                </div>
              </section>
            );
          })
        )}
      </section>
    </>
  );
};

export default Cart;
