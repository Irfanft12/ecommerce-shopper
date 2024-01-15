import { createContext, useState } from "react";
import allProducts from "../assets/all_product"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < allProducts.length+1; index++) {
        cart[index] = 0
    }

    return cart
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const [showMenu, setShowMenu] = useState(false)
    
    const addToCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId]+1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allProducts.find(product => {
                    return product.id === Number(item)
                })
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount
    }

    const getTotalCartItems = () => {
        let totalItem = 0
        for (const item in cartItems) {
            if (cartItems[item]> 0) {
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }

    function toggleMobileMenu() {
        setShowMenu(!showMenu)
    }

    function closeMobileMenu() {
        setShowMenu(false)
    }



    const contextValue = {allProducts, cartItems, getTotalCartItems, getTotalCartAmount, addToCart, removeFromCart, showMenu, toggleMobileMenu, closeMobileMenu}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider