/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 13 September 2024
 * 
 * Body element
 */


import React from 'react';


// styling
import '../css/style.css';
import '../css/Body.css';

// classes
import Footer from './Footer';


function Body({ children }: {children: React.ReactNode}) {
    return (
        <div id="body">
            {children}
        </div>
    );
}

export default Body;