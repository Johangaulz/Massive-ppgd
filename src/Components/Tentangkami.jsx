import React from "react";
import Img1 from "../assets/Img/tentangkami/1.png";
import Img2 from "../assets/Img/tentangkami/2.png";
import Img3 from "../assets/Img/tentangkami/3.png";

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
<<<<<<< Updated upstream
      <div className="w-full flex flex-col items-center justify-center my-10">
        <p className="font-bold">LifeSaver</p>
        <p className="leading-6 mx-20 px-36 text-lg font-['Poppins'] text-justify justify-center">
=======

      <div className="flex items-center justify-center">
        <img
          src="src/assets//img/logo.png"
          alt="Logo"
          className="max-w-full h-auto rounded-md"
        />
      </div>

      <div className="leading-6 mx-20 px-36 text-lg font-['Poppins'] text-center justify-center mt-6 mb-10">
        <p>
>>>>>>> Stashed changes
          EnviGrowth adalah sebuah portal pertolongan gawat darurat yang
          inovatif, dirancang untuk memberikan bantuan cepat dan efisien ketika
          Anda membutuhkannya. Tim kami terdiri dari profesional kesehatan dan
          teknologi informasi yang berkomitmen untuk memberikan layanan terbaik
          demi keselamatan masyarakat.
        </p>
<<<<<<< Updated upstream
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
      <div>
        <p className="font-bold text-2xl">Misi Kami</p>
        <div></div>
        <p>
          Misi kami adalah memberikan solusi terbaik dalam hal pertolongan gawat
          darurat, menghubungkan masyarakat dengan sumber daya medis yang
          diperlukan dan memberdayakan mereka dengan pengetahuan dan
          keterampilan untuk merespons dengan cepat dalam situasi darurat.i
        </p>
=======
        <p className="font-bold mt-4 text-2xl">Fitur Unggulan</p>
      </div>

      {/* First set of three rectangles */}
      <div className="flex justify-evenly space-x-8 mt-6">
        <div className="image-card relative">
          <img
            src="../assets/Img/satu.png"
            alt="Image 1"
            className="w-40 h-auto mb-4 ml-4 rounded-md"
          />
          <div className="red-rectangle w-52 bg-red-500 flex items-center justify-center mr-4 rounded-md">
            <p className="text-white mb-2 mt-2">Sertifikasi Profesional</p>
          </div>
        </div>
        <div className="image-card relative">
          <img
            src="src/assets/img/dua.png"
            alt="Image 2"
            className="w-40 h-auto mb-4 ml-6 rounded-md"
          />
          <div className="red-rectangle w-52 h-auto bg-red-500 flex items-center justify-center rounded-md">
            <p className="text-white mb-2 mt-2">Edukasi</p>
          </div>
        </div>
        <div className="image-card relative">
          <img
            src="src/assets/img/tga.png"
            alt="Image 3"
            className="w-40 h-auto mb-4 ml-8 rounded-md"
          />
          <div className="red-rectangle w-55 h-auto bg-red-500 flex items-center justify-center rounded-md">
            <p className="text-white mb-2 mt-2 ml-2 mr-2">
              Cari Rumah Sakit Terdekat
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly space-x-8 mt-6">
        <div className="red-rectangle w-52 bg-red-50 flex items-center justify-center mr-4 rounded-md">
          <p className="text-black ml-6 mr-5 mt-6 mb-20">
            Kami bekerja sama lembaga medis berlisensi yang memiliki sertifikasi
            dan pengalaman luas dalam situasi darurat. Dengan demikian, kami
            dapat memberikan layanan bantuan yang berkualitas dan andal. Serta
            dapat menyediakan info mengenai sertifikasi medis yang tersedia.
          </p>
        </div>
        <div className="red-rectangle w-52 bg-red-50 flex items-center justify-center rounded-md">
          <p className="text-black ml-6 mr-5 mt-6">
            Kami tidak hanya menangani keadaan darurat, tetapi juga berkomitmen
            untuk meningkatkan pemahaman dan keterampilan masyarakat dalam
            pertolongan pertama. Dengan sumber daya edukasi interaktif kami,
            Anda dapat memperoleh pengetahuan penting yang dapat menyelamatkan
            nyawa.
          </p>
        </div>
        <div className="red-rectangle w-52 bg-red-50 flex items-center justify-center ml-7 rounded-md">
          <p className="text-black ml-6 mr-5 mb-20">
            Fitur pencarian rumah sakit terdekat kami memungkinkan pengguna
            dengan cepat menemukan fasilitas kesehatan yang diperlukan dalam
            jarak yang sesuai. Informasi terkini dan peta interaktif memastikan
            navigasi yang mudah dan efektif.
          </p>
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
>>>>>>> Stashed changes
        <p>
          Dengan EnviGrowth Anda bukan hanya menjadi pengguna, tetapi juga
          bagian dari komunitas yang peduli akan keselamatan. Bergabunglah
          dengan kami dan bersama-sama kita membangun lingkungan yang lebih aman
          dan responsif terhadap keadaan darurat.
        </p>
      </div>
