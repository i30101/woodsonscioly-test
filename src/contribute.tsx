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

import check from './assets/site/check.svg'
import x from './assets/site/x.svg'
import { formatDiagnosticsWithColorAndContext } from 'typescript';


var delay = 0;

const allBenefits = [
    "Logo on website",
    "Logo on club banner", 
    "Logo on club shirts",
    "Logo on team builds",
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
    delay += 50;

    const benefitsList = [];

    // const includedList = [];
    for (const includedIndex of includedBenefits) {
        benefitsList.push(
            <div className="benefit included">
                <img src={check} className="benefit-icon" />
                {allBenefits[includedIndex]}
            </div>
        )
    }

    for (var i = 0; i < allBenefits.length; i++) {
        if (!includedBenefits.includes(i)) {
            benefitsList.push(
            <div className="benefit disincluded">
                <img src={x} className="benefit-icon" />
                {allBenefits[i]}
            </div>
            )
        }
    }

    

    return <div className="donate-tier-container col-xs-12 col-sm-12 col-md-4 col-lg-4" data-aos="fade-up" data-aos-delay={delay}>
        <div className="donate-tier">
            <div className="donate-element" id={name + "Element"}>{symbol}</div>
            <div className="tier-name">{name} Sponsor</div>
            <div className="price-range">${minCost} - ${maxCost}</div>
            <a className="btn sign-in-button donate-button" type="submit" href="#footer">Donate now</a>
            <div className="benefits">{benefitsList}</div>
        </div>
    </div>
}

// https://ehire.webflow.io/#about-us   


function Contribute() {
    return <>
        <Title title="" highlight="Contribute" after="to WSO" subtitle=""></Title>
        
        <div className="primary-section">
            <div className="heading-1" data-aos="fade-up">Sponsorship Levels</div>

            <div className="donate-tier-container row">
                <DonateTier 
                    symbol="CuSn" 
                    name="Bronze" 
                    minCost="500" 
                    maxCost="999" 
                    includedBenefits={[0, 1]} 
                />
                <DonateTier 
                    symbol="Ag" 
                    name="Silver" 
                    minCost="1,000" 
                    maxCost="1,999" 
                    includedBenefits={[0, 1, 2, 6]} 
                />
                <DonateTier 
                    symbol="Au" 
                    name="Gold" 
                    minCost="2,000" 
                    maxCost="5,000"
                    includedBenefits={[0, 1, 2, 3, 4, 5, 6, 7]} 
                />
            </div>
        </div>

        

    </>
}

export default Contribute;