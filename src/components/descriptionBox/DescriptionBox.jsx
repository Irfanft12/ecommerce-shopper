import "./descriptionBox.css"

export default function DescriptionBox() {
    return (
        <div className="description-box">
            <div className="description-box-navigator">
                <div className="description-box-nav-box">Description</div>
                <div className="description-box-nav-box fade">Reviews (122)</div>
            </div>
            <div className="description-box-description">
                <p>
                    Online sales continue to grow. By 2026, almost a quarter of all retail sales are likely to happen online—so if you have a small business, you should probably have a web store. The good news is that with the right tools, it's easy for any small business to quickly start selling online. With a decent eCommerce website builder, you can list your products, take payments, and handle shipping, all without leaving the comfort of your store (or home office).
                </p>
                <p>
                    Robust analytics are important as you grow, so be sure the platform you choose is reporting on your metrics in a way you feel confident analyzing and acting on.
                </p>
            </div>
        </div>
    )
}