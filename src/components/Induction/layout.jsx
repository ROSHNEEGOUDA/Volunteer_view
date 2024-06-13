import React from "react";
import Navbar from "./navbar";
// import Footer from "./components/footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-grow">
        <main className="flex-grow">{children}</main>
      </div>
      {/* <Footer />  */}
    </div>
  );
};

export default MainLayout;