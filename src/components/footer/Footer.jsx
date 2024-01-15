import "./footer.css"

import footerLogo from "../../assets/logo_big.png"
import instagramIcon from "../../assets/instagram_icon.png"
import pinterestIcon from "../../assets/pinterest_icon.png"
import whatsappIcon from "../../assets/whatsapp_icon.png"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={footerLogo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={instagramIcon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterestIcon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsappIcon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All rights reserved.</p>
            </div>
        </footer>
    )
}