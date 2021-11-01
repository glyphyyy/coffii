import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="left-container">
                    <h1>Be part of an amazing savings community.</h1>
                    <p>Join today, start saving and you could earn up to 10% APR.</p>

                    <div className="box1">
                        <div className="box-top">
                            <h1>Grab a Coffii, enjoy the ride!</h1>
                            <p>Install and sign up in under 5 minutes.</p>
                        </div>
                        <div className="box-bottom">
                            <button>Install today.</button>
                        </div>
                    </div>
                    <div className="box2">
                        <div className="box-top">
                            <h1>Learn how Coffii works!</h1>
                            <p>Its quick and simple, take a look.</p>
                        </div>
                        <div className="box-bottom">
                            <button>Learn More.</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="circle" />
                <div className="circle2" />
                <div className="circle-blur" />
                <img id="phone" src="assets/phone.svg" alt="" />
                <img id="phone-grey" src="assets/phone-grey.svg" alt="" />
                <img id="phone-green" src="assets/phone-green.svg" alt="" />
                <img id="phone-button" src="assets/phone-button.svg" alt="" />
                <img id="doller" src="assets/phone-doller.svg" alt="" />
                <img id="euro" src="assets/phone-euro.svg" alt="" />
                <img id="pound" src="assets/phone-pound.svg" alt="" />
            </div>
        </div>
    )
}
