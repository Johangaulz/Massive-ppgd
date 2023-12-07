import React from "react";
import { FaFirstAid } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-80 bg-red-600 flex justify-around py-20">
      <div className="flex flex-col justify-between h-full">
        <p className="text-3xl font-black">LifeSaver</p>
        <div>
          <p>Jl. Brojokusumo</p>
          <p>Jl. Brojokusumo</p>
          <p>Jl. Brojokusumo</p>
        </div>
        <p>Copyrights © 2023 </p>
      </div>
      <div className="flex flex-col justify-between h-full">
        <p>tentang ppgd</p>
        <div>
          <p>tentang ppgd</p>
          <p>tentang ppgd</p>
          <p>tentang ppgd</p>
          <p>tentang ppgd</p>
          <p>tentang ppgd</p>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <p>tentang ppgd</p>
        <div>
          <p>tentang ppgd</p>
          <p>tentang ppgd</p>
          <p>tentang ppgd</p>
          <p>tentang ppgd</p>
          <p>tentang ppgd</p>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <FaFirstAid />
        <p>ig</p>
        <p>ig</p>
      </div>
    </div>
  );
};

export default Footer;
