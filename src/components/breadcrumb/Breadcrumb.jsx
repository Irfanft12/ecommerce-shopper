import breadcrumbArrow from "../../assets/breadcrumb-arrow.png"

import "./breadcrumb.css"

export default function Breadcrumb(props) {
    const {product} = props
    return (
        <div className="breadcrumb">
            Home <img src={breadcrumbArrow} alt="" /> Shop <img src={breadcrumbArrow} alt="" /> {product.category} <img src={breadcrumbArrow} alt="" /> {product.name}
        </div>
    )
}