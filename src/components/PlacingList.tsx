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

const abbreviations = ["NaN", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"]


interface TablistProps {
    year: number;
    titles: ReactNode[];
    placings: Array<Partial<Record<number, string[]>>>;
    first: ReactNode;
}


const PlacingList: React.FC<TablistProps> = ({year, titles, placings, first}) => {
    const tabIDs = titles.map((item, index) => {
        return "tab" + year + "-" + index
    });

    const contentIDs = titles.map((item, index) => {
        return "content" + year + "-" + index
    })
    
    const contents: ReactNode[] = placings.map((competition, index) => {
        const competitionDict = placings[index];

        const placements = [];
        for (const key in competitionDict) {
            const keyNum = parseInt(key);
            if (keyNum !== 0) {
                placements.push(
                    <li>({abbreviations[keyNum]}): {competitionDict[keyNum]?.join(", ")}</li>
                )
            }
        }

        return (
            <div>
                {(competitionDict["0"]) ? 
                    (
                        <div className="overall">{competitionDict["0"]}</div>
                    ) : (
                        <></>
                    )
                }
                <ul className="placements">
                    {placements}
                </ul>
            </div>
        )
    });
    console.log(contents);


    const tabList = <>
        <ul className="nav nav-tabs" role="tablist">
            {
                titles.map((item, index) => (
                    <li className="nav-item" role="presentation">
                        {(index === 0) ?
                            (
                                <button 
                                    className="nav-link tablist-link link active" 
                                    id={tabIDs[index]} 
                                    data-bs-toggle="tab" 
                                    data-bs-target={"#" + contentIDs[index]} 
                                    type="button" 
                                    role="tab" 
                                    aria-controls={contentIDs[index]} 
                                    aria-selected="true"
                                >
                                    {item}
                                </button>
                            ) :
                            (
                                <button 
                                    className="nav-link tablist-link link" 
                                    id={tabIDs[index]} 
                                    data-bs-toggle="tab" 
                                    data-bs-target={"#" + contentIDs[index]} 
                                    type="button" 
                                    role="tab" 
                                    aria-controls={contentIDs[index]} 
                                    aria-selected="false"
                                >
                                    {item}
                                </button>
                            )
                        }
                    </li>
                ))
            }
        </ul>
        <div className="tab-content">
            {
                contentIDs.map((item, index) => (
                    <>
                        {(index === 0) ?
                            (
                                <div 
                                    className="tab-pane show active" 
                                    id={item} 
                                    role="tabpanel" 
                                    aria-labelledby={tabIDs[index]}
                                >
                                    {first}
                                </div>
                            ) :
                            (
                                <div 
                                    className="tab-pane fade" 
                                    id={item} 
                                    role="tabpanel" 
                                    aria-labelledby={tabIDs[index]}
                                >
                                    {contents[index - 1]}
                                </div>
                            )

                        }
                    </>
                ))
            }
        </div>
    </>

    return tabList;
}


export default PlacingList;