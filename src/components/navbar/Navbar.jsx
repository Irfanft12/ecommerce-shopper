import { useContext, useEffect, useRef } from "react";

import logo from "../../assets/logo.png"
import cartIcon from "../../assets/cart_icon.png"
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";


export default function Navbar() {
    const {showMenu, toggleMobileMenu, closeMobileMenu, getTotalCartItems} = useContext(ShopContext)
    const navbarRef = useRef(null)

useEffect(() => {
    if (!showMenu) return

    const handleOutsideClick = (event) => {
        if (
            navbarRef.current &&
            !navbarRef.current.contains(event.target)
        ) {
            closeMobileMenu()
        }
    }

    const handleEscape = (event) => {
        if (event.key === "Escape") {
            closeMobileMenu()
        }
    }

    document.addEventListener("pointerdown", handleOutsideClick)
    document.addEventListener("keydown", handleEscape)

    return () => {
        document.removeEventListener("pointerdown", handleOutsideClick)
        document.removeEventListener("keydown", handleEscape)
    }
}, [showMenu, closeMobileMenu])
    
    return (
        <div className="navbar" ref={navbarRef}>
            <Link to="/" className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </Link>
            <ul className="nav-menu">
                <li><NavLink to="/">Shop</NavLink></li>
                <li><NavLink to="men">Men</NavLink></li>
                <li><NavLink to="women">Women</NavLink></li>
                <li><NavLink to="kids">Kids</NavLink></li>
            </ul>
            {
                showMenu &&   <ul className="mobile-nav-menu">
                <li onClick={() => closeMobileMenu()}><NavLink to="/">Shop</NavLink> </li>
                <li onClick={() => closeMobileMenu()}><NavLink to="men">Men</NavLink> </li>
                <li onClick={() => closeMobileMenu()}><NavLink to="women">Women</NavLink> </li>
                <li onClick={() => closeMobileMenu()}><NavLink to="kids">Kids</NavLink> </li>
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
