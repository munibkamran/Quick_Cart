// ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../assets/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from "react-toastify";


const ProductDetail = ({cart, setCart}) => {
const addToCart = (product) => {
  setCart((prevCart) => [...prevCart, product]); // array me push
  console.log("Updated Cart:", [...cart, product]);
  toast.info('item added', {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
};




  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const filterProduct = products.filter((product) => product.id == id);
    setProduct(filterProduct[0]);
  }, [id]);

  return (
    <>
         <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
 <section className="mx-auto max-w-[1140px] px-10">
 
      <div className="flex justify-around items-center py-10 gap-10 flex-wrap">
        {/* Image box */}
        <div className="bg-gray-100 flex justify-center items-center rounded-xl w-full max-w-sm aspect-square overflow-hidden">
          <img
            src={product?.imgSrc}
            alt={product?.name || "Product"}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Info box */}
       <div className="flex flex-col gap-3 w-full max-w-sm p-6 rounded-xl mx-auto sm:mx-0">
  <span className="text-gray-700 font-semibold text-3xl text-center sm:text-left">
    {product?.name}
  </span>

  <div className="flex items-center justify-center sm:justify-start gap-2 text-orange-600">
    {product?.icon && React.createElement(product.icon)}
    {product?.icon && React.createElement(product.icon)}
    {product?.icon && React.createElement(product.icon)}
    {product?.icon && React.createElement(product.icon)}
    <span className="text-gray-500 text-base">{product?.rating}</span>
  </div>

  <p className="text-gray-700 text-center sm:text-left">{product?.description}</p>

  <span className="text-2xl font-bold text-gray-700 text-center sm:text-left">
    {product?.price}
  </span>

  <hr className="text-gray-400" />

  <div className="gap-4 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start mt-2 w-full">
    {/* Add to Cart */}
    <button
      onClick={() => addToCart(product)}
      className="cursor-pointer bg-gray-100 text-gray-600 font-medium 
                 px-6 py-2 text-sm 
                 sm:px-8 sm:py-2.5 sm:text-base 
                 md:px-10 md:py-3 md:text-lg 
                 w-full sm:w-auto"
    >
      Add to Cart
    </button>

    {/* Buy Now */}
    <button
      className="cursor-pointer bg-orange-500 text-white font-medium 
                 px-6 py-2 text-sm 
                 sm:px-8 sm:py-2.5 sm:text-base 
                 md:px-10 md:py-3 md:text-lg 
                 w-full sm:w-auto"
    >
      Buy now
    </button>
  </div>
</div>

      </div>
    </section>
    </>
  );
};

export default ProductDetail;
