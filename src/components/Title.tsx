/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 24 September 2024
 * 
 * Title element
 */

// styling

import '../css/style.css'
import '../css/Title.css'


interface TitleProps {
    title: string;
    highlight: string;
    after: string;
    subtitle: string;

}

function Title({title, highlight, after, subtitle}: TitleProps) {
    return (

        <div id="intro">
        <h1 id="title">
            {title} <span id="highlight">{highlight}</span> {after}
        </h1>
        <h6 id="subtitle">{subtitle}</h6>
    </div>
    )
}

export default Title;