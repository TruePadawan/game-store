import "../css/cart-btn.css";

const CartButton = (props) => {
    return (
      <span className="cart-btn-container">
        <button className="cart-btn" type="button" onClick={props.onClick}>Cart</button>
        {props.itemCount > 0 && (
          <span className="cart-items-amount">{props.itemCount}</span>
        )}
      </span>
    );
}

export default CartButton;