/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 21 September 2024
 * 
 * Navbar class
 */


// external libraries
import React, { ReactNode } from 'react'


// components
import Rankings from './Rankings'



interface TablistProps {
    year: number;
    titles: ReactNode[];
    first: ReactNode;
}


const PlacingList: React.FC<TablistProps> = ({year, titles, first}) => {
    const tabIDs = titles.map((_, index) => (
        "tab" + year + "-" + index
    ));

    const contentIDs = titles.map((_, index) => (
        "content" + year + "-" + index
    ));
    
    const contents: ReactNode[] = titles.map((_, index) => (
        <Rankings year={year} compIndex={index} />
    ));

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