import React from "react";

import Header from "./views/Header";
import Footer from "./views/Footer";
import style from "../styles/styleComponents.module.css"

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
