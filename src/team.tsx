/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 12 September 2024
 * 
 * Index page
 */


import React, { Children, ReactElement, useState } from 'react';
import ReactDOM from 'react-dom/client';

// styling
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import Title from './components/Title';


import './css/team.css'




let teamNames = {
    "2024": ["Team Europa", "Team Callisto", "Team Io"],
    "2023": ["Team Aang", "Team Katara", "Team Zuko"],
    "2022": ["Team Coelacanth", "Team Oarfish", "Team Sunfish"]
};



// all teams
let allTeams = {
    "2024": [
        ["Zahra Ramakdawala", "Ian Gonzalez", "James Kim", "Lavanya Mahajan", "Benjamin Hall", "Mia Monroe", "Boram Min", "Cassie Liu", "Matthew Lee", "Andrew Kim", "Sophia Huh", "Morgan Altier", "Ada Qin", "Enzo Hiu", "Katie Yen"],
        ["Madison Williams", "Brian Soltani", "Sariya Juntima", "Audrey Kan", "Enoch Tan", "Richard He", "Harun Khan", "Anh Phan", "Lucas Shen", "Heman Bekele", "Kyle Fernandez", "Nathan Nguyen", "Brian Vu", "Meklit Demile", "Lien Nguyen"],
        ["Elaina Wi", "Breanna Ngo", "Ivy Zhao", "Jamie Kim", "Nick Tong", "Esther Hwang", "Hannah Do", "Kevin Benoy", "Jacob Lee", "Shaheer Khan", "Austin Cui", "Dylan Nguyen", "WynSon Phan", "Catherine Han", "Sailee Varde"]
    ],
    "2023": [
        ["Hailey Pan", "Sophia Huh", "Zahra Ramakdawala", "Kevin Benoy", "Temm Phan", "Leo Lee", "Viet Huynh", "Matthew Lee", "Aaron Li", "Cyrus Collins", "Ben Hall", "Andrew Kim", "Lavanya Mahajan", "Austin Cui", "Ada Qin"], 
        ["Christopher Hwang", "James Kim", "Rushil Punukollu", "Enzo Hiu", "Joseph Tso ", "Stephen Labys", "Emily Cui", "Boram Min", "Breanna Ngo", "Nick Tong ", "Ivy Zhao", "Catherine Han", "Andrew Zheng", "Brian Vu", "Andre Mao"], 
        ["Christine Nguyen", "Alice Lee", "Srivi Komireddy", "Nick Siew", "Indra Ranjan", "Cassie Liu", "Morgan Altier", "Jason Yoder", "Sonan Sahgal", "Susan Wang Andera", "Ryanne Juntima", "Hannah Do", "Enoch Tan", "Shaheer Khan", "Yool Lim"]
    ],
    
    "2022": [
        ["Nicole Choe", "Hailey Pan", "Emily Nguyen", "Daniel Sitrin", "Pierre Tran", "Ja Zhua Cheng", "Sammy Kee", "Junting Huo", "Temm Phan", "Leo Lee", "Matthew Lee", "Aaron Li", "Austin Cui", "Austin Song", "Zahra Ramakdawala"],
        ["Thomas Guo", "Boram Min", "Jason Valdez", "Markus Lin", "Joseph Tso ", "Rushil Punukollu", "Lavanya Mahajan", "Quan Huynh", "Cyrus Collins", "Enzo Hiu", "Nour Mohamed", "Sophia Huh", "Bomi Shin", "Sariya Juntima", "Emily Cui"],
        ["May Paek", "Sebastian Freemeyer", "Andrew Kim", "Viet Huynh", "Stephen Labys", "Kevin Benoy", "Gio Park", "Pranaav Yelchuru", "Isabella Anderson", "William Brenningmeyer", "Christine Nguyen", "Breanna Ngo", "Catherine Han", "Benjamin Hall", ""]
    ],
};


interface AccordionItemProps {
    year: number;
    names: Array<string>;
    members: Array<Array<string>>;
    parent: string;
    collapsed: boolean;
    children?: React.ReactNode;
}


/**
 * Creates individual accordion section
 * @param year the last year of the sason
 * @param names the team names
 * @param members list of members per team
 * @param parent id of parent accordion container
 * @param content additional html to be included
 * @param collapsed whether the content is collapsed or not
 * @returns 
 */

