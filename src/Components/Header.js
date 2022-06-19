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
          <a href="/#">Home</a>
          <a href="/#">News</a>
          <a href="/#">Category</a>
          <a href="/#">About</a>
          <a href="/#">Sign In</a>
          <a class="signup" href="/#"><p>Sign Up</p></a>
          
        </nav>
      </header>
      );
    }
  }


  export default Header;
