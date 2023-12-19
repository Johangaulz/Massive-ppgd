import React from "react";
import Adminsidebar from "../../Components/Admin/Adminsidebar";
import Layout from "../Layout";
import { Link } from "react-router-dom";

const Profileadmin = () => {
  return (
    <div>
      <Layout>
        <div className="flex flex-row justify-evenly">
          <Adminsidebar />

          <div className="w-4/6 flex flex-col items-center ">
            <div className="w-full  p-3">
              <h1 className="text-center text-2xl font-bold ">
                Welcome , Dwi Amelia !
              </h1>
            </div>

            <div className="w-full flex flex-col gap-3 ">
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="" className="text-lg font-semibold">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="border-2 w-full px-3 py-2 rounded-md"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="" className="text-lg font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  className="border-2 w-full px-3 py-2 rounded-md"
                />
              </div>
            </div>

            <div className="w-full flex justify-end py-5">
              <Link>
                <button className="bg-[#BB2525] px-3 py-2 rounded-md text-[#FFFFFF]">
                  Ubah Password
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Profileadmin;
