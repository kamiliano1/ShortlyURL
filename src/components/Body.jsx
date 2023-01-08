import graphIcon from "../images/icon-brand-recognition.svg"
import detailedIcon from "../images/icon-detailed-records.svg"
import paintsIcon from "../images/icon-fully-customizable.svg"

export default function Body() {
    return (
        <div className="container body">
            <h2 className="body__title">Advanced Statistics</h2>
            <p className="body__subtitle">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            <div className="row body__body">
                <div className="col">
                    <div className="body__icon">
                        <img src={graphIcon} alt="bar and line graphs icon" />
                    </div>
                    <h3 className="body__section__title">Brand Recongnition</h3>
                    <p className="body__section__body">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <span className="line__big__screen"></span>
                <div className="col body__body__second">
                <div className="body__icon body__icon__line">
                    <span className="line line__big__screen"></span>
                    <img src={detailedIcon} alt="clock icon" />
                </div>
                    <h3 className="body__section__title">Detailed Records</h3>
                    <p className="body__section__body">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <span className="line__big__screen"></span>
                <div className="col body__body__third">
                    <div className="body__icon body__icon__line">
                        <span className="line"></span>
                        <img src={paintsIcon} alt="paints icon" />
                </div>
                    <h3 className="body__section__title">Fully Customizable</h3>
                    <p className="body__section__body">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>

            </div>
            
            
            </div>
    )
}