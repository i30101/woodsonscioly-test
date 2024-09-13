/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 13 September 2024
 * 
 * Main app
 */


// styling
import './css/style.css'


// classes
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

import Navbar from './Navbar';
import Home from './home'


/**
 * Web app container
 * @returns Main app container
 */
function App() {
    return (
        <body>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </body>
    );
}


export default App;