const AccordionItem: React.FC<AccordionItemProps> = ({year, names, members, parent, collapsed, children}) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);
    
    const headingID = "heading" + year;
    const contentID = "div" + year;

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    }

    // create title
    const title = (
        <h2 className="accordion-header" id={headingID}>
            <button 
                className={`accordion-button ${isCollapsed ? 'collapsed' : ''}`}
                type="button"
                data-bs-target={"#" + contentID}
                aria-expanded={collapsed}
                aria-controls={contentID}
                onClick={handleToggle}
            >
                {year - 1 + "-" + year + " Season"}
            </button>
        </h2>
    )


    const tableHead = (
        <thead className="team-head">
            <tr>
                {Array.from({ length: 3 }, (_, i) => (
                    <th className="team-head" scope="col">{names[i]}</th>
                ))}
            </tr>
        </thead>
    );


    const tableBody = (
        <tbody className="team-body">
            {Array.from({ length: 15 }, (_, i) => (
                <tr className="team-row">
                    {members.map((team, index) => (
                        <td className="team-data" >{team[i]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );

    const table = <table className="table team-table">
        {tableHead}
        {tableBody}
    </table>


    // create content (table container)
    const body = (
        <div 
            id={contentID}
            className={`accordion-collapse collapse ${!isCollapsed ? 'show' : ''}`}
            aria-labelledby={headingID}
            data-bs-parent={parent}
        >
            {table}
            {children}
        </div>
    )

    // create accordion item container
    const accordionItem = (
        <div className="accordion-item" id={"accordion" + year}>
            {title}
            {body}
        </div>
    )

    return accordionItem;
}




function Team() {
    const parentID = "teamAccordion";
    return <>
        <Title title="Our" highlight="Team" after="" subtitle="Learn about the coolest Science Olympiad team in VA."></Title>
        <div data-aos="fade-up" className="accordion" id={parentID}>
            <AccordionItem
                year={2024}
                names={teamNames[2024]}
                members={allTeams[2024]}
                parent={parentID}
                collapsed={true}
            >
                hi
            </AccordionItem>
            <AccordionItem
                year={2023}
                names={teamNames[2023]}
                members={allTeams[2023]}
                parent={parentID}
                collapsed={true}
            >
                <div className="accomplishments-section">
                    <div className="accomplishments-title">Season Accomplishments</div>
                    <br />
                    <div className="competition">
                        <span className="competition-name">Georgia Scrimmage:</span>
                        <ul>
                            <li>Astronomy (3rd)</li>
                            <li>Fermi Questions (5th)</li>
                            <li>Forensics (5th)</li>
                            <li>Forestry (2th)</li>
                            <li>It's About Time (6th)</li>
                            <li>WiFi Lab (6th)</li>
                        </ul>
                    </div>
                    <div className="competition">
                        <span className="competition-name">Fairfax Invitational (4th):</span>
                        <ul>
                            <li>Anatomy and Physiology(5th)</li>
                            <li>Bridge (1st)</li>
                            <li>Experimental Design (2nd)</li>
                            <li>Flight (1st, 2nd)</li>
                            <li>Forensics (2nd, 3rd)</li>
                            <li>Forestry (2nd)</li>
                            <li>Remote Sensing (1st)</li>
                            <li>WiFi Lab (5th)</li>
                            <li>WIDI (4th)</li>
                        </ul>
                    </div>
                    <div className="competition">
                        <span className="competition-name">Princeton Invitational:</span>
                        <ul>
                            <li>Forestry (5th)</li>
                            <li>It's About Time (2nd)</li>
                            <li>WiFi Lab (2nd)</li>
                        </ul>
                    </div>
                    <div className="competition">
                        <span className="competition-name">Regionals (3rd):</span>
                        <ul>
                            <li>Anatomy and Physiology(6th)</li>
                            <li>Bridge (4th)</li>
                            <li>Chem Lab (6th)</li>
                            <li>Detector Building (2nd)</li>
                            <li>Disease Detectives (5th)</li>
                            <li>Dynamic Planet (4th, 6th)</li>
                            <li>Environmental Chemistry (3rd)</li>
                            <li>Experimental Design (3rd, 5th)</li>
                            <li>Fermi Questions (4th)</li>
                            <li>Forensics (1st)</li>
                            <li>Forestry (2nd)</li>
                            <li>It's About Time (2nd)</li>
                            <li>Rocks and Minerals (3rd)</li>
                            <li>Scrambler (2nd)</li>
                            <li>Trajectory (2nd)</li>
                            <li>WIDI (4th, 5th)</li>
                            <li>WiFi Lab (2nd)</li>
                        </ul>
                    </div>
                    <div className="competition">
                        <span className="competition-name">States (4th):</span>
                        <ul>
                            <li>Codebusters (5th)</li>
                            <li>Detector Building (2nd)</li>
                            <li>Disease Detectives (5th)</li>
                            <li>Environmental Chemistry (5th)</li>
                            <li>Fermi Questions (2nd)</li>
                            <li>Flight (4th)</li>
                            <li>Forensics (3rd)</li>
                            <li>Forestry (1st)</li>
                            <li>Green Generation (2nd)</li>
                            <li>It's About Time (3rd)</li>
                            <li>Remote Sensing (6th)</li>
                            <li>WIDI (6th)</li>
                            <li>Botany (3rd)</li>
                            <li>Solar Power (4th)</li>
                        </ul>
                    </div>
                    <br />
                    Total: 3 trophies and 54 medals
                </div>
            </AccordionItem>
            <AccordionItem
                year={2022}
                names={teamNames[2022]}
                members={allTeams[2022]}
                parent={parentID}
                collapsed={true}
            >

            </AccordionItem>
        </div>
    </>
}

export default Team;