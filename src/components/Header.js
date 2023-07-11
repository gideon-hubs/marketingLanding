import React from "react";
import '../css/Style.css';
import { FaFacebookF, FaInstagram,FaDribbble } from "react-icons/fa";
import logo from "../images/Logo.svg"


function Header() {
    return(
        <>
    <nav className="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">About Us <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Service</a>
      </li>

      <li className="nav-item">
      <a className="nav-link" href="#">Blog</a>
    </li>

    <li className="nav-item">
    <a className="nav-link" href="#">Contact</a>
  </li>
    </ul>
  </div>

  <div className="collapse navbar-collapse justify-content-center" id="navbarnav">
  <ul className="navbar-nav mr-auto">
   <img src={logo} alt="pic"/>
  </ul>
 </div>

  <div>
  <ul className="nav justify-content-end">

  <li className="nav-item">
  <FaFacebookF className="iconposition"/>
  </li>

    <li className="nav-item">
    <FaDribbble className="iconposition"/>
  </li>
 
  <li className="nav-item">
    <FaInstagram className="iconposition"/>
  </li>
</ul>
  </div>
  </div>
</nav>

        </>
    )
}

export default Header;