import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import CloseIcon from "../resources/images/close.png";
import CartItem from "./CartItem";
import "../css/cart.css";

const Cart = () => {
    const { closeCart, getCartItems, addCartItem, removeCartItem } = useContext(Context);
    
    const items = getCartItems();
    const cartItems = items.map(item => {
        return (
            <CartItem key={item.name} name={item.name} amount={item.amount} price={item.price} add={addCartItem} remove={removeCartItem} />
        );
    });

    const total = (items.reduce((prev, current) => {
        return prev + (current.price * current.amount);
    }, 0)).toFixed(2);

    return (
        <div className="backdrop" onClick={closeCart}>
            <div className="cart" onClick={e => e.stopPropagation()}>
                <div className="header">
                    <h2>Cart</h2>
                    <button onClick={closeCart} className="close-cart-btn">
                        <img src={CloseIcon} alt="Close" />
                    </button>
                </div>
                <div className="body">
                    <ul className="cart-items">{cartItems}</ul>
                    <div className="total">
                        <span>Total</span>
                        <span>{`$${total}`}</span>
                    </div>
                    <button type="button" className="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;