import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./Pages/Beranda";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Beranda />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
