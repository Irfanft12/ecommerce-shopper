
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ShopContext } from "../../context/shopContext"
import removeIcon from "../../assets/cart_cross_icon.png"

import "./cartItems.css"

export default function CartItems() {
    const navigate = useNavigate()
    const {
        allProducts,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        getTotalCartAmount,
        closeMobileMenu
    } = useContext(ShopContext)

    useEffect(() => {
        closeMobileMenu()
    }, [])

    return (
        <div className="cart-items">
            <div className="cart-table">
                <div className="cart-items-format-main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>

                {Object.entries(cartItems).map(([cartKey, quantity]) => {
                    if (quantity <= 0) return null

                    const [itemId, size] = cartKey.split("_")
                    const item = allProducts.find(
                        product => product.id === Number(itemId)
                    )

                    if (!item) return null

                    return (
                        <div
                            key={cartKey}
                            className="cart-items-format cart-items-format-main"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="cart-icon-product-icon"
                            />

                            <div>
                                <p>{item.name}</p>
                                <p className="cart-item-size">
                                    Size: <strong>{size}</strong>
                                </p>
                            </div>

                            <p>${item.new_price}</p>

                            <div className="cart-quantity-control">
                                <button
                                    onClick={() => updateCartQuantity(cartKey, quantity - 1)}
                                    disabled={quantity <= 1}
                                    aria-label="Decrease quantity"
                                >
                                    −
                                </button>

                                <span>{quantity}</span>

                                <button
                                    onClick={() => addToCart(item.id, size)}
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>
                            </div>

                            <p>${item.new_price * quantity}</p>

                            <button
                                className="cart-item-remove-icon"
                                onClick={() => removeFromCart(cartKey)}
                                aria-label="Remove product"
                            >
                                <img src={removeIcon} alt="" />
                            </button>
                        </div>
                    )
                })}
            </div>

            <div className="cart-items-down">
                <div className="cart-items-total">
                    <h1>Cart Totals</h1>

                    <div>
                        <div className="cart-items-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>

                        <hr />

                        <div className="cart-items-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>

                        <hr />

                        <div className="cart-items-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>

                    <button onClick={() => navigate("/checkout")}>
                        PROCEED TO CHECKOUT
                    </button>
                </div>

                <div className="cart-items-promo-code">
                    <p>If you have a promo code, enter it here</p>

                    <div className="cart-item-promo-box">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
