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


// styling
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './css/style.css'
import './css/index.css'
import './components-css/Title.css'

// classes
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
            <div className="primary-section" id="#main">
                <Quote author="Jamie Kim" position="Vice President" quote="lorem" />
            </div>
        </Body>
        <Footer />
    </>
}

export default Index;