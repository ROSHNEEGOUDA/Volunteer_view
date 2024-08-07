import React from "react";
import Navbar from "./navbar";
// import Footer from "./components/footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
       <div className="bg-gray-400 w-full h-0.5 shadow-lg"></div>
      <div className="flex flex-grow">
        <main className="flex-grow bg-[#fffaf0]">{children}</main>
      </div>
      {/* <Footer />  */}
    </div>
  );
};

export default MainLayout;