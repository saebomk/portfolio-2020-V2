import React from "react";
import "./layout.css";
import { GlobalStyle } from "../styles/GlobalStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
