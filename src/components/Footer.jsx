import companyLogo from "../images/footer-logo.svg"
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__head col">
                    <h3 className="footer__title">Boost your links today</h3>
                    <a href="" className="footer__link button">Get Started</a>
            </div>
            <div className="footer__links">
                <div className="container footer__links">

                <img src={companyLogo} className="footer__logo" alt="Shortly Logo"/>

                <div className="row footer__linkss">
                    <div className="col">
                        <h3 className="footer__link__title">Features</h3>
                        <ul>
                            <li className="footer__link__item"><a href="#" className="footer__link__link">Link Shortening</a></li>
                            <li className="footer__link__item"><a href="#" className="footer__link__link">Branded Links</a></li>
                            <li className="footer__link__item"><a href="#" className="footer__link__link">Analytics</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3 className="footer__link__title">Resources</h3>
                        <ul>
                            <li className="footer__link__item"><a href="#" className="footer__link__link">Blog</a></li>
                            <li className="footer__link__item"><a href="#" className="footer__link__link">Developers</a></li>
                            <li className="footer__link__item"><a href="#" className="footer__link__link">Support</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3 className="footer__link__title">Company</h3>
                        <ul>
                            <li className="footer__link__item"><a href="#" className="footer__link__link">About</a></li>
                            <li className="footer__link__item"><a href="#" className="footer__link__link">Our Team</a></li>
                            <li className="footer__link__item"><a href="#" className="footer__link__link">Carrers</a></li>
                            <li className="footer__link__item"><a href="#" className="footer__link__link">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container footer__icons row">
                    <a href="#"><i className="fa-brands fa-square-facebook footer__icon" alt="facebook Logo"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter footer__icon" alt="twitter Logo"></i></a>
                    <a href="#"><i className="fa-brands fa-pinterest footer__icon" alt="pinterest Logo"></i></a>
                    <a href="#"><i className="fa-brands fa-square-instagram footer__icon" alt="instagram Logo"></i></a>
                </div>
                </div>
            </div>
        </div>
    )
}
