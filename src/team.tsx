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

    for (let i = 0; i < 15; i++) {

    }

    // create content (table container)
    const body = (
        <div 
            id={contentID}
            className={`accordion-collapse collapse ${!isCollapsed ? 'show' : ''}`}
            aria-labelledby={headingID}
            data-bs-parent={parent}
        >
            test
            {children}
        </div>
    )

    // create accordion item container
    const accordion = (
        <div className="accordion-item" id={"accordion" + year}>
            {title}
            {body}
        </div>
    )

    return accordion;
}




function Team() {
    const parentID = "teamAccordion";
    return <>
        <Title title="Our" highlight="Team" after="" subtitle="Learn about the coolest Science Olympiad team in VA."></Title>
        <div data-aos="fade-up" className="accordion" id={parentID}>
            <AccordionItem
                year={2024}
                names={["test"]}
                members={[["test"]]}
                parent={parentID}
                collapsed={true}
            >
                hi
            </AccordionItem>
            <AccordionItem
                year={2023}
                names={["test"]}
                members={[["test"]]}
                parent={parentID}
                collapsed={true}
            >
                hi
            </AccordionItem>
        </div>
    </>
}

export default Team;