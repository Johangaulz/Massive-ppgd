import ProfilePicture from "../assets/Img/hai.png";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="flex">
          <div className="flex-col">
            <div className="font-bold text-8xl font-['Poppins'] px-40 mx-1 text-justify ">
              <h1>PPGD</h1>
            </div>
            <div className="leading-7 mx-2 px-40 text-2xl font-['Poppins'] text-justify justify-center">
              <p>
                Portal Pertolongan Gawat Darurat yang Diciptakan untuk Merespons
                Setiap Kondisi Kritis. Dengan Teknologi Canggih dan Layanan
                24/7, Kami Siap Membantu Anda di Setiap Detiknya. Panggilan
                Darurat yang Cepat dan Efisien, Karena Kami Percaya Setiap Detik
                Memiliki Arti Penting.
              </p>
            </div>
          </div>
          <div className="w-3/4 h-3/4 float-right">
            <img src={ProfilePicture} alt="" />
          </div>
        </div>
        <div className="font-extrabold mt-14 py-4 border bg-red-700 text-white text-4xl font-['Poppins'] text-center justify-center">
          <p>
            HUBUNGI NOMOR BERIKUT UNTUK <br></br> MENGAKSES NOMOR DARURAT SESUAI{" "}
            <br></br>DENGAN SITUASI ANDA
          </p>
        </div>
        <div className="flex justify-around">
          <div className="">
            <p className="text-[#BB2525] text-center text-[100px] font-extrabold font-['Inter']">
              911
            </p>
            <p className="text-[24px] font-normal font-['Poppins']">
              Nomor Tanggap Gawat Darurat
            </p>
          </div>

          <div className="">
            <p className="text-[#BB2525] text-center text-[100px] font-extrabold font-['Inter']">
              110
            </p>
            <p className="text-[24px] font-normal font-['Poppins']">
              Nomor Kepolisian
            </p>
          </div>
          <div className="">
            <p className="text-[#BB2525] text-center text-[100px] font-extrabold font-['Inter']">
              113
            </p>
            <p className="text-[24px] font-normal font-['Poppins']">
              Nomor Kepolisian
            </p>
          </div>
        </div>
        <div className="flex justify-around ml-16">
          <div className="">
            <p className="text-[#BB2525] text-center text-[100px] font-extrabold font-['Inter']">
              115
            </p>
            <p className="text-[24px] font-normal font-['Poppins']">
              Nomor BASARNAS
            </p>
          </div>
          <div className="ml-12">
            <p className="text-[#BB2525] text-center text-[100px] font-extrabold font-['Inter'] ">
              118
            </p>
            <p className="text-[24px] font-normal font-['Poppins']">
              Nomor Ambulans
            </p>
          </div>
          <div className="">
            <p className="text-[#BB2525] text-center text-[100px] font-extrabold font-['Inter']">
              14080
            </p>
            <p className="text-[24px] font-normal font-['Poppins']">
              Nomor Jasa Marga
            </p>
          </div>
        </div>

        <div className="text-center mt-[100px] font-['Poppins'] font-bold text-[50px]">
          <h1>Jenis Pertolongan</h1>
        </div>
      </div>
    </Layout>
  );
}
