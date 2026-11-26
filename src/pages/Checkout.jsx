
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ShopContext } from "../context/shopContext"
import "./css/checkout.css"

export default function Checkout() {
    const {
        allProducts,
        cartItems,
        getTotalCartAmount,
        clearCart,
        closeMobileMenu,
        saveOrder
    } = useContext(ShopContext)

    const navigate = useNavigate()
    const [orderDetails, setOrderDetails] = useState(null)

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

    
const handlePlaceOrder = (event) => {
    event.preventDefault()

    if (cartProducts.length === 0) {
        alert("Your cart is empty.")
        return
    }

    const formData = new FormData(event.currentTarget)

    const order = {
        orderNumber: `SHOP-${Date.now().toString().slice(-8)}`,
        date: new Date().toISOString(),
        name: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        address: formData.get("address"),
        city: formData.get("city"),
        state: formData.get("state"),
        pinCode: formData.get("pinCode"),
        items: cartProducts.map(item => ({
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.new_price,
            size: item.size,
            quantity: item.quantity
        })),
        total: getTotalCartAmount()
    }

    saveOrder(order)
    setOrderDetails(order)
    clearCart()
}


    if (orderDetails) {
        return (
            <div className="checkout">
            <div className="order-success">
                <div className="order-success-icon">
                    ✓
                </div>

                <h1>Order Placed Successfully!</h1>

                <p className="order-success-thanks">
                    Thank you, {orderDetails.name}!
                </p>

                <p className="order-success-message">
                    Your order has been confirmed successfully.
                </p>

                <div className="order-success-details">
                    <div>
                        <span>Order Number</span>
                        <strong>{orderDetails.orderNumber}</strong>
                    </div>

                    <div>
                        <span>Order Total</span>
                        <strong>${orderDetails.total}</strong>
                    </div>
                </div>

                <p className="order-demo-note">
                    This is a demo order. No actual payment has been
                    processed.
                </p>

                <button
                    className="checkout-home-button"
                    onClick={() => navigate("/")}
                >
                    CONTINUE SHOPPING
                </button>
            </div>
        </div>
        )
    }

    return (
        <div className="checkout">
            <h1>Checkout</h1>

            <div className="checkout-container">
                <div className="checkout-details">
                    <h2>Delivery Information</h2>

                    <form
                        className="checkout-form"
                        onSubmit={handlePlaceOrder}
                    >
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            pattern="[6-9][0-9]{9}"
                            maxLength="10"
                            title="Enter a valid 10-digit Indian mobile number"
                            required
                        />

                        <input
                            type="text"
                            name="address"
                            placeholder="Street Address"
                            required
                        />

                        <div className="checkout-form-row">
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                required
                            />

                            <input
                                type="text"
                                name="state"
                                placeholder="State"
                                required
                            />
                        </div>

                        <input
                            type="text"
                            name="pinCode"
                            placeholder="PIN Code"
                            pattern="[0-9]{6}"
                            maxLength="6"
                            title="Enter a valid 6-digit PIN code"
                            required
                        />

                        <button type="submit">
                            PLACE ORDER
                        </button>
                    </form>
                </div>

                <div className="checkout-summary">
                    <h2>Order Summary</h2>

                    {cartProducts.map(item => (
                        <div key={`${item.id}_${item.size}`}>
                            <p>{item.name}</p>
                            <p>Size: {item.size}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>${item.new_price * item.quantity}</p>
                        </div>
                    ))}

                    <h3>Total: ${getTotalCartAmount()}</h3>
                </div>
            </div>
        </div>
    )
}
