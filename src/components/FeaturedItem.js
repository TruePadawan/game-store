import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import "../css/featured-item.css";

const FeaturedItem = (props) => {
  const { addCartItem } = useContext(Context);
  const addToCart = () => {
    addCartItem({
      name: props.name,
      price: 14.99,
    });
  };

  return (
    <div className="featured-item">
      <img src={props.img} alt={props.imgAlt} className="featured-item-img" />

      <div className="item-details">
        <span className="name">{props.displayName}</span>
        <span className="price">
          <span className="current">$14.99</span>
          <sub className="former">$29.99</sub>
        </span>
        <button type="button" className="add-to-cart btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FeaturedItem;
