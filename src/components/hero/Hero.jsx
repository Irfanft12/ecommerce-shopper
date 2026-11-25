import { Link } from "react-router-dom";
import "./Hero.css"
import handIcon from "../../assets/hand_icon.png"
import arrowIcon from "../../assets/arrow.png"
import heroImage from "../../assets/hero_image.png"

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={handIcon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>For everyone</p>
                </div>
                <Link to="/" className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrowIcon} alt="" />
                </Link>
            </div>
            <div className="hero-right">
                <img src={heroImage} alt="" />
            </div>
        </div>
    )
}
