import React from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { TopBar } from "./components/topbar/TopBar";

export const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <a href="#" id="back-to-top" title="Back to top" style={{display: 'none'}}>
        &uarr;
      </a>
    </>
  );
};
