/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 21 September 2024
 *
 * Navbar class
 */


// external libraries
import React from "react";


interface SpacerProps {
    height: number;
}


const Spacer: React.FC<SpacerProps> = ({height}) => {
    return <div className="spacer" style={{height: height + "px"}}></div>;
}


export default Spacer;