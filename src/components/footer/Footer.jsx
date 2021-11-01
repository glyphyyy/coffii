import "./footer.scss"

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="wrapper">
                <div className="image-container">
                    <img id="main" src="assets/footer-char.svg" alt="" />
                </div>

                <div className="text-container">
                    <h1>It was good to see you :)</h1>
                    <p>Thanks for taking a look at Coffii! We hope you learned about how Coffii works, feel free to sign up and join an amazing community of individuals at any time!</p>
                    <button>Sign up today!</button>
                </div>
            </div>

            <div className="links">
                <div className="row1">
                    <img src="assets/coffii-logo.svg" alt="" />
                    <h1>Coffii, grab a cup today.</h1>
                    <p>Coffii &copy; 2021</p>
                </div>
                <div className="row2">
                    <ul>
                        <li id="header">
                            Coffii
                        </li>
                        <li>
                            <a href="#intro">Home</a>
                        </li>
                        <li>
                            <a href="#info">What is coffii?</a>
                        </li>
                        <li>
                            <a href="#infoBanner">Who are we?</a>
                        </li>
                    </ul>
                </div>
                <div className="row3">
                     <ul>
                        <li id="header">
                            Info
                        </li>
                        <li>
                            <a href="#">Cookies</a>
                        </li>
                        <li>
                            <a href="#">Terms &amp; Conditions</a>
                        </li>
                        <li>
                            <a href="#">Privacy</a>
                        </li>
                    </ul>
                </div> 
                <div className="row4">
                    <ul>
                        <li id="header">
                            Socials
                        </li>
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                    </ul>
                </div>            
            </div>
        </div>
    )
}
