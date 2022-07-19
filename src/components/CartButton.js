import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import "../css/cart-btn.css";

const CartButton = () => {
  const { getCartItems, openCart} = useContext(Context);
  const itemCount = (getCartItems()).length;

    return (
      <span className="cart-btn-container">
        <button className="cart-btn" type="button" onClick={openCart}>Cart</button>
        {itemCount > 0 && (
          <span className="cart-items-amount">{itemCount}</span>
        )}
      </span>
    );
}

export default CartButton;