
import { useContext, useEffect } from "react"
import { ShopContext } from "../context/shopContext"

export default function Checkout() {
    const {
        allProducts,
        cartItems,
        getTotalCartAmount,
        closeMobileMenu
    } = useContext(ShopContext)

    useEffect(() => {
        closeMobileMenu()
    }, [])

    const cartProducts = Object.entries(cartItems)
        .filter(([, quantity]) => quantity > 0)
        .map(([cartKey, quantity]) => {
            const [itemId, size] = cartKey.split("_")
            const product = allProducts.find(
                item => item.id === Number(itemId)
            )

            return product ? { ...product, size, quantity } : null
        })
        .filter(Boolean)

    return (
        <div className="checkout">
            <h1>Checkout</h1>

            <div className="checkout-container">
                <div className="checkout-details">
                    <h2>Delivery Information</h2>
                    {/* Customer form will go here */}
                </div>

                <div className="checkout-summary">
                    <h2>Order Summary</h2>

                    {cartProducts.map(item => (
                        <div key={`${item.id}_${item.size}`}>
                            <p>{item.name}</p>
                            <p>Size: {item.size}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>
                                ${item.new_price * item.quantity}
                            </p>
                        </div>
                    ))}

                    <h3>Total: ${getTotalCartAmount()}</h3>
                </div>
            </div>
        </div>
    )
}
