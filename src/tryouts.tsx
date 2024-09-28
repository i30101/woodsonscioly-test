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
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import Page from './components/Page';


function Tryouts() {
    return <Page title="WSO" highlight="Tryouts" after="" subtitle="Learn about WSO's tryouts system.">        
        <div className="primary-section">
            
        </div>
    </Page>
}

export default Tryouts;