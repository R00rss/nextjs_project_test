import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
const Layout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.body}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
