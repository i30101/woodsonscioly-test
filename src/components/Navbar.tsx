/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 12 september 2024
 * 
 * Navbar class
 */


// assets
import cog from '../assets/site/cog.png';



/**
 * Mobile and desktop compatible navbar
 * @returns Navbar element
 */
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid" id="navbar-contents">
                <a className="navbar-brand" href="/" data-aos="fade-up">
                    <img src={cog} id="cog-logo" alt={cog} />
                    <span className="link d-none d-md-inline-block" id="logo-text">Woodson Scioly</span>
                </a>

                <a href="/" className="d-lg-none d-xl-none" id="mobile-title" data-aos="fade-up">Woodson Scioly</a>
                
                <button className="navbar-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-md-0" data-aos="fade-up" data-aos-delay="200">
                        <li className="nav-item">
                            <a className="nav-link navbar-link link" href="../team">The Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-link link" href="../leadership">Leadership</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-link link" href="../blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-link link" href="../tryouts">Tryouts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-link link" href="../contribute">Contribute</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" data-aos="fade-up" data-aos-delay="300">
                        <a href="../login"><button className="btn sign-in-button" type="submit">Log in</button></a>
                    </form>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;