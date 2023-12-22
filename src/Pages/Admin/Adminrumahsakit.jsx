import React from "react";
import Adminsidebar from "../../Components/Admin/Adminsidebar";
import Layout from "../Layout";

const Adminrumahsakit = () => {
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
                      Nama Rumah Sakit
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Alamat
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Link Url
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
                      RS Aisyiyah Kudus
                      <p></p>
                    </th>
                    <td className="px-6 py-4 ">
                      <p>Jl. Hos Cokroaminoto No.248, Mlati Norowito,</p>
                      <p>Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59319</p>
                    </td>
                    <td className="px-6 py-4">http://rsaisyiyahkudus.com</td>
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
                      RSUD Dr. Loekmono Hadi Kudus
                      <p></p>
                    </th>
                    <td className="px-6 py-4 ">
                      <p>Jl Dr Lukmono Hadi No.19, Cobowo, </p>
                      <p>
                        Ploso, Kec. Jati, Kabupaten Kudus, Jawa Tengah 59348
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p> http://rsuddrloekmonohadi</p>
                      <p>.kuduskab.go.id</p>
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
                      Rumah Sakit Islam Sunan Kudus
                      <p></p>
                    </th>
                    <td className="px-6 py-4 ">
                      <p>Jl. Raya Kudus Permai No.1, Tersono, Garung Lor, </p>
                      <p>Kec. Kaliwungu, Kabupaten Kudus, Jawa Tengah 59332</p>
                    </td>
                    <td className="px-6 py-4">
                      http://www.rsisunankudus.co.id
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
                      RSIA Harapan Bunda Kudus
                      <p></p>
                    </th>
                    <td className="px-6 py-4 ">
                      <p>Jl. Raya Kudus - Jepara No.KM. 04, Garung Lor,</p>
                      <p>Kec. Kaliwungu, Kabupaten Kudus, Jawa Tengah 59332</p>
                    </td>
                    <td className="px-6 py-4">
                      <p> https://www.instagram.com/</p>
                      <p> rsiaharapanbundakudus/</p>
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
                      RSIA Miriam Kudus
                      <p></p>
                    </th>
                    <td className="px-6 py-4 ">
                      <p>Jl. Jend. Ahmad Yani No.58, Magersari, Panjunan,</p>
                      <p>Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59317</p>
                    </td>
                    <td className="px-6 py-4">
                      http://www.rsiamiriam.com 2023
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

export default Adminrumahsakit;
