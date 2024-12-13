/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 13 December 2024
 * 
 * Quote box
 */


import '../components-css/Components.css'

import quoteMark from '../assets/icons/quote.svg'


interface QuoteProps {
    author: string;
    position: string;
    quote: string;
}

function Quote({author, position, quote}: QuoteProps) {
    return <div className="quote-box">
        <div className="quote-text">{quote}</div>
        <div className="quote-details">
            <div className="quote-icon">
                <img src={quoteMark} alt="quote mark" />
            </div>
            <div className="quote-details">
                <div className="quote-author">{author}</div>
                <div className="quote-position">{position}</div>
            </div>
        </div>
    </div>
}

export default Quote;
