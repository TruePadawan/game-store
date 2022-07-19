import "../css/cart.css";
import CloseIcon from "../resources/images/close.png";
import CartItem from "./CartItem";

const Cart = ({close, items, addItem, removeItem}) => {
    const cartItems = items.map(item => {
        return (
            <CartItem key={item.name} name={item.name} amount={item.amount} price={item.price} add={addItem} remove={removeItem} />
        );
    });

    const total = (items.reduce((prev, current) => {
        return prev + (current.price * current.amount);
    }, 0)).toFixed(2);

    return (
        <div className="backdrop" onClick={close}>
            <div className="cart" onClick={e => e.stopPropagation()}>
                <div className="header">
                    <h2>Cart</h2>
                    <button onClick={close} className="close-cart-btn">
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