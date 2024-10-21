/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 21 September 2024
 * 
 * Navbar class
 */


// external libraries
import React, { ReactNode } from 'react'
import 'bootstrap'


// styling
import '../css/Navbar.css'
import '../css/Tablist.css'
import '../css/style.css'


interface TablistProps {
    year: number;
    titles: ReactNode[];
    contents: ReactNode[];
}


const Tablist: React.FC<TablistProps> = ({year, titles, contents}) => {
    const tabIDs = titles.map((item, index) => {
        return "tab" + year + "-" + index
    });

    const contentIDs = contents.map((item, index) => {
        return "content" + year + "-" + index
    })

    const tabList = <>
        <ul className="nav nav-tabs" role="tablist">
            {
                titles.map((item, index) => (
                    <li className="nav-item" role="presentation">
                        {(index === 0) ?
                            (
                                <button className="nav-link tablist-link link active" id={tabIDs[index]} data-bs-toggle="tab" data-bs-target={"#" + contentIDs[index]} type="button" role="tab" aria-controls={contentIDs[index]} aria-selected="true">{item}</button>
                            ) :
                            (
                                <button className="nav-link tablist-link link" id={tabIDs[index]} data-bs-toggle="tab" data-bs-target={"#" + contentIDs[index]} type="button" role="tab" aria-controls={contentIDs[index]} aria-selected="false">{item}</button>
                            )
                        }
                    </li>
                ))
            }
        </ul>
        <div className="tab-content">
            {
                contents.map((item, index) => (
                    <>
                        {(index === 0) ?
                            (
                                <div className="tab-pane show active" id={contentIDs[index]} role="tabpanel" aria-labelledby={tabIDs[index]}>{item}</div>
                            ) :
                            (
                                <div className="tab-pane fade" id={contentIDs[index]} role="tabpanel" aria-labelledby={tabIDs[index]}>{item}</div>
                            )

                        }
                    </>
                ))
            }
        </div>
    </>

    return tabList;
}


export default Tablist;