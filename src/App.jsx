import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./Pages/Beranda";
import Sertifikasi from "./Pages/Sertifikasi";
import Edukasi from "./Pages/Edukasi";
import Maps from "./Pages/Maps";
import Tentangkami from "./Pages/Tentangkami";
import Login from "./Pages/Login";
import { NavLink } from "react-router-dom";
import Profileadmin from "./Pages/Admin/Profileadmin";
import Adminsertifikasi from "./Pages/Admin/Adminsertifikasi";
import Adminrumahsakit from "./Pages/Admin/Adminrumahsakit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/sertifikasi" element={<Sertifikasi />} />
          <Route path="/edukasi" element={<Edukasi />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/tentangkami" element={<Tentangkami />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profileadmin" element={<Profileadmin />} />
          <Route path="/adminsertifikasi" element={<Adminsertifikasi />} />
          <Route path="/adminrumahsakit" element={<Adminrumahsakit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
