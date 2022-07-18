import "../css/cart.css";
import CloseIcon from "../resources/images/close.png";

const Cart = ({close, items}) => {
    const cartItems = items.map(item => {
        return (
            <li key={item.name} className="cart-item">
                <span className="amount">{`${item.amount}x`}</span>
                <span className="name">{item.name}</span>
                <span className="price">{`$${item.price}`}</span>
            </li>
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
                </div>
            </div>
        </div>
    );
}

export default Cart;