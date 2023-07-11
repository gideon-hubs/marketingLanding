import React from 'react'
import '../css/Style.css';
import logo from "../images/Marft.svg"
import { FaFacebookF, FaInstagram,FaDribbble } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
            <div className='text-center mb-4'>
            <img src={logo} alt="pic"/>
            </div>
            <div className='text-center'>
            <p className='footer-para text-center'>De dis tori na just tori way no get meaning, na just to helep person<br/>
            way dey waka for text matter. Make you no vex if e no dey flow well well. </p>
            <ul className="social-icons">
            <li><Link className="facebook" href="#"><FaFacebookF/></Link></li>  
            <li><Link className="facebook" href="#"><FaDribbble/></Link></li>
            <li><Link className="facebook" href="#"><FaInstagram/></Link></li> 
          </ul>
            </div>

            <div className='text-center newsletter'>
            <h1> Subscribe to our Newsletter</h1>
            <p className='footer-para text-center'>De dis tori na just tori way no get meaning, Make you no vex if e no dey flow well well. </p>
           

            <div class="form">
            <input type="email" class="form__email" placeholder="Enter your email address" />
            <button class="form__button">Subscribe</button>
            </div>

            </div>

           

          <div className="col-sm-12 col-md-6">
            <h6>DM us on:</h6>
            <p className="text-justify">info@marft.com</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Call us on:</h6>
            <ul className="footer-links">
              <li>(+1)0139 2092 2033</li>
              <li>(+1)0139 2092 2033</li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Find Us:</h6>
            <ul className="footer-links">
              <li>767 5th Street</li>
              <li>21st Floor, New York,</li>
              <li>USA</li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text"> &copy;Marft 2023 All Rights Reserved.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="sectioner">
              <li><Link className="sectioner" href="#">Privacy Policy</Link></li>
              <li><Link className="sectioner" href="#">Terms of Connditions</Link></li>  
            </ul>
          </div>
        </div>
      </div>
</footer>
    </>
  )
}

export default Footer