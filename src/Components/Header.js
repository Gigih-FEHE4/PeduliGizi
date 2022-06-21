/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component {
    render() {
      return (
      <header id="header">
        <img src="../images/Logo.png" alt="" width="60px" height="46px"></img>
        <h2>PeduliGizi</h2>
        <nav>
          <a href="/">Halaman Utama</a>
          <a href="/#">Kategori</a>
          <a href="/#">Tentang</a>
          <a> <Link to="/login">Masuk</Link></a>
          <a class="signup" href="/#"><p>Daftar</p></a>
          
        </nav>
      </header>
      );
    }
  }


  export default Header;
