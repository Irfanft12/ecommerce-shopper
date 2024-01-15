import { useContext, useState } from "react";

import logo from "../../assets/logo.png"
import cartIcon from "../../assets/cart_icon.png"
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";


export default function Navbar() {
    const [menu, setMenu] = useState("")
    const {showMenu, toggleMobileMenu, closeMobileMenu, getTotalCartItems} = useContext(ShopContext)

    

    return (
        <div className="navbar">
            <Link to="/" className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </Link>
            <ul className="nav-menu">
                <li onClick={() => setMenu("shop")}><Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("men")}><Link to="men">Men</Link> {menu === "men" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("women")}><Link to="women">Women</Link> {menu === "women" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("kids")}><Link to="kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            {
                showMenu &&   <ul className="mobile-nav-menu">
                <li onClick={() => closeMobileMenu()}><Link to="/">Shop</Link> </li>
                <li onClick={() => closeMobileMenu()}><Link to="men">Men</Link> </li>
                <li onClick={() => closeMobileMenu()}><Link to="women">Women</Link> </li>
                <li onClick={() => closeMobileMenu()}><Link to="kids">Kids</Link> </li>
            </ul>
            }
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link className="cart-link" to="/cart"><img className="cart-icon" src={cartIcon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
                <button className="menu-icon" onClick={() => toggleMobileMenu()}><AiOutlineMenu size="25px" /></button>
            </div>
        </div>
    )
}