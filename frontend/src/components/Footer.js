import React from 'react'
import {Link} from 'react-router-dom';
import logo from "../logo.svg";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
              <footer class="footer">
        <div class="container-footer">
        <div class="row-footer">
        <div class="footer-col">
        <h4></h4>
        <div class="social-links">
        <img src={logo} alt="Jaded Zarai" height={100} width={100} />
                    </div>
        </div>
        <div class="footer-col">
                    <h4>Quick Links</h4>
                        <p><a href="/about" style={{color:'white', textDecoration:'none'}}>About us</a></p>
                        <p><a href="#" style={{color:'white', textDecoration:'none'}}>Terms & Conditions</a></p>
                        <p><a href="#" style={{color:'white', textDecoration:'none'}}>Privacy policy</a></p>
                </div>
                <div class="footer-col">
                    <h4>Contacts</h4>       
                        <p><a><Link  style={{color:'white', textDecoration:'none'}} to="seeds" ></Link></a></p>
                        <p><a><Link  style={{color:'white', textDecoration:'none'}} to="pesticides" ></Link></a></p>
                        <p><a><Link  style={{color:'white', textDecoration:'none'}} to="rental" ></Link></a></p>
                    
                </div>
                <div class="footer-col">
                    <h4>Location</h4>
                    
                       <p> <a href="#" style={{color:'white', textDecoration:'none'}}></a></p>
                       <p> <a href="#" style={{color:'white', textDecoration:'none'}}></a></p>
                    
                </div>
        </div>
        </div>
        </footer>
    </div>
  );
};

export default Footer;
