import React from "react";
import Img1 from "../assets/Img/edukasi/1.png";
import Img2 from "../assets/Img/edukasi/2.png";

const Edukasi = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex flex-col items-center justify-center my-10">
        <div
          className="w-10/12 h-96 bg-no-repeat flex justify-center items-center"
          style={{
            backgroundImage: `url(${Img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p>Emergency dan Non-Emergency</p>
        </div>
        {/* <img className="w-10/12 object-center" src={Img1} alt="" srcSet="" /> */}
      </div>
      <div className="w-full flex gap-10">
        <div className="w-1/4 flex flex-col gap-5">
          <p className=" text-left bg-red-700 px-8 py-4 text-white font-semibold rounded-lg ml-20">
            Emergency
          </p>
          <p className=" text-left px-8 py-4 text-black font-semibold rounded-lg ml-20">
            Asma
          </p>
          <p className=" text-left px-8 py-4 text-gray-500 font-semibold rounded-lg ml-20">
            CPR
          </p>

          <p className=" text-left bg-red-700 px-8 py-4 text-white font-semibold rounded-lg ml-20">
            Non - Emergency
          </p>
          <p className=" text-left px-8 py-4 text-black font-semibold rounded-lg ml-20">
            Alergi
          </p>
          <p className=" text-left px-8 py-4 text-gray-500 font-semibold rounded-lg ml-20">
            Cidera Ringan
          </p>
        </div>
        <div className="w-3/4 mr-20">
          <p className="w-full text-center font-bold text-4xl">CPR</p>
          <img className="w-full" src={Img2} alt="" srcSet="" />
          <p>
            Cidera ringan adalah kejadian umum yang dapat terjadi dalam
            kehidupan sehari-hari, baik itu di rumah, tempat kerja, atau selama
            aktivitas olahraga. Meskipun mungkin terasa sepele, pemahaman yang
            baik tentang cidera ringan, termasuk cara mengidentifikasi, merawat,
            dan pulih, sangat penting. Artikel ini akan membahas cidera ringan
            dengan lebih rinci untuk memberikan wawasan yang komprehensif.
            Cidera ringan mengacu pada kerusakan atau trauma pada tubuh yang
            umumnya tidak parah dan tidak mengancam jiwa. Meskipun tidak
            memerlukan perhatian medis segera, cidera ringan tetap perlu diatasi
            dengan serius untuk memastikan pemulihan yang optimal.
          </p>
          <p className=" font-bold text-2xl">Tanda dan Gejala Ringan</p>
          <ol className="list-decimal">
            <li>Sakit Kepala</li>
            <li>Pusing atau kehilangan keseimbangan</li>
            <li>Mual atau muntah</li>
            <li>Pusing atau Bingung</li>
            <li>Sensitivitas terhadap Cahaya atau Suara</li>
            <li>Luka atau Memar Ringan:</li>
          </ol>
          <p className=" font-bold text-2xl">Cara merawat cidera ringan</p>
          <ol className="list-decimal">
            <li>Beri tubuh waktu untuk pulih dengan istirahat yang cukup.</li>
            <li>
              Gunakan kantung es atau kompres dingin untuk mengurangi
              pembengkakan.
            </li>
            <li>
              Konsumsi obat pereda nyeri seperti parasetamol atau ibuprofen
              sesuai petunjuk.
            </li>
            <li>
              Jauhi aktivitas fisik atau mental berat yang dapat memperburuk
              kondisi.
            </li>
            <li>Sensitivitas terhadap Cahaya atau Suara</li>
            <li>
              Awasi tanda-tanda perburukan dan konsultasikan dengan profesional
              kesehatan jika diperlukan.
            </li>
          </ol>
          <p>
            Jika gejala cidera ringan tidak membaik dalam beberapa hari atau
            malah memburuk, atau jika ada perubahan drastis dalam kondisi,
            segera hubungi profesional kesehatan untuk evaluasi lebih lanjut.
          </p>
          <p className="mb-20">
            Cidera ringan mungkin terasa sepele, tetapi penanganan yang tepat
            dan perhatian terhadap gejala penting untuk memastikan pemulihan
            yang optimal. Dengan memahami tanda dan gejala cidera ringan serta
            merawatnya dengan hati-hati, kita dapat meminimalkan dampaknya dan
            memastikan kesehatan yang baik dalam jangka panjang. Ingatlah,
            kesehatan adalah aset berharga yang perlu dijaga dengan baik.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Edukasi;
