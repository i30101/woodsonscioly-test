/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 21 September 2024
 * 
 * Navbar class
 */


interface SpacerProps {
    height: number;
}


const Spacer: React.FC<SpacerProps> = ({height}) => {
    const spacer = <div className="spacer" style={{height: height + "px"}}></div>
    
    return spacer;
}


export default Spacer;