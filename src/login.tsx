/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 19 December 2024
 * 
 * Login page
 */


function Login() {
    return <>
        <div className="message-container">
            <div className="message-heading">Log In</div>
            <form action="" method="POST" target="_blank" className="contact-form">
                <label className="form-section"><input type="hidden" name="_next" value="" /></label>
                <label className="form-section"><input className="form-input" placeholder="Username" name="username" /></label>
                <label className="form-section"><input className="form-input" placeholder="Password" name="password" /></label>
            </form>
        </div>
    </>
}


export default Login;