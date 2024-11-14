/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 12 September 2024
 * 
 * Index page
 */


import React from 'react';
import ReactDOM from 'react-dom/client';

// styling
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './css/contribute.css'
import Title from './components/Title';


interface DonateProps {
    levels: string[];
    benefits: string[][];
}

const DonateList: React.FC<DonateProps> = ({levels, benefits}) => {
    const tabIDs = levels.map((level, index) => {
        return level + "Tab";
    })

    const contentIDs = levels.map((level, index) => {
        return level + "Content";
    })    
    
    return <></>
}


function quad() {
    return <div className="primary-section row" id="donate-row">
        <div className="donate-spacer d-none d-md-block"></div>
        <a href="/" className="donate-card col-xs-12 col-sm-12 col-md-5 col-lg-5" data-aos="fade-up">
            <div className="donate-container">
                <div className="donate-element" id="platinum-element">Pt</div>
                <div className="donate-name">Platinum Sponsor</div>
                <div className="donate-amount">$2,000 - $15,000</div>
            </div>
        </a>
        {/* <div className="donate-spacer d-none d-md-block"></div> */}
        <a href="/" className="donate-card col-xs-12 col-sm-12 col-md-4 col-lg-4" data-aos="fade-up">
            <div className="donate-container">
                <div className="donate-element" id="bronze-element">CuSn</div>
                <div className="donate-name">Bronze Sponsor</div>
                <div className="donate-amount">$200 - $500</div>
            </div>
        </a>
        <a href="/" className="donate-card col-xs-12 col-sm-12 col-md-4 col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="donate-container">
                <div className="donate-element" id="silver-element">Ag</div>
                <div className="donate-name">Silver Sponsor</div>
                <div className="donate-amount">$500 - $1,000</div>
            </div>
        </a>
        <a href="/" className="donate-card col-xs-12 col-sm-12 col-md-4 col-lg-4" data-aos="fade-up" data-aos-delay="400">
            <div className="donate-container">
                <div className="donate-element" id="gold-element">Au</div>
                <div className="donate-name">Gold Sponsor</div>
                <div className="donate-amount">$1,000 - $2,000</div>
            </div>
        </a>
    </div>
}


function Contribute() {
    return <>
        <Title title="" highlight="Contribute" after="to WSO" subtitle=""></Title>

        <div className="primary-section">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
            </li>
            <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
            </li>
            <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
            </li>
            <li className="nav-item" role="presentation">
            <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Disabled</button>
            </li>
            </ul>
            <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab">...</div>
            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab">...</div>
            <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab">...</div>
            <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab">...</div>
            </div>
        </div>
    </>
}

export default Contribute;