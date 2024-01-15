import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import dropdownIcon from "../assets/dropdown_icon.png";
import Item from "../components/item/Item";

import "./css/shopCategory.css";

export default function ShopCategory(props) {
  const { allProducts } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shop-category-index-sort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdownIcon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {allProducts.map((item) => {
          if (props.category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                newPrice={item.new_price}
                oldPrice={item.old_price}
              />
            );
          } else {
            return null
          }
            
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
}
