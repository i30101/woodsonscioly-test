/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 13 September 2024
 * 
 * Body element
 */


function Body({ children }: {children: React.ReactNode}) {
    return (
        <div id="body" data-aos="fade-up">
            {children}
        </div>
    );
}


export default Body;