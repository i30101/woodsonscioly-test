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
import events from './assets/icons/events.svg';
import preparation from './assets/icons/preparation.svg';
import competition from './assets/icons/competition.svg';
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
    return <div className="value-col col-xs-12 col-sm-12 col-md-3 col-lg-3" data-aos={"fade-up"}>
        <div className="value-icon-container">
            <img src={icon} alt={icon} />
        </div>
        <div className="value-name">{name}</div>
        <div className="value-description">{description}</div>
    </div>
}


interface AboutProps {
    icon: any;
    name: string;
    children: React.ReactNode;
}

const About: React.FC<AboutProps> = ({icon, name, children}) => {
    return <div className="about-row row" data-aos={"fade-up"}>
        <div className="about-icon-container col-xs-12 col-sm-12 col-md-2 col-lg-2">
            <img src={icon} alt={icon} className={"about-icon"}/>
        </div>
        <div className="about-content col-xs-12 col-sm-12 col-md-10 col-lg-10">
            <div className={"about-name"}>{name}</div>
            <div className={"about-children"}>{children}</div>
        </div>
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
            <div className="primary-section index-section" data-aos="fade-up" id={"main"}>
                <h1 className="heading">What is Science Olympiad?</h1>
                <div className="subheading">Learn about the program</div>
                <div className={"about"}>
                    <About icon={events} name={"Events"}>
                        Science Olympiad consists of <b>23 events</b> that cover various topics ranging from chemistry to earth science and electrical engineering to anatomy. As a former Woodson Science Olympiad president once said, it's like a <b>track meet</b> for nerds!
                    </About>
                    <About icon={preparation} name={"Preparation"}>
                        There are different types of events. For <b>study events</b>, you make a binder or a cheat sheet. For <b>builds</b>, you construct a physical machine. For <b>labs</b> and <b>hybrids</b>, you study and prepare for a hands-on examination.
                    </About>
                    <About icon={competition} name={"Competition"}>
                        Schools and universities around the country hold tournaments. We've been to invitationals at the <b>National Cathedral</b>, <b>Princeton</b>, and <b>Yale</b>. The States tournament we attend every year is held at the <b>University of Virginia</b>.
                    </About>
                </div>
            </div>

            <div className="primary-section index-section" data-aos="fade-up">
                <h1 className="heading">Our Values</h1>
                <div className="subheading">
                    Our club's values are the foundation on which we collaborate, compete, and reach excellence.
                </div>
                <div className="row">
                    <Value icon={collaboration} name="Collaboration" description={"We work as a team"}/>
                    <Value icon={integrity} name="Integrity"
                           description={"Fair treatment and an equal chance to compete"}/>
                    <Value icon={opportunity} name="Opportunity"
                           description={"Every member can reach their fullest potential"}/>
                    <Value icon={excellence} name="Excellence"
                           description={"Our competitors are among the best in the state"}/>
                </div>
            </div>

            <div className="primary-section index-section" data-aos="fade-up">
                <div className="row">
                    <div className="side-text col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <h1 className="heading">What our <span className="highlight">members</span> say</h1>
                        <div className="subheading">Hear from current Woodson Science Olympiad members and alumni</div>
                        <ActionButton href={"./leadership"} text={"Meet Our Officers"} />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <Quote author="Hannah Do" position="Class of '24">
                            Mrs. Babcock's room is super nice and cozy, and the back is always overflowing with Scioly
                            materials."
                        </Quote>
                        <Quote author="Ada Qin" position="States member, Class of '26">
                            Working with a group is really big for me. When I'm surrounded by people who are just as
                            committed as I am, it pushes me to work harder. Not only do you make friends, but you also
                            learn so much.
                        </Quote>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <Quote author="Andrew Kim" position="President, Class of '25">
                            Woodson Scioly is about much more than studying and taking tests. We ate, traveled, watched
                            the World Cup, and played basketball last season too. I hope future members will enjoy it as
                            much as I did last season."
                        </Quote>
                        <Quote author="Nick Tong" position="Build Captain, Class of '25">
                            Science Olympiad is a gateway for many opportunities, and it itself is an amazing
                            opportunity.
                        </Quote>
                    </div>
                </div>
            </div>

        </Body>
        <Footer/>
    </>
}

export default Index;