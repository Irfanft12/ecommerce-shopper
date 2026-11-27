import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ShopContext } from "../../context/shopContext"
import removeIcon from "../../assets/cart_cross_icon.png"

import "./cartItems.css"

export default function CartItems() {
    const navigate = useNavigate()
    const [promoInput, setPromoInput] = useState("")
    const [promoMessage, setPromoMessage] = useState("")

    const {
        allProducts,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        getTotalCartAmount,
        closeMobileMenu,
        appliedPromoCode,
        applyPromoCode,
        removePromoCode,
        getDiscountedCartAmount
    } = useContext(ShopContext)

    const handleApplyPromo = () => {
        const isApplied = applyPromoCode(promoInput)
    
        if (isApplied) {
            setPromoMessage("Promo code applied! You saved 10%.")
            setPromoInput("")
        } else {
            setPromoMessage("Invalid promo code. Try SAVE10.")
        }
    }

    const handleRemovePromo = () => {
        removePromoCode()
        setPromoMessage("")
    }
    

    const hasCartItems = Object.values(cartItems).some(
        quantity => quantity > 0
    )

    useEffect(() => {
        closeMobileMenu()
    }, [closeMobileMenu])

    return (
        !hasCartItems ? (
        <div className="cart-empty">
            <h2>Your cart is empty</h2>
            <p>Looks like you haven&apos;t added anything to your cart yet.</p>
            <button onClick={() => navigate("/")}>
                CONTINUE SHOPPING
            </button>
        </div>
    ) : (
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

        {appliedPromoCode && (
            <div className="cart-items-total-item">
                <p>Discount (10%)</p>
                <p>-${(getTotalCartAmount() * 0.10).toFixed(2)}</p>
            </div>
        )}

        <hr />

        <div className="cart-items-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
        </div>

        <hr />

        <div className="cart-items-total-item">
            <h3>Total</h3>
            <h3>${getDiscountedCartAmount().toFixed(2)}</h3>
        </div>
    </div>

    <button
        onClick={() => navigate("/checkout")}
        disabled={!hasCartItems}
    >
        PROCEED TO CHECKOUT
    </button>
</div>

                <div className="cart-items-promo-code">
    <p>If you have a promo code, enter it here</p>

    {appliedPromoCode ? (
        <div>
            <p className="promo-message promo-success">
                {appliedPromoCode} applied successfully!
            </p>
            <button onClick={handleRemovePromo}>
                Remove
            </button>
        </div>
    ) : (
        <div className="cart-item-promo-box">
            <input
                type="text"
                placeholder="promo code"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
            />
            <button onClick={handleApplyPromo}>
                Apply
            </button>
        </div>
    )}

    {!appliedPromoCode && promoMessage && (
        <p className="promo-message promo-error">{promoMessage}</p>
    )}
</div>
            </div>
        </div>
    )
)
}
