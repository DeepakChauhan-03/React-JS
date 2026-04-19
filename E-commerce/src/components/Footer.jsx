import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white  py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-15">
        
    
        <h1 className="text-xl font-semibold tracking-wide">
          Shopify
        </h1>

        <p className=" text-gray-400">
          © {new Date().getFullYear()} ShopVerse. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;