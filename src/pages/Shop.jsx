import { useContext, useEffect } from "react";
import Hero from "../components/hero/Hero";
import NewCollections from "../components/newCollections/NewCollections";
import Newsletter from "../components/newsletter/Newsletter";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";
import { ShopContext } from "../context/shopContext";

export default function Shop() {
    const {closeMobileMenu} = useContext(ShopContext)

    useEffect(() => {
        closeMobileMenu()
    }, [])

    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <Newsletter />
        </div>
    )
}