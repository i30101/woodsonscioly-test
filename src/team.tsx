/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 12 September 2024
 * 
 * Index page
 */


import React, { ReactNode, useState } from 'react';

// styling
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import Title from './components/Title';
import PlacingList from './components/PlacingList';
import Spacer from './components/Spacer';

import './css/team.css'




const teamNames = {
    "2025": ["Team Godzilla", "Team Rodan", "Team Mothra"],
    "2024": ["Team Europa", "Team Callisto", "Team Io"],
    "2023": ["Team Aang", "Team Katara", "Team Zuko"],
    "2022": ["Team Coelacanth", "Team Oarfish", "Team Sunfish"]
};



// all teams
const allTeams = {
    "2025": [
        ["Ian Gonzalez", "Elaina Wi", "Ivy Zhao", "James Kim", "Nick Tong", "Mia Monroe", "Jamie Kim", "Vibu Vishnu Ram", "Catherine Han", "Matthew Lee", "Timothy Lin-Lee", "Andrew Kim", "Morgan Altier", "Katie Yen", "Ada Qin"],
        ["Nora Islam", "Ryan Chong", "Yeeun Kwak", "Richard He", "Enoch Tan", "Maddie Cho", "Brian Soltani", "Shaheer Khan", "Maggie Wang", "Dylan Nguyen", "Krish Stauber", "Maria Wang", "Laurent Pham", "Daniel Barnabas", "Josefien Declerk"],
        ["Madison Williams", "Ben Kralovec", "Amanda Martin", "Maya Smith", "Khoa Nguyen", "Harun Khan", "Emily Pan", "Hanru Xu", "Brian Vu", "Chenfei Zhou", "Nathan Nguyen", "WynSon Phan", "Esther Li", "Clive Song", "Sophia Li"]
    ],
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

const placings2023 = [
    {
        2: ["Forestry"],
        3: ["Astronomy"],
        5: ["Fermi Questions, Forensics"],
        6: ["It's About Time, WiFi Lab"],
    },
    {
        0: ["4th overall"],
        1: ["Bridge, Flight, Remote Sensing"],
        2: ["Experiemntal Design, Flight, Forensics, Forestry"],
        3: ["Forensics"],
        4: ["WIDI"],
        5: ["Anatomy & Physiology"],
    },
    {
        2: ["It's About Time"],
        4: ["WiFi Lab"],
        5: ["Forestry"],
    },
    {
        0: ["3rd overall"],
        1: ["Forensics"],
        2: ["Detector Building, Forestry, Forestry, It's About Time, Scrambler, Trajectory, WiFi Lab"],
        3: ["Environmental Chemistry, Experimental Design, Rocks and Minerals"],
        4: ["Bridge, Dynamic Planet, Fermi Questions"],
        5: ["Disease Detectives, WIDI"],
        6: ["Anatomy & Physiology, Chem Lab, Dynamic Planet"],
    },
    {
        0: ["4th overall"],
        1: ["Forestry"],
        2: ["Detector Building, Fermi Questions, Green Generation"],
        3: ["Forensics, It's About Time, Botany"],
        4: ["Flight, Solar Power"],
        5: ["Codebusters, Disease Detectives, Environmental Chemistry"],
        6: ["Remote Sensing, WIDI"],
    }
]

const placings2024 = [
    {
        0: ["4th overall"],
        3: ["Anatomy & Physiology", "Science in the News"],
        5: ["Science in the News"],
        7: ["Disease Detectives"],
        8: ["Disease Detectives"]
    },
    {
        0: ["2nd overall"],
        1: ["Air Trajectory", "Disease Detectives"],
        2: ["Astronomy", "Codebusters", "WIDI"],
        3: ["Anatomy & Physiology", "Astronomy", "Detector Building", "Forestry", "Tower"],
        4: ["Fossils"],
        6: ["Air Trajectory", "Dynamic Planet"]
    },
    {
        0: ["8th overall"],
        1: ["Disease Detectives"],
        4: ["Codebusters", "Robot Tour", "Tower"],
        5: ["Air Trajectory"],
        6: ["Anatomy & Physiology", "Disease Detectives"]
    },
    {
        0: ["1st overall"],
        1: ["Astronomy", "Disease Detectives", "Robot Tour", "Wind Power"],
        2: ["Air Trajectory", "Codebusters", "Dynamic Planet", "Ecology", "Geologic Mapping"],
        3: ["Air Trajectory", "Anatomy & Physiology", "Forensics", "Forestry", "Fossils"],
        4: ["Codebusters", "Disease Detectives", "Dynamic Planet", "Fermi Questions", "Forestry", "Robot Tour", "Scrambler", "Tower", "Wind Power"],
        5: ["Anatomy & Physiology", "Astronomy", "Ecology", "Robot Tour", "Tower"],
        6: ["Air Trajectory", "Fermi Questions", "Geologic Mapping"]
    },
    {
        0: ["4th overall"],
        1: ["Codebusters", "Fermi Questions", "Robot Tour"],
        2: ["Disease Detecties", "Experimental Design", "Geologic Mapping", "Agricultural Science"],
        3: ["Forensics, Cybersecurity"],
        4: ["Air Trajectory", "Anatomy & Physiology", "Forestry", "Microbe Mission", "Wind Power"],
        6: ["Dynamic Planet"]
    }
]

const placings2025 = [
    {
        0: ["2nd overall"],
        2: ["Codebusters", "Etomology"],
        3: ["Fossils", "Optics"],
        5: ["Wind Power"],
        8: ["Ecology"],
        9: ["Anatomy & Physiology"]
    },
    {
        0: ["4th overall"],
        1: ["Helicopter"],
        2: ["Codebusters", "Tower"],
        4: ["Forensics", "Fossils", "Robot Tour"],
        5: ["Entomology", "Microbe Mission", "Tower"],
        6: ["Air Trajectory", "Brainrot Battle"]
        
    }
]

interface TableProps {
    names: string[]
    members: string[][];
}

const MemberTable: React.FC<TableProps> = ({names, members}) => {
    return <table className="table team-table">
        <thead>
            <tr>
                {Array.from({length: 3}, (_, i) => (
                    <th className="team-head">{names[i]}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {Array.from({length: 15}, (_, i) => (
                <tr className="team-row">
                    {members.map((team, index) => (
                        <td className="team-data">{team[i]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
}



interface AccordionItemProps {
    year: number;
    names: string[];
    members: string[][];
    parent: string;
    collapsed: boolean;
    children?: ReactNode;
}


/**
 * Creates individual accordion section
 * @param year the last year of the sason
 * @param names the team names
 * @param members list of members per team
 * @param parent id of parent accordion container
 * @param collapsed whether the content is collapsed or not
 * @param content additional html to be included
 * @returns 
 */

const SeasonAccordion: React.FC<AccordionItemProps> = ({year, names, members, parent, collapsed, children}) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);
    
    const headingID = "heading" + year;
    const contentID = "div" + year;

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    }

    // create accordion item container
    const accordionItem = (
        <div className="accordion-item" id={"accordion" + year}>
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

            <div 
                id={contentID}
                className={`accordion-collapse collapse ${!isCollapsed ? 'show' : ''}`}
                aria-labelledby={headingID}
                data-bs-parent={parent}
            >
                <MemberTable names={names} members={members}></MemberTable>
                {children}
            </div>
        </div>
    )

    return accordionItem;
}



function Team() {
    const parentID = "teamAccordion";
    return <>
        <Title title="Our" highlight="Team" after="" subtitle="Learn about the coolest Science Olympiad team in VA."></Title>
        
        <div className="primary-section" data-aos="fade-up">
            <div className="heading-1" data-aos="fade-up">2024-2025 Season Team</div>
            <MemberTable names={teamNames[2025]} members={allTeams[2025]}/>
            <PlacingList
                year={2025}
                titles={["Season Summary", "Georgia Scrimmage", "Monta Vista Invitational"]}
                placings={placings2025}
                first={
                    <div>
                        <div className="season-text">18 medals</div>
                        <div className="season-text">Alternates: Christian Yoo, Humphrey, Lien Nguyen, Sophia Nguyen, Esther Hwang</div>
                    </div>
                } />
        </div>

        <div className="primary-section" data-aos="fade-up">
            <div className="heading-1" data-aos="fade-up">Previous Seasons</div>
            <div data-aos="fade-up" className="accordion" id={parentID}>
                <SeasonAccordion year={2024} names={teamNames[2024]} members={allTeams[2024]} parent={parentID} collapsed={true}>
                    <PlacingList
                        year={2024}
                        titles={["Season Summary", "Georgia Scrimmage", "Fairfax Invitational", "Princeton Invitational", "Fairfax Regional", "States" ]}
                        placings={placings2024}
                        first={
                            <div>
                                <div className="season-text">72 medals</div>
                                <div className="season-text">3 trophies</div>
                                <div className="season-text">Alternates: Christopher Hwang, Sonan Sahgal, Samuel Indyk</div>
                            </div>
                        }
                    />
                </SeasonAccordion>
                <SeasonAccordion year={2023} names={teamNames[2023]} members={allTeams[2023]} parent={parentID} collapsed={true}>
                    <PlacingList
                        year={2023}
                        titles={["Season Summary", "Georgia Scrimmage", "Fairfax Invitational",  "Princeton Invitational", "Thomas Jefferson Regional", "States" ]}
                        placings={placings2023}
                        first={
                            <div>
                                <div className="season-text">54 medals</div>
                                <div className="season-text">3 trophies</div>
                            </div>
                        }
                    />
                </SeasonAccordion>
                <SeasonAccordion
                    year={2022}
                    names={teamNames[2022]}
                    members={allTeams[2022]}
                    parent={parentID}
                    collapsed={true}
                />
            </div>
        </div>

    </>
}

export default Team;