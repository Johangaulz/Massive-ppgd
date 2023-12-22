import React from "react";
import Img1 from "../assets/Img/edukasi/1.png";

const Sertifikasi = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex flex-col items-center justify-center my-10 ">
        <div
          className="w-10/12 h-96 bg-no-repeat flex justify-center items-center"
          style={{
            backgroundImage: `url(${Img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p>Pelatihan dan Sertifikasi</p>
        </div>
        <div className="grid grid-cols-2 w-5/6 mx-auto gap-5 mt-4">
          {/* Card 1 */}
          <div className="border shadow-lg rounded-lg p-3 flex flex-col ">
            <div className="w-full flex mb-4">
              <img
                src="src/assets/img/Sertifikasi/zoom.jpg"
                alt="zoom"
                className="w-1/2"
              />

              <div className="mx-3 px-3 text-3xl gap-10 ">
                <p>Pelatihan Dasar CPR</p>
              </div>
            </div>
            {/* #Jadwal */}
            <div className="">
              <p className="text-gray-600">Jadwal Pertemuan</p>
              <p className="font-bold mb-3">15 Januari 2024 - 28 Maret 2024</p>
              <button class="bg-[#F22A2A] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                <a href="https://forms.gle/tgY8CRoZZ9dsuaa6A">
                  Daftar Pelatihan
                </a>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border shadow-lg rounded-lg p-3 flex flex-col ">
            <div className="w-full flex mb-4">
              <img
                src="src/assets/img/Sertifikasi/ppgd.jpg"
                alt="ppgd"
                className="w-1/3"
              />

              <div className="mx-3 px-3 text-3xl gap-10 ">
                <p>
                  Emergency First Respond / Pelatihan Tanggap Darurat Pertama
                </p>
              </div>
            </div>
            {/* #Jadwal */}
            <div className="">
              <p className="text-gray-600">Jadwal Pertemuan</p>
              <p className="font-bold mb-3">20 Januari 2024 - 10 Maret 2024</p>
              <button class="bg-[#F22A2A] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                Daftar Pelatihan
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border shadow-lg rounded-lg p-3 flex flex-col ">
            <div className="w-full flex mb-4">
              <img
                src="src/assets/img/Sertifikasi/zoom.jpg"
                alt="zoom"
                className="w-1/2"
              />

              <div className="mx-3 px-3 text-3xl gap-10 ">
                <p> PELATIHAN PERTOLONGAN PERTAMA PADA KECELAKAAN (P3K)</p>
              </div>
            </div>
            {/* #Jadwal */}
            <div className="">
              <p className="text-gray-600">Jadwal Pertemuan</p>
              <p className="font-bold mb-3">
                15 November 2023 - 28 November 2023
              </p>
              <button class="bg-[#F22A2A] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                Daftar Pelatihan
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="border shadow-lg rounded-lg p-3 flex flex-col ">
            <div className="w-full flex mb-4">
              <img
                src="src/assets/img/Sertifikasi/ppgd.jpg"
                alt="ppgd"
                className="w-1/4"
              />

              <div className="mx-3 px-3 text-3xl gap-10 ">
                <p> Basic Life Support </p>
              </div>
            </div>
            {/* #Jadwal */}
            <div className="">
              <p className="text-gray-600">Jadwal Pertemuan</p>
              <p className="font-bold mb-3">15 Maret 2024 - 28 Juni 2023</p>
              <button class="bg-[#F22A2A] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                Daftar Pelatihan
              </button>
            </div>
          </div>
          {/* End Card 4 */}
        </div>
      </div>
    </div>
  );
};

export default Sertifikasi;
