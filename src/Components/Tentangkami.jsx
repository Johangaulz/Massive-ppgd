import React from "react";
import Img1 from "../assets/Img/tentangkami/1.png";
import Img2 from "../assets/Img/tentangkami/2.png";
import Img3 from "../assets/Img/tentangkami/3.png";

const Tentangkami = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex flex-col items-center justify-center my-10">
        <p className="font-bold text-4xl">Tentang Kami</p>
      </div>
      <div className="leading-6 mx-20 px-36 text-lg font-['Poppins'] text-justify justify-center">
        <p>
          Selamat datang di EnviGrowth, sebuah platform terdepan yang
          didedikasikan untuk memberikan bantuan dan dukungan dalam situasi
          darurat. Kami adalah solusi yang mengintegrasikan teknologi canggih
          dengan kepedulian terhadap keselamatan dan kesejahteraan masyarakat.
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center my-10">
        <p className="font-bold">LifeSaver</p>
        <p className="leading-6 mx-20 px-36 text-lg font-['Poppins'] text-justify justify-center">
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
      <div>
        <p className="font-bold text-2xl">Misi Kami</p>
        <div></div>
        <p>
          Misi kami adalah memberikan solusi terbaik dalam hal pertolongan gawat
          darurat, menghubungkan masyarakat dengan sumber daya medis yang
          diperlukan dan memberdayakan mereka dengan pengetahuan dan
          keterampilan untuk merespons dengan cepat dalam situasi darurat.i
        </p>
        <p>
          Dengan EnviGrowth Anda bukan hanya menjadi pengguna, tetapi juga
          bagian dari komunitas yang peduli akan keselamatan. Bergabunglah
          dengan kami dan bersama-sama kita membangun lingkungan yang lebih aman
          dan responsif terhadap keadaan darurat.
        </p>
      </div>
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
    </div>
  );
};

export default Tentangkami;
