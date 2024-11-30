/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 28 November 2024
 * 
 * Index page
 */


import React from "react";


import '../components-css/Contact.css'
import github from '../assets/icons/github.svg'


interface ServiceProps {
    name: string;
    contact: string;
    url: string;
    image: any;
}


const ContactService: React.FC<ServiceProps> = ({name, contact, url, image}) => {
    return <a href={url} target="_blank" className="service row">
        <div className="contact-icon col-2">
            <img src={image} className="contact-image" />
        </div>
        <div className="contact-details col-10">
            <div className="contact-name">{name}</div>
            <div className="contact">{contact}</div>
        </div>
    </a>
}



function ContactContainer() {
    return <div className="primary-section row contact-box">
        <div className="contact-container col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="contact-heading">Get In Touch</div>
            <div className="contact-text">Want to sponsor us? Have any questions? Fill out the form or reach out to us through one of the following platforms.</div>
            <ContactService name="Mail" contact="woodsonscioly@gmail.com" url="mailto:woodsonscioly@gmail.com" image={github} />
            <ContactService name="Instagram" contact="@woodsonscioly" url="mailto:woodsonscioly@gmail.com" image={github} />
            <ContactService name="GitHub" contact="woodsonscioly" url="mailto:woodsonscioly@gmail.com" image={github} />
        </div>
        <div className="message-container col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="message-heading">Send us a message</div>
            <div className="message-text">We'll respond in 1-2 business days.</div>
        </div>
    </div>
}


export default ContactContainer;