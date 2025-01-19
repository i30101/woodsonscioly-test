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

// assets
import collaboration from './assets/icons/collaboration.svg';
import integrity from './assets/icons/integrity.svg';
import opportunity from './assets/icons/opportunity.svg';
import excellence from './assets/icons/excellence.svg';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);


interface ValueProps {
    icon: any;
    name: string;
    description: string;
}

const Value: React.FC<ValueProps> = ({icon, name, description}) => {
    return <div className="value-col col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <div className="value-icon-container">
            <img src={icon} alt={icon} />
        </div>
        <div className="value-name">{name}</div>
        <div className="value-description">{description}</div>
    </div>
}




function Index() {
    return <>
        <Navbar />
        <div id="intro">
            <h1 data-aos="fade-up" className="title">
                C. G. Woodson <span className="highlight">Science Olympiad</span>
            </h1>
            <h6 data-aos="fade-up" data-aos-delay="150" id="subtitle">Pioneers in science, engineering, and inter-disciplinary exploration</h6>
            <div data-aos="fade-up">
                <ActionButton href="#main" text="Learn More"/>
            </div>
        </div>
        <Body>
            <div className="primary-section index-section" id="main" data-aos="fade-up">
                <h1 className="heading">Our Values</h1>
                <div className="subheading">
                    Nisi dignissim tortor sed quam sed ipsum ut. Montes, morbi euismod elit est. Eget luctus vestibulum
                </div>
                <div className="row">
                    <Value icon={collaboration} name="Collaboration" description={"We work as a team"} />
                    <Value icon={integrity} name="Integrity" description={"Fair treatment and an equal chance to compete"} />
                    <Value icon={opportunity} name="Opportunity" description={"Every member can reach their fullest potential"} />
                    <Value icon={excellence} name="Excellence" description={"Our competitors are among the best in the state"} />
                </div>
            </div>

            <div className="primary-section index-section" data-aos="fade-up">
                <div className="row">
                    <div className="side-text col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <h1 className="heading">What our <span className="highlight">members</span> say</h1>
                        <div className="subheading">Hear from current Woodson Science Olympiad members and alumni</div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <Quote author="Hannah Do" position="Class of '24">
                            Mrs. Babcock's room is super nice and cozy, and the back is always overflowing with Scioly materials."
                        </Quote>
                        <Quote author="Ada Qin" position="States member, Class of '26">
                            Working with a group is really big for me. When I'm surrounded by people who are just as committed as I am, it pushes me to work harder. Not only do you make friends, but you also learn so much.
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
            </div>

        </Body>
        <Footer />
    </>
}

export default Index;