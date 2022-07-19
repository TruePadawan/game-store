import "../css/cart.css";

const CartItem = ({ name, amount, price, add, remove }) => {
    const increment = () => {
        add({name, price});
    }
    const decrement = () => {
        remove(name);
    }
  return (
    <li className="cart-item">
      <div className="info">
        <span className="amount">{`${amount}x`}</span>
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <div className="controls">
        <button className="increment" onClick={increment}>+</button>
        <button className="decrement" onClick={decrement}>-</button>
      </div>
    </li>
  );
};

export default CartItem;
