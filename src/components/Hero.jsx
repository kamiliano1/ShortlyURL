import heroLogo from "../images/illustration-working.svg"
export default function Hero(props) {

    const toggleNav = !props.navbarStatus ? "toggledNav" : ""
    return (
        <div className="container">
                <div className="hero">
                    <div className="col">
                        <h1 className="hero__title">More than just shorter links</h1>
                        <p className="hero__body">Build your brand's recongnition and get detailed insights on how your links are performing.</p>
                        <a href="" className="hero__link button">Get Started</a>
                    </div>
                    <img src={heroLogo} className={`${toggleNav} hero__image`}  alt="human siting in front of desk"/>
                </div>
                
            
        </div>
    )
}