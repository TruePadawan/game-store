import "../css/item.css";

const Item = (props) => {
    function add()
    {
        props.addToCart(props.itemName);
    }

    return (
        <li className="item">
            <button onClick={add}>Add to Cart</button>
        </li>
    );
}

export default Item;