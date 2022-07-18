import "../css/item.css";

const Item = (props) => {
  const addToCart = () => {
    props.addCartItem({
      name: props.itemName,
      price: props.price || 14.99,
    });
  };

  return (
    <li className="item">
      <div className="item-body">
        <img src={props.img} alt={props.imgAlt} />
        <button onClick={addToCart} className="add-to-cart btn">
          Add to Cart
        </button>
      </div>
      <div className="info">
        <span className="item-name">{props.itemName}</span>
        <span className="item-price">{props.price || "$14.99"}</span>
      </div>
    </li>
  );
};

export default Item;
