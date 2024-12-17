/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 13 December 2024
 * 
 * Quote box
 */


import '../css/components.css'

import quoteMark from '../assets/icons/quote.svg'


interface QuoteProps {
    author: string;
    position: string;
    children: React.ReactNode;
}

function Quote({author, position, children}: QuoteProps) {
    return <div className="quote-box">
        <div className="quote-text">{children}</div>
        <div className="quote-info">
            <div className="quote-icon">
                <div className="icon-container">
                    <img src={quoteMark} alt="quote mark" />
                </div>
            </div>
            <div className="quote-details">
                <div className="quote-author">{author}</div>
                <div className="quote-position">{position}</div>
            </div>
        </div>
    </div>
}

export default Quote;
