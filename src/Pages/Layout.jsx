import React from "react";
import Navbar from "../Components/Navbar";
// import Footer from '../Components/Footer';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="min-h-screen font-fontPoppins">
        <Navbar />
        <div>{children}</div>
        {/* <Footer /> */}
      </div>
    </React.Fragment>
  );
};

export default Layout;
