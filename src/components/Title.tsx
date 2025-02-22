/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 24 September 2024
 * 
 * Title element
 */


interface TitleProps {
    title: string;
    highlight: string;
    after: string;
    subtitle: string;
}


function Title({title, highlight, after, subtitle}: TitleProps) {
    return <div id="intro">
        <h1 data-aos="fade-up" className="title">
            {title} <span className="highlight">{highlight}</span> {after}
        </h1>
        <h6 data-aos="fade-up" data-aos-delay="150" id="subtitle">{subtitle}</h6>
    </div>
}


export default Title;