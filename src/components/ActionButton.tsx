/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 5 December 2024
 *
 * Action button
 */


// external libraries
import React from "react";


interface ActionButtonProps {
    text: string;
    href: string;
}


const ActionButton: React.FC<ActionButtonProps> = ({text, href}) => {
    return <a href={href} className="action-button">{text}</a>
}


export default ActionButton;