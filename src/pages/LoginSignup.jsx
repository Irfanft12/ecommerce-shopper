import { useContext, useEffect } from "react"
import { ShopContext } from "../context/shopContext"

import "./css/loginsignup.css"

export default function LoginSignup() {
    const {closeMobileMenu} = useContext(ShopContext)

    useEffect(() => {
        closeMobileMenu()
    }, [])

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Signup</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" name="" id="" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="logingsignup-login">Already have an account? <span>login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}