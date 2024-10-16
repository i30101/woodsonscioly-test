/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 24 September 2024
 * 
 * Footer element
 */

import React from 'react';


// styling
import '../css/style.css';
import '../css/Footer.css';


// files
import logo from '../assets/site/full-logo.png'



function Footer() {
    let temp = (
        <div className="row" id="footer">
            <div data-aos="fade-up" data-aos-duration="1000" className="footer-col col-8" id="footer-first-col">
                <img src={logo} id="footer-logo"></img>
                <div className="footer-text">C. G. Woodson High School</div>
                <div className="footer-text">9525 Main St, Fairfax, VA 22031</div>
                <div className="footer-text">© Woodson Science Olympiad. All Rights Reserved.</div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className="footer-col col-2">
                <div className="footer-title">Quick Links</div>
                <a className="link footer-link" href="team">The Team</a>
                <a className="link footer-link" href="leadership">Leadership</a>
                <a className="link footer-link" href="tryouts">Tryouts</a>
                <a className="link footer-link" href="contribute">Contribute</a>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className="footer-col col-2">
                <div className="footer-title">Reach Out</div>
                <a className="link footer-link" href="mailto:woodsonscioly@gmail.com">Mail</a>
                <a className="link footer-link" href="https://www.instagram.com/woodsonscioly/">Instagram</a>
                <a className="link footer-link" href="https://github.com/woodsonscioly">GitHub</a>
            </div>
        </div>
    )
    return temp;
}

export default Footer;