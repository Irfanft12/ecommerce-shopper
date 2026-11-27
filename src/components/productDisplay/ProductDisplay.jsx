import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import starIcon from "../../assets/star_icon.png"
import starDullIcon from "../../assets/star_dull_icon.png"

import "./productDisplay.css"
import { useContext, useState } from "react"
import { ShopContext } from "../../context/shopContext"

export default function ProductDisplay(props) {
    const { product } = props
    const { addToCart } = useContext(ShopContext)
    const [selectedSize, setSelectedSize] = useState("")
    const [isAdded, setIsAdded] = useState(false)

    const sizes = ["S", "M", "L", "XL", "XXL"]

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size")
            return
        }
    
        addToCart(product.id, selectedSize)
        setIsAdded(true)
    }

    return (
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-display-img">
                    <img
                        className="product-display-main-image"
                        src={product.image}
                        alt={product.name}
                    />
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
                    <div className="product-display-right-prices-old">
                        ${product.old_price}
                    </div>
                    <div className="product-display-right-prices-new">
                        ${product.new_price}
                    </div>
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
                        {sizes.map(size => (
                            <div
                                key={size}
                                className={selectedSize === size ? "selected" : ""}
                                onClick={() => {
                                    setSelectedSize(size)
                                    setIsAdded(false)
                                }}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={handleAddToCart}>
                    ADD TO CART
                </button>

                {isAdded && (
                    <div className="add-to-cart-success">
                        <span>✓ Added to cart successfully!</span>
                        <Link to="/cart">View Cart →</Link>
                    </div>
                )}

                <p className="product-display-right-category">
                    <span>Tag: </span> Modern, Latest
                </p>
            </div>
        </div>
    )
}

ProductDisplay.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        old_price: PropTypes.number.isRequired,
        new_price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired
    }).isRequired
}
