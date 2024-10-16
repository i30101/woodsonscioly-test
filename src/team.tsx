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
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Title from './components/Title';



function Team() {
    return <>
        <Title title="Our" highlight="Team" after="" subtitle="Learn about the coolest scioly team in VA."></Title>
    </>
}

export default Team;