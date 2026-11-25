import starIcon from "../../assets/star_icon.png"
import starDullIcon from "../../assets/star_dull_icon.png"

import "./productDisplay.css"
import { useContext } from "react"
import { ShopContext } from "../../context/shopContext"

export default function ProductDisplay(props) {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
    
    return (
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-display-img">
                    <img className="product-display-main-image" src={product.image} alt="" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-stars">
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starDullIcon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="product-display-right-prices-old">${product.old_price}</div>
                    <div className="product-display-right-prices-new">${product.new_price}</div>
                </div>
                <div className="product-display-right-description">
                    {product.category === "men"
                        ? "Discover stylish men's clothing designed for everyday comfort and a modern look."
                        : product.category === "women"
                        ? "Explore stylish women's clothing that combines comfort, elegance, and everyday versatility."
                        : "Explore comfortable and stylish kids' clothing, designed for everyday activities."}
                </div>
                <div className="product-display-right-size-wrapper">
                    <h1>Select size</h1>
                    <div className="product-display-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
                <p className="product-display-right-category">
                    <span>Tag: </span> Modern, Latest
                </p>
            </div>
        </div>
    )
}
