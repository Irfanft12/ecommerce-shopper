
import { useContext, useEffect } from "react"
import { ShopContext } from "../context/shopContext"
import "./css/orderHistory.css"

export default function OrderHistory() {
    const { orders, closeMobileMenu } = useContext(ShopContext)

    useEffect(() => {
        closeMobileMenu()
    }, [closeMobileMenu])

    return (
        <div className="order-history">
            <h1>My Orders</h1>

            {orders.length === 0 ? (
                <div className="order-history-empty">
                    <h2>No orders yet</h2>
                    <p>Your placed orders will appear here.</p>
                </div>
            ) : (
                <div className="order-history-list">
                    {orders.map(order => (
                        <div
                            className="order-history-card"
                            key={order.orderNumber}
                        >
                            <div className="order-history-header">
                                <div>
                                    <h3>{order.orderNumber}</h3>
                                    <p>
                                        {new Date(order.date).toLocaleDateString()}
                                    </p>
                                </div>

                                <strong>${order.total}</strong>
                            </div>

                            <div className="order-history-products">
                                {order.items.map((item, index) => (
                                    <div
                                        className="order-history-product"
                                        key={`${item.id}_${item.size}_${index}`}
                                    >
                                        <img src={item.image} alt={item.name} />

                                        <div>
                                            <h4>{item.name}</h4>
                                            <p>Size: {item.size}</p>
                                            <p>Quantity: {item.quantity}</p>
                                            <p>Price: ${item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="order-history-price-breakdown">
    <h4>Payment Summary</h4>

    <div>
        <span>Subtotal</span>
        <span>
            ${(order.subtotal ?? order.items.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            )).toFixed(2)}
        </span>
    </div>

    {order.discount > 0 && (
        <div className="order-history-discount">
            <span>
                Discount {order.promoCode ? `(${order.promoCode})` : ""}
            </span>
            <span>-${order.discount.toFixed(2)}</span>
        </div>
    )}

    <div className="order-history-final-total">
        <strong>Total</strong>
        <strong>${order.total.toFixed(2)}</strong>
    </div>
</div>

                            <div className="order-history-address">
                                <h4>Delivery Address</h4>
                                <p>{order.name}</p>
                                <p>{order.address}</p>
                                <p>
                                    {order.city}, {order.state} - {order.pinCode}
                                </p>
                                <p>Phone: {order.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
