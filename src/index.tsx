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
import './css/index.css';



// Classes
import App from './App';
import Navbar from './Navbar'

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Navbar />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
