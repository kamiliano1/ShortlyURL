
import companyLogo from "../images/nav-logo.svg"

export default function Navbar(props) {

    const toggleNav = props.navbarStatus ? "toggledNav" : ""
    return (
        <div className="container">
            <div className="row nav">
                <div className="nav__head">
                    <img src={companyLogo} className="nav__logo" alt="Shortly Logo"/>
                    <span className="hamburger" onClick={props.toggleNavbar}></span>
                </div>
                <ul className={`${toggleNav} nav__links row`}>
                    <li className="nav__item"><a href="#" className="nav__link">Features</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Pricing</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Resources</a></li>
                    <span className="nav__line"></span>
                    <li className="nav__item nav__right"><a href="#" className="nav__link">Login</a></li>
                    <li className="nav__item"><a href="#" className="nav__link button nav__button">Sign Up</a></li>
                </ul>
            </div>

        </div>
    )
}