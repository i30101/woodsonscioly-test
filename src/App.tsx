/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 13 September 2024
 * 
 * Main app
 */


import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'


// styling
import './css/style.css'


// classes
import Navbar from './components/Navbar';
import Index from './index';
import Tryouts from './tryouts';
import Leadership from './leadership';
import Contribute from './contribute';
import Team from './team';
import Body from './components/Body';
import Footer from './components/Footer';


/**
 * Web app container
 * @returns Main app container
 */
function App() {
    return (
        <Router>
            <Navbar/>
            <Body>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/leadership" element={<Leadership />} />
                    <Route path="/tryouts" element={<Tryouts />} />
                    <Route path="/contribute" element={<Contribute />} />
                </Routes>
            </Body>
            <Footer />
        </Router>
    );
}


export default App;
