/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 12 September 2024
 * 
 * Index page
 */


// external libraries
import React from "react";


// components
import Page from './components/Page';
import ContactContainer from './components/Contact';


// assets
import check from './assets/icons/check.svg'
import x from './assets/icons/x.svg'
import okta from './assets/site/okta.svg'
import ptso from './assets/site/woodson-ptso.png'



let delay = 0;

const allBenefits = [
    "Logo on website",
    "Logo on club banner", 
    "Logo on club shirts",
    "Logo on team builds",
    "Logo in trophy case",
    "Post on club social media",
    "Monthly newsletter mentions",
    "Sponsor Night invitation",
    "Sponsor Night guest speaker"
]


interface DonateTierProps {
    symbol: string;
    name: string;
    minCost: string;
    maxCost: string;
    includedBenefits: number[];
}


const DonateTier: React.FC<DonateTierProps> = ({symbol, name, minCost, maxCost, includedBenefits}) => {
    document.title = "Contribute | Woodson Science Olympiad";

    delay += 50;

    const benefitsList = [];

    // const includedList = [];
    for (const includedIndex of includedBenefits) {
        benefitsList.push(
            <div className="benefit included">
                <img src={check} className="benefit-icon" alt="benefit icon" />
                {allBenefits[includedIndex]}
            </div>
        )
    }

    for (let i = 0; i < allBenefits.length; i++) {
        if (!includedBenefits.includes(i)) {
            benefitsList.push(
            <div className="benefit excluded">
                <img src={x} className="benefit-icon" alt="benefit icon" />
                {allBenefits[i]}
            </div>
            )
        }
    }

    

    return <div className="donate-tier-container col-xs-12 col-sm-12 col-md-4 col-lg-4" data-aos="fade-up" data-aos-delay={delay}>
        <div className="donate-tier">
            <div className={"donate-element " + name}>{symbol}</div>
            <div className="tier-name">{name} Sponsor</div>
            <div className="price-range">${minCost} - ${maxCost}</div>
            <a className="btn sign-in-button donate-button" type="submit" href="#contact-box">Donate now</a>
            <div className="benefits">{benefitsList}</div>
        </div>
    </div>
}







function Contribute() {
    return <Page title="" highlight="Contribute" after="to WSO" subtitle="">    
        <div className="primary-section">
            <div className="heading-1" data-aos="fade-up">Sponsorship Levels</div>

            <div className="donate-tier-container row">
                <DonateTier symbol="CuSn" name="Bronze" minCost="500" maxCost="999" 
                    includedBenefits={[0, 1]} 
                />
                <DonateTier symbol="Ag" name="Silver" minCost="1,000" maxCost="1,999" 
                    includedBenefits={[0, 1, 2, 6]} 
                />
                <DonateTier symbol="Au" name="Gold" minCost="2,000" maxCost="5,000"
                    includedBenefits={[0, 1, 2, 3, 4, 5, 6, 7, 8]} 
                />
            </div>
        </div>

        <div className="primary-section">
            <div className="heading-1" data-aos="fade-up">Current Sponsors</div>

            <div className="row current-sponsor-category" data-aos="fade-up">
                <div className="csc-name col-xs-12 col-sm-12 col-md-6 col-lg-6 Bronze">
                    <p>Bronze Sponsors</p>
                </div>
                <div className="csc-logos col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <a href="https://www.okta.com" target='_blank' className="csc-logo-url" rel="noreferrer">
                        <img src={okta} className="csc-logo" alt="csc-logo" />
                    </a>
                </div>
            </div>

            <div className="row current-sponsor-category" data-aos="fade-up">
                <div className="csc-name col-xs-12 col-sm-12 col-md-6 col-lg-6 Silver">
                    <p>Silver Sponsors</p>
                </div>
                <div className="csc-logos col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <a href="https://woodsonptso.ptboard.com/" target='_blank' className="csc-logo-url" rel="noreferrer">
                        <img src={ptso} className="csc-logo" alt="csc-logo" />
                    </a>
                </div>
            </div>
        </div>

        <ContactContainer />
    </Page>
}

export default Contribute;