/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 12 September 2024
 * 
 * Index page
 */


// external libraries
import React from 'react';
import ReactDOM from 'react-dom/client';


// components
import App from './App';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import ActionButton from './components/ActionButton';
import Quote from './components/Quote';



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);




function Index() {
    return <>
        <Navbar />
        <div id="intro">
            <h1 data-aos="fade-up" id="title">
                C. G. Woodson <span id="highlight">Science Olympiad</span>
            </h1>
            <h6 data-aos="fade-up" data-aos-delay="150" id="subtitle">Pioneers in science, engineering, and inter-disciplinary exploration</h6>
            <div data-aos="fade-up">
                <ActionButton href="#main" text="Learn More"/>
            </div>
        </div>
        <Body>
            <div className="primary-section row index-section" id="#main">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <Quote author="Hannah Do" position="Class of '24">
                        Mrs. Babcock's room is super nice and cozy, and the back is always overflowing with Scioly materials."
                    </Quote>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <Quote author="Andrew Kim" position="President, Class of '25">
                        Woodson Scioly is about much more than studying and taking tests. We ate, traveled, watched the World Cup, and played basketball last season too. I hope future members will enjoy it as much as I did last season."
                    </Quote>
                    <Quote author="Nick Tong" position="Build Captain, Class of '25">
                        Science Olympiad is a gateway for many opportunities, and it itself is an amazing opportunity.
                    </Quote>
                </div>
            </div>
        </Body>
        <Footer />
    </>
}

export default Index;