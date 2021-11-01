import "./infoBanner.scss"

export default function InfoBanner() {
    return (
        <div className="infoBanner" id="infoBanner">
            <div className="wrapper">
                <div className="banner-img">
                    <img src="assets/banner.svg" alt="" />
                    <img id="banner-text" src="assets/banner-text.svg" alt="" />
                    <img id="banner-heart-1" src="assets/banner-heart-1.svg" alt="" />
                    <img id="banner-heart-2" src="assets/banner-heart-2.svg" alt="" />
                    <img id="banner-heart-3" src="assets/banner-heart-3.svg" alt="" />
                    <img src="assets/banner-char.svg" alt="" />
                </div>
                <div className="right-content">
                    <h1>Make your money move, together!</h1>
                    <p>Coffii has over 200,000 active members all contributing to the community savings program. Join today and be part of an awesome community of savers!</p>
                    <button>Sign up</button>
                    <p id="sign-in">Already using Coffii? <span>Sign in now!</span></p>
                </div>
            </div>
        </div>
    )
}
