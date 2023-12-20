import React from "react";
import { Link, NavLink } from "react-router-dom";

const Adminsidebar = () => {
  return (
    <div className="shadow-md flex flex-col w-1/6 h-fit rounded-3xl">
      <div className="p-3 border-b border-blue-700 text-[#848484]">
        Navigasi Profil
      </div>
      <NavLink
        to="/profileadmin"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active p-3 border-b border-blue-700 text-black bg-[#BB2525]/20"
            : "p-3 border-b border-blue-700 text-[#848484] hover:bg-[#BB2525]/20 duration-300"
        }
      >
        Profil
      </NavLink>

      <NavLink
        to="/adminsertifikasi"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active p-3 border-b border-blue-700 text-black bg-[#BB2525]/20"
            : "p-3 border-b border-blue-700 text-[#848484] hover:bg-[#BB2525]/20 duration-300"
        }
      >
        Sertifikasi
      </NavLink>
      <NavLink
        to="/adminrumahsakit"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active p-3 border-b border-blue-700 text-black bg-[#BB2525]/20 rounded-b-3xl "
            : "p-3 text-[#848484] hover:bg-[#BB2525]/20  duration-300 rounded-b-3xl"
        }
      >
        Rumah Sakit
      </NavLink>

      {/* <Link to="/">
        <div className="p-3 border-b border-blue-700 text-[#848484] hover:bg-[#BB2525] duration-300">
          Profil
        </div>
      </Link> */}
      {/* <Link to="/adminsertifikasi">
        <div className="p-3 border-b border-blue-700 text-[#848484] hover:bg-[#BB2525] duration-300">
          Sertifikasi
        </div>
      </Link>
      <Link to="/adminrumahsakit">
        <div className="p-3  text-[#848484] hover:bg-[#BB2525] duration-300 rounded-b-3xl">
          Tambah Rumah Sakit
        </div>
      </Link> */}
    </div>
  );
};

export default Adminsidebar;
