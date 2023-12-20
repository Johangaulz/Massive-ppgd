import React from "react";
import Img1 from "../assets/Img/tentangkami/Sertifikasi.png";
import Img2 from "../assets/Img/tentangkami/Edukasi.png";
import Img3 from "../assets/Img/tentangkami/Maps.png";

const Tentangkami = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex flex-col items-center justify-center my-10">
        <p className="font-bold text-4xl text-black-00">Tentang Kami</p>
      </div>
      <div className="leading-6 mx-20 px-36 text-lg font-['Poppins'] text-center justify-center mt-6 mb-10">
        <p>
          Selamat datang di EnviGrowth, sebuah platform terdepan yang
          didedikasikan untuk memberikan bantuan dan dukungan dalam situasi
          darurat. Kami adalah solusi yang mengintegrasikan teknologi canggih
          dengan kepedulian terhadap keselamatan dan kesejahteraan masyarakat.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <img
          src="src/assets/img/Logo.png"
          alt="Logo"
          className="max-w-full h-auto rounded-md "
        />
      </div>

      <div className="leading-6 mx-20 px-36 text-lg font-['Poppins'] text-center justify-center mt-10 mb-10">
        <p>
          EnviGrowth adalah sebuah portal pertolongan gawat darurat yang
          inovatif, dirancang untuk memberikan bantuan cepat dan efisien ketika
          Anda membutuhkannya. Tim kami terdiri dari profesional kesehatan dan
          teknologi informasi yang berkomitmen untuk memberikan layanan terbaik
          demi keselamatan masyarakat.
        </p>
      </div>

      <div className="w-3/4 mx-auto flex flex-col ">
        <p className="w-full text-center font-bold text-2xl mb-10">
          Fitur Unggulan
        </p>
        <div className="w-full flex justify-evenly ">
          <div className="flex flex-col gap-10 w-72">
            <img className="w-full" src={Img1} alt="" srcset="" />
            <p className="w-full text-center bg-red-700 py-4 text-white font-semibold rounded-lg">
              Sertifikasi Profesional
            </p>
            <div className="w-full h-[450px] text-left bg-red-100 rounded-lg p-10">
              <p>
                Kami bekerja sama lembaga medis berlisensi yang memiliki
                sertifikasi dan pengalaman luas dalam situasi darurat. Dengan
                demikian, kami dapat memberikan layanan bantuan yang berkualitas
                dan andal. Serta dapat menyediakan info mengenai sertifikasi
                medis yang tersedia.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 w-72">
            <img className="w-full" src={Img2} alt="" srcset="" />
            <p className="w-full text-center bg-red-700 py-4 text-white font-semibold rounded-lg">
              Edukasi
            </p>
            <div className="w-full h-[450px] text-left bg-red-100 rounded-lg p-10">
              <p>
                Kami tidak hanya menangani keadaan darurat, tetapi juga
                berkomitmen untuk meningkatkan pemahaman dan keterampilan
                masyarakat dalam pertolongan pertama. Dengan sumber daya edukasi
                interaktif kami, Anda dapat memperoleh pengetahuan penting yang
                dapat menyelamatkan nyawa.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 w-72">
            <img className="w-full" src={Img3} alt="" srcset="" />
            <p className="w-full text-center bg-red-700 py-4 text-white font-semibold rounded-lg">
              Cari Rumah Sakit Terdekat
            </p>
            <div className="w-full h-[450px] text-left bg-red-100 rounded-lg p-10">
              <p>
                Fitur pencarian rumah sakit terdekat kami memungkinkan pengguna
                dengan cepat menemukan fasilitas kesehatan yang diperlukan dalam
                jarak yang sesuai. Informasi terkini dan peta interaktif
                memastikan navigasi yang mudah dan efektif.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bold "Misi Kami" text below the new rectangle */}
      <div className="text-center mt-20">
        <p className="font-bold text-2xl">Misi Kami</p>
      </div>
      <div className="leading-6 mx-20 px-36 text-lg font-['Poppins'] text-center justify-center mt-4 mb-10">
        <p>
          Misi kami adalah memberikan solusi terbaik dalam hal pertolongan gawat
          darurat, menghubungkan masyarakat dengan sumber daya medis yang
          diperlukan, dan memberdayakan mereka dengan pengetahuan dan
          keterampilan untuk merespons dengan cepat dalam situasi darurat.
        </p>
      </div>
      <div className="leading-6 mx-20 px-36 text-lg font-['Poppins'] text-center justify-center mt-4 mb-10">
        <p>
          Dengan EnviGrowth Anda bukan hanya menjadi pengguna, tetapi juga
          bagian dari komunitas yang peduli akan keselamatan. Bergabunglah
          dengan kami dan bersama-sama kita membangun lingkungan yang lebih aman
          dan responsif terhadap keadaan darurat.
        </p>
      </div>
      {/* Bold "Pengembang Web" text below the new containers */}
      <div className="text-center mt-50 mb-10">
        <p className="font-bold text-2xl">Pengembang Web</p>
      </div>

      {/* Three containers with circle images and text */}
      <div className="flex justify-evenly mt-4">
        {/* Container 1 */}
        <div className="flex flex-col items-center shadow-lg rounded-lg p-4 w-80 h-60">
          <div className="rounded-full w-20 h-20 mt-5 overflow-hidden">
            <img
              src="src/assets/img/tentangkami/1.jpg"
              alt="Circle Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center mt-2 text-2xl">Johan</p>
          <p className="text-center mt-2">Scrum Master</p>
        </div>

        {/* Container 2 */}
        <div className="flex flex-col items-center shadow-lg rounded-lg p-4 w-80 h-60">
          <div className="rounded-full mt-5 w-20 h-20 overflow-hidden">
            <img
              src="src/assets/img/tentangkami/3.jpg"
              alt="Circle Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center mt-2 text-2xl">Dwi Amalia</p>
          <p className="text-center mt-2">Hipster</p>
        </div>

        {/* Container 3 */}
        <div className="flex flex-col items-center shadow-lg rounded-lg p-4 w-80 h-60">
          <div className="rounded-full mt-5 w-20 h-20 overflow-hidden">
            <img
              src="src/assets/img/tentangkami/2.jpg"
              alt="Circle Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center mt-2 text-2xl">Nona Alya</p>
          <p className="text-center mt-2">Hipster</p>
        </div>
      </div>
      {/* Two additional containers */}
      <div className="flex justify-evenly mt-20 ml-60 mr-60">
        {/* Container 4 */}
        <div className="flex flex-col items-center shadow-lg rounded-lg p-4 w-80 h-60 ml-10">
          <div className="rounded-full mt-5 w-20 h-20 overflow-hidden ">
            <img
              src="src/assets/img/tentangkami/4.jpg"
              alt="Circle Image 4"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center mt-2 text-2xl">Azizi Rahim</p>
          <p className="text-center mt-2">Hacker</p>
        </div>

        {/* Container 5 */}
        <div className="flex flex-col items-center shadow-lg rounded-lg p-4 w-80 h-60 mr-10">
          <div className="rounded-full mt-5 w-20 h-20 overflow-hidden ">
            <img
              src="src/assets/img/tentangkami/5.jpg"
              alt="Circle Image 5"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center mt-2 text-2xl">Rismawati</p>
          <p className="text-center mt-2">Hacker</p>
        </div>
      </div>

      {/* Spacing between containers and footer */}
      <div className="mt-20"></div>

      {/* Footer Section */}
      <div className="text-center mt-">{/* ... (Footer content) */}</div>
    </div>
  );
};

export default Tentangkami;
