import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { TbMenu2, TbX } from "react-icons/tb";
import { useState } from "react";

export default function Navbar({ cart }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="max-w-[1140px] mx-auto py-1">
      <header className="md:h-[14vh] h-[9vh] py-3 shadow-md md:shadow-none relative z-50">
        <div className="flex justify-between items-center px-4">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl">
            <img src="/myLogo.svg" alt="Logo" className="h-10" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-12">
            <Link to="/" className="text-gray-600 font-medium hover:text-black">
              Home
            </Link>
            <Link
              to="/Allproduct"
              className="text-gray-600 font-medium hover:text-black"
            >
              Product
            </Link>
            <Link
              to="/Contact"
              className="text-gray-600 font-medium hover:text-black"
            >
              Contact
            </Link>
            <Link
              to="/About"
              className="text-gray-600 font-medium hover:text-black"
            >
              About
            </Link>
          </nav>

          {/* Cart (md aur upar screens par hi dikhayega) */}
          <Link
            to="/cart"
            className="hidden md:flex w-10 h-10 bg-gray-100 rounded-full justify-center items-center relative"
          >
            <FaShoppingCart className="cursor-pointer size-4" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex justify-center items-center">
              {cart.length}
            </span>
          </Link>

          {/* Mobile Cart + Toggle Button */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Cart */}
            <Link
              to="/cart"
              className="w-10 h-10 bg-gray-100 rounded-full justify-center items-center relative flex"
            >
              <FaShoppingCart className="cursor-pointer size-4" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex justify-center items-center">
                {cart.length}
              </span>
            </Link>

            {/* Mobile Toggle Button */}
            <button
              className="text-3xl text-zinc-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <TbX /> : <TbMenu2 />}
            </button>
          </div>
        </div>
      </header>

  {/* Overlay */}
<div
  className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
  onClick={() => setIsOpen(false)}
></div>

{/* Sidebar */}
<div
  className={`fixed top-0 left-0 h-full w-[70%] 
              bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 
              shadow-2xl z-50 transform transition-transform duration-500 
              ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
>
  {/* Close Button + Logo */}
  <div className="flex justify-between items-center p-5 border-b border-white/20">
    <span className="text-lg font-semibold text-white flex items-center gap-2">
      <img src="/myLogo.svg" alt="Logo" className="h-8 w-8" />
      MyShop
    </span>
    <TbX
      className="text-3xl cursor-pointer text-white hover:text-gray-200 transition"
      onClick={() => setIsOpen(false)}
    />
  </div>

  {/* Navigation Links */}
  <ul className="flex flex-col gap-5 p-6 text-white font-medium text-lg">
    <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-200 transition">
      Home
    </Link>
    <Link to="/Allproduct" onClick={() => setIsOpen(false)} className="hover:text-gray-200 transition">
      Product
    </Link>
    <Link to="/Contact" onClick={() => setIsOpen(false)} className="hover:text-gray-200 transition">
      Contact
    </Link>
    <Link to="/About" onClick={() => setIsOpen(false)} className="hover:text-gray-200 transition">
      About
    </Link>
  </ul>

  {/* Bottom CTA */}
  <div className="mt-auto p-6">
    <Link to="/Signin" onClick={() => setIsOpen(false)}>
      <button className="w-full py-3 rounded-xl bg-white text-orange-600 font-semibold shadow-md hover:bg-gray-100 transition">
        Sign In
      </button>
    </Link>
  </div>
</div>
    </section>
  );
}
