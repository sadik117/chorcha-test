import React from "react";
import { Footer } from "./Footer";
import { Outlet } from "react-router";
import Navbar from "./Navbar";


const Mainlayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-324px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Mainlayout;