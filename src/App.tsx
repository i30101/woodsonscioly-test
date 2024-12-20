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

import { useEffect } from "react";
import Aos from 'aos';

// styling
import 'aos/dist/aos.css'


// classes
import Index from './index';
import Tryouts from './tryouts';
import Leadership from './leadership';
import Contribute from './contribute';
import Team from './team';
import Blog from './blog';
import { Season2024, September2024, Georgia2025, Mvso2025, FlintHill2025 } from './components/Blogs';




const useAos = () => {
    useEffect(() => {
        Aos.init({ duration: 600, delay: 100})
    }, []);
};


/**
 * Web app container
 * @returns Main app container
 */
function App() {
    useAos();
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/team" element={<Team />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/tryouts" element={<Tryouts />} />
                <Route path="/contribute" element={<Contribute />} />
                <Route path="/blog/season2024" element={<Season2024 />} />
                <Route path="/blog/september2024" element={<September2024 />} />
                <Route path="/blog/georgia2025" element={<Georgia2025 />} />
                <Route path="/blog/mvso2025" element={<Mvso2025 />} />
                <Route path="/blog/fh2025" element={<FlintHill2025 />} />
            </Routes>
        </Router>
    );
}

export default App;
