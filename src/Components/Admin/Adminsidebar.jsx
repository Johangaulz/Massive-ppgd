import React from "react";
import { Link } from "react-router-dom";

const Adminsidebar = () => {
  return (
    <div className="shadow-md flex flex-col w-1/6 h-fit rounded-3xl">
      <div className="p-3 border-b border-blue-700 text-[#848484]">
        Navigasi Profil
      </div>
      <Link to="#">
        <div className="p-3 border-b border-blue-700 text-[#848484] hover:bg-[#BB2525] duration-300">
          Profil
        </div>
      </Link>
      <Link to="#">
        <div className="p-3 border-b border-blue-700 text-[#848484] hover:bg-[#BB2525] duration-300">
          Sertifikasi
        </div>
      </Link>
      <Link to="#">
        <div className="p-3  text-[#848484] hover:bg-[#BB2525] duration-300 rounded-b-3xl">
          Tambah Rumah Sakit
        </div>
      </Link>
    </div>
  );
};

export default Adminsidebar;
