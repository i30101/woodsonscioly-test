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
import '../css/components/Footer.css';


// files
import logo from '../assets/site/full-logo.png'



function Footer() {
    return (
        <div className="row" id="footer">
            <div data-aos="fade-up" data-aos-delay="150" className="footer-col col-xs-12 col-sm-12 col-md-8 col-lg-8" id="footer-first-col">
                <a href="/">
                    <img src={logo} id="footer-logo"></img>
                </a>
                <div className="footer-text">C. G. Woodson High School</div>
                <div className="footer-text">9525 Main St, Fairfax, VA 22031</div>
                <div className="footer-text">© Woodson Science Olympiad. All Rights Reserved.</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="footer-col col-xs-6 col-sm-6 col-md-2 col-lg-2">
                <div className="footer-title">Quick Links</div>
                <a className="link footer-link" href="team">The Team</a>
                <a className="link footer-link" href="leadership">Leadership</a>
                <a className="link footer-link" href="tryouts">Tryouts</a>
                <a className="link footer-link" href="contribute">Contribute</a>
            </div>
            <div data-aos="fade-up" data-aos-delay="250" className="footer-col col-xs-6 col-sm-6 col-md-2 col-lg-2">
                <div className="footer-title">Socials</div>
                <a className="link footer-link" target="_blank" href="Blog">Blog</a>
                <a className="link footer-link" target="_blank" href="mailto:woodsonscioly@gmail.com">Mail</a>
                <a className="link footer-link" target="_blank" href="https://www.instagram.com/woodsonscioly/">Instagram</a>
                <a className="link footer-link" target="_blank" href="https://github.com/woodsonscioly">GitHub</a>
            </div>
        </div>
    )
}

export default Footer;