<<<<<<< Updated upstream
      <div className="w-full flex flex-col gap-10 mt-10 justify-center items-center px-32 mb-16">
        <p className=" font-bold text-2xl">Pengenbang Web</p>
        <div className="w-full mx-auto grid grid-cols-3 justify-items-center gap-3">
          <div className=" h-32 flex flex-col bg-red-50 p-10 rounded-2xl shadow-md">
            <p className="font-bold text-xl">RS Mitra Keluarga Bekasi</p>
            <p className="font-normal text-xs">Jl. Ahmad Yani, RT.002/RW.011</p>
            <p className="w-full text-right font-normal text-xs ">
              Lebih lanjut
            </p>
          </div>
          <div className=" h-32 flex flex-col bg-red-50 p-10 rounded-2xl shadow-md">
            <p className="font-bold text-xl">RS Mitra Keluarga Bekasi</p>
            <p className="font-normal text-xs">Jl. Ahmad Yani, RT.002/RW.011</p>
            <p className="w-full text-right font-normal text-xs ">
              Lebih lanjut
            </p>
          </div>
          <div className=" h-32 flex flex-col bg-red-50 p-10 rounded-2xl shadow-md">
            <p className="font-bold text-xl">RS Mitra Keluarga Bekasi</p>
            <p className="font-normal text-xs">Jl. Ahmad Yani, RT.002/RW.011</p>
            <p className="w-full text-right font-normal text-xs ">
              Lebih lanjut
            </p>
          </div>
          <div className=" h-32 flex flex-col bg-red-50 p-10 rounded-2xl shadow-md">
            <p className="font-bold text-xl">RS Mitra Keluarga Bekasi</p>
            <p className="font-normal text-xs">Jl. Ahmad Yani, RT.002/RW.011</p>
            <p className="w-full text-right font-normal text-xs ">
              Lebih lanjut
            </p>
          </div>
          <div className=" h-32 flex flex-col bg-red-50 p-10 rounded-2xl shadow-md">
            <p className="font-bold text-xl">RS Mitra Keluarga Bekasi</p>
            <p className="font-normal text-xs">Jl. Ahmad Yani, RT.002/RW.011</p>
            <p className="w-full text-right font-normal text-xs ">
              Lebih lanjut
            </p>
          </div>
        </div>
      </div>
=======
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
              src="src/assets/img/1.jpg"
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
              src="src/assets/img/3.jpg"
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
              src="src/assets/img/2.jpg"
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
              src="/Massive-ppgd/src/assets/img/4.jpg"
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
              src="src/assets/img/5.jpg"
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
>>>>>>> Stashed changes
    </div>
  );
};

export default Tentangkami;
