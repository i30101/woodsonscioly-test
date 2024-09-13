/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 12 September 2024
 * 
 * Index page
 */


import React from 'react';
import ReactDOM from 'react-dom/client';


// import main App class
import App from './App';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
