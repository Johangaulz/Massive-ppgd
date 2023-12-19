import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex flex-col items-center justify-center my-10">
        <p className="text-7xl font-extrabold text-center text-[#BB2525] mb-5 ">
          LiveSafer
        </p>
        <p className="text-4xl font-bold text-center mb-3">
          Selamat Datang di LiveSaver
        </p>
        <p className="text-xl font-bold text-center mb-3">
          Wibsite pertolongan gawat darurat
        </p>
        <p className="text-xl font-light text-center ">
          Masuk ke akun anda untuk dapat mengakses fitur lainnya
        </p>
      </div>
      <div className="w-full flex justify-center mb-20">
        <div className="w-3/4 h-96 bg-red-50 rounded-3xl flex flex-col justify-center items-center">
          <div className="flex flex-col py-2">
            <label>Email/Nomor Telepon</label>
            <input className="border p-2 px-32 rounded-2xl" type="text" />
          </div>
          <div className="flex flex-col py-2 rounded-2xl">
            <label>Kata Sandi</label>
            <input className="border p-2 px-32 rounded-2xl" type="text" />
          </div>
          <button className="border my-5 py-2 px-10 rounded-2xl bg-red-600 text-[#fff]">
            <Link to="/profileadmin"> Masuk</Link>
          </button>
          <p className="text-center">Lupa kata sandi?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
