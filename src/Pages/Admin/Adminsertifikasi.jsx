import React from "react";
import Adminsidebar from "../../Components/Admin/Adminsidebar";
import Layout from "../Layout";

const Adminsertifikasi = () => {
  return (
    <div>
      <Layout>
        <div className="flex flex-row justify-evenly">
          <Adminsidebar />
          <div>
            <div className="relative overflow-x-auto">
              <div className="">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-5">
                  Tambah Kegiatan
                </button>
              </div>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-6">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Gambar Kegiatan
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Nama Sertifikasi
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Periode Pendaftaran
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1  */}
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src="src/assets/img/Sertifikasi/zoom.jpg"
                        className="w-12"
                        alt="Zoom"
                      ></img>
                      <p></p>
                    </th>
                    <td className="px-6 py-4 ">
                      <p>Advanced Cardiovascular Life Support / Pelatihan</p>
                      <p>Penyelamatan Jantung Lanjutan</p>
                    </td>
                    <td className="px-6 py-4">
                      15 Januari 2024 - 28 Maret 2024
                    </td>
                    <td className="px-6 py-4">
                      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                        Edit
                      </button>

                      <button class="bg-[#BB2525] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                        Delete
                      </button>
                    </td>
                  </tr>

                  {/* #Row 2 */}
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src="src/assets/img/Sertifikasi/ppgd.jpg"
                        className="w-12"
                        alt="ppgd"
                      ></img>
                    </th>
                    <td className="px-6 py-4">
                      <p>Emergency First Respond / </p>
                      <p>Pelatihan Tanggap Darurat Pertama</p>
                    </td>
                    <td className="px-6 py-4">
                      20 November 2023 - 10 November 2023
                    </td>
                    <td className="px-6 py-4">
                      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                        Edit
                      </button>

                      <button class="bg-[#BB2525] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                        Delete
                      </button>
                    </td>
                  </tr>

                  {/* #Row 3 */}
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src="src/assets/img/Sertifikasi/ppgd.jpg"
                        className="w-12"
                        alt="ppgd"
                      ></img>
                    </th>
                    <td className="px-6 py-4">
                      Pelatihan Keselamatan Terhadap Kebakaran
                    </td>
                    <td className="px-6 py-4">
                      15 November 2023 - 28 November 2023
                    </td>
                    <td className="px-6 py-4">
                      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                        Edit
                      </button>

                      <button class="bg-[#BB2525] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                        Delete
                      </button>
                    </td>
                  </tr>
                  {/* #Row 4 */}
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src="src/assets/img/Sertifikasi/ppgd.jpg"
                        className="w-12"
                        alt="ppgd"
                      ></img>
                    </th>
                    <td className="px-6 py-4">
                      Pelatihan Keselamatan Terhadap Kebakaran
                    </td>
                    <td className="px-6 py-4">
                      15 November 2023 - 28 November 2023
                    </td>
                    <td className="px-6 py-4">
                      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                        Edit
                      </button>

                      <button class="bg-[#BB2525] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                        Delete
                      </button>
                    </td>
                  </tr>

                  {/* #Row 5 */}
                  <tr className="bg-white dark:bg-gray-800 ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src="src/assets/img/Sertifikasi/ppgd.jpg"
                        className="w-12"
                        alt="ppgd"
                      ></img>
                    </th>
                    <td className="px-6 py-4">
                      Pelatihan Keselamatan Terhadap Kebakaran
                    </td>
                    <td className="px-6 py-4">
                      15 November 2023 - 28 November 2023
                    </td>
                    <td className="px-6 py-4">
                      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                        Edit
                      </button>

                      <button class="bg-[#BB2525] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Adminsertifikasi;
