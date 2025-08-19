import React from "react";

const Footer = () => {
  return (
    <>
      {/* Top Footer */}
      <section className="max-w-[1140px] mx-auto mt-20 px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-6">
          
          {/* Logo + Description */}
          <div className="max-w-[400px] text-center md:text-left">
            <img src="/myLogo.svg" alt="Logo" className="mx-auto md:mx-0" />
            <p className="mt-3 text-gray-500 text-sm sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-md font-semibold mb-2">Company</span>
            <a className="text-gray-500 hover:text-gray-700" href="">Home</a>
            <a className="text-gray-500 hover:text-gray-700" href="">About us</a>
            <a className="text-gray-500 hover:text-gray-700" href="">Contact us</a>
            <a className="text-gray-500 hover:text-gray-700" href="">Privacy policy</a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-md font-semibold mb-2">Get in touch</span>
            <span className="text-gray-500">+1-234-567-890</span>
            <span className="text-gray-500">contact@munibdev.dev</span>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <div className="mt-12 w-full px-6">
        <div className="h-0.5 bg-gray-300 w-full"></div>
        <div className="mt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center text-sm text-gray-500 gap-2">
          <span>Copyright 2025 © MunibStack.dev</span>
          <span>All Rights Reserved.</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
