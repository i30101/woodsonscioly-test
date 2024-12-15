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
import '../components-css/Navbar.css'
import '../components-css/PlacingList.css'
import '../css/style.css'

const abbreviations = ["NaN", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"]


interface TablistProps {
    year: number;
    titles: ReactNode[];
    placings: Array<Partial<Record<number, string[]>>>;
    first: ReactNode;
}

const PlacingList: React.FC<TablistProps> = ({year, titles, placings, first}) => {
    const tabIDs = titles.map((_, index) => {
        return "tab" + year + "-" + index;
    });

    const contentIDs = titles.map((_, index) => {
        return "content" + year + "-" + index;
    })
    
    const contents: ReactNode[] = placings.map((competition) => {
        const competitionDict = competition;

        const placements = [];
        for (const rankRaw in competitionDict) {
            const rankNum = parseInt(rankRaw);
            if (rankNum !== 0) {
                const ranks = competitionDict[rankNum];
                if (ranks) {
                    for (const eventRaw in ranks) {
                        const event = ranks[Number(eventRaw)]
                        if (event) {
                            console.log("rankNum: " + rankNum)
                            if (rankNum !== 0) {
                                placements.push(
                                    <div className="rank col-xs-12 col-sm-12 col-md-4 col-lg-4" key={`${rankNum}-${eventRaw}-${event}`}>
                                        <div className={"rank-icon rank-" + abbreviations[rankNum]}>{rankNum}</div>
                                        <span className="rank-events">{event}</span>
                                    </div>
                                )
                            }
                        }
                    }
                } 
            }
        }

        return (
            <div className="placing-container">
                <div className="placing-list">
                    {(competitionDict["0"]) ? 
                        (
                            <div className="overall">{competitionDict["0"] + ", " + placements.length + " medals"}</div>
                        ) : (
                            <div className="overall">{placements.length + " medals"}</div>
                        )
                    }
                    <div className="placements row">
                        {placements}
                    </div>
                </div>
            </div>
        )
    });

    const tabList = <div className="placing-list">
        <ul className="nav nav-tabs" role="tablist">
            {
                titles.map((item, index) => (
                    <li key={"nav" + index} className="nav-item" role="presentation">
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
                    (index === 0) ?
                        <div className="tab-pane show active" id={item} role="tabpanel" aria-labelledby={tabIDs[index]} >
                            {first}
                        </div>
                        :
                        <div className="tab-pane fade" id={item} role="tabpanel" aria-labelledby={tabIDs[index]} >
                            {contents[index - 1]}
                        </div>
                ))
            }
        </div>
    </div >

    return tabList;
}


export default PlacingList;