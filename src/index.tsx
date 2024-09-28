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

// classes
import App from './App';
import Page from './components/Page';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);


function Index() {
    return <Page title="C. G. Woodson" highlight="Science Olympiad" after="" subtitle="Pioneers in science, engineering, and inter-disciplinary exploration">
        <div className="primary-section">
            
        </div>
    </Page>
}

export default Index;