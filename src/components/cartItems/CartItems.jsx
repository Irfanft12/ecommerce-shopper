import { useContext, useEffect } from "react"
import { ShopContext } from "../../context/shopContext"
import removeIcon from "../../assets/cart_cross_icon.png"


import "./cartItems.css"

export default function CartItems() {
    const {allProducts, cartItems, removeFromCart, getTotalCartAmount, toggleMobileMenu} = useContext(ShopContext)

    useEffect(() => {
        toggleMobileMenu(false)
        console.log("useeffect")
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
            {allProducts?.map(item => {
                if (cartItems[item.id] > 0) {
                    return (
                        <div key={item.id} className="cart-items-format cart-items-format-main">
                            <img src={item.image} alt="" className="cart-icon-product-icon" />
                            <p>{item.name}</p>
                            <p>${item.new_price}</p>
                            <p className="cart-items-quantity">{cartItems[item.id]}</p>
                            <p>{item.new_price*cartItems[item.id]}</p>
                            <button className="cart-item-remove-icon" onClick={() => removeFromCart(item.id)}>
                                <img src={removeIcon} alt="" />
                            </button>
                        </div>
                    )
                }
                return null
                
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
                    <button>PROCEED TO CHECKOUT</button>
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