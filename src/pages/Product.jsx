import { useContext, useEffect } from "react"
import { ShopContext } from "../context/shopContext"
import { useParams } from "react-router-dom"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import ProductDisplay from "../components/productDisplay/ProductDisplay"
import DescriptionBox from "../components/descriptionBox/DescriptionBox"
import RelatedProducts from "../components/relatedProducts/RelatedProducts"

export default function Product() {
    const {allProducts, closeMobileMenu} = useContext(ShopContext)    
    const {productId} = useParams()
    const product = allProducts.find(e => e.id === Number(productId))    

    useEffect(() => {
        closeMobileMenu()
    }, [])

    return (
        <div>
            <Breadcrumb product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
}