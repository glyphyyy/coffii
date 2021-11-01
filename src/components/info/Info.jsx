import "./info.scss"

export default function Info() {
    return (
        <div className="info" id="info">
            <div className="circle"></div>
            <div className="left">
                <div className="left-container">
                    <div className="left-top">
                        <div className="circle1">1</div>
                        <h1>Install the app and sign up.</h1>
                        <p>Simply install the app from google play and the apple store. Then its just a quick sign up from there.</p>
                    </div>
                    <div className="left-bottom">
                        <div className="circle2">2</div>
                        <h1>Choose from a range of plans.</h1>
                        <p>Coffii has many different plans for all types of savers!</p>
                    </div>
                </div>
            </div>
            <div className="middle">
                <div className="text-container">
                    <h1>What is Coffii?</h1>
                    <p>Coffii is a savings app where you, the community, decide where to invest.</p>
                </div>
                <div className="image-container">
                    <img id="phone" src="assets/phone.svg" alt="" />
                    <img id="phone-top" src="assets/phone-top.svg" alt="" />
                    <img id="phone-download-bg" src="assets/phone-download-bg.svg" alt="" />
                    <img id="phone-lightarrow" src="assets/phone-download-lightarrow.svg" alt="" />
                    <img id="phone-darkarrow" src="assets/phone-download-darkarrow.svg" alt="" />
                    <img id="phone-plan-a" src="assets/phone-plan-a.svg" alt="" />
                    <img id="phone-plan-b" src="assets/phone-plan-b.svg" alt="" />
                    <img id="phone-plan-c" src="assets/phone-plan-c.svg" alt="" />
                    <img id="phone-grey-alt" src="assets/phone-grey-alt.svg" alt="" />
                    <img id="phone-green" src="assets/phone-green.svg" alt="" />
                    <img id="phone-graph" src="assets/phone-graph.svg" alt="" />
                    <img id="phone-money" src="assets/phone-money.svg" alt="" />
                    <img id="phone-button" src="assets/phone-button.svg" alt="" />
                    <img id="phone-support-boxes" src="assets/phone-support-boxes.svg" alt="" />
                    <img id="phone-support-text" src="assets/phone-support-text.svg" alt="" />
                    <img id="phone-support-heart-1" src="assets/phone-support-heart-1.svg" alt="" />
                    <img id="phone-support-heart-2" src="assets/phone-support-heart-2.svg" alt="" />
                    <img id="phone-support-green" src="assets/phone-support-green.svg" alt="" />
                    <img id="phone-support-button" src="assets/phone-support-button.svg" alt="" />
                    <img id="phone-heart" src="assets/phone-heart.svg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="right-container">
                        <div className="right-top">
                            <div className="circle3">3</div>
                            <h1>Add and withdraw funds.</h1>
                            <p>Add and withdraw your money at anytime, its that simple.</p>
                        </div>
                        <div className="right-bottom">
                            <div className="circle4">4</div>
                            <h1>Choose as a community where to invest.</h1>
                            <p>Vote weekly as a community to choose where to invest your funds together!</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}
