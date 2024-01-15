import Hero from "../components/hero/Hero";
import NewCollections from "../components/newCollections/NewCollections";
import Newsletter from "../components/newsLetter/NewsLetter";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";

export default function Shop() {
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