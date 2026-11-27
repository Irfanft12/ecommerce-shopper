
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import allProducts from "../assets/all_product"

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem("cartItems")
            return savedCart ? JSON.parse(savedCart) : {}
        } catch {
            return {}
        }
    })

    const [orders, setOrders] = useState(() => {
        try {
            const savedOrders = localStorage.getItem("orders")
            return savedOrders ? JSON.parse(savedOrders) : []
        } catch {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders))
    }, [orders])

    const [showMenu, setShowMenu] = useState(false)

    const addToCart = (itemId, size) => {
        const cartKey = `${itemId}_${size}`

        setCartItems(prev => ({
            ...prev,
            [cartKey]: (prev[cartKey] || 0) + 1
        }))
    }

    const removeFromCart = (cartKey) => {
        setCartItems(prev => {
            const updatedCart = { ...prev }
            delete updatedCart[cartKey]
            return updatedCart
        })
    }

    const updateCartQuantity = (cartKey, quantity) => {
        setCartItems(prev => ({
            ...prev,
            [cartKey]: Math.max(0, quantity)
        }))
    }

    const clearCart = () => {
        setCartItems({})
    }

    const saveOrder = (order) => {
        setOrders(prev => [order, ...prev])
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0

        for (const cartKey in cartItems) {
            const [itemId] = cartKey.split("_")
            const itemInfo = allProducts.find(
                product => product.id === Number(itemId)
            )

            if (itemInfo && cartItems[cartKey] > 0) {
                totalAmount += itemInfo.new_price * cartItems[cartKey]
            }
        }

        return totalAmount
    }

    const getTotalCartItems = () => {
        return Object.values(cartItems).reduce(
            (total, quantity) => total + quantity,
            0
        )
    }

    function toggleMobileMenu() {
        setShowMenu(!showMenu)
    }

    function closeMobileMenu() {
        setShowMenu(false)
    }

    const contextValue = {
        allProducts,
        cartItems,
        getTotalCartItems,
        getTotalCartAmount,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        showMenu,
        toggleMobileMenu,
        closeMobileMenu,
        orders,
        saveOrder
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default ShopContextProvider
