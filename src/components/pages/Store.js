import { Link } from "react-router-dom";
const Store = () => {
    return (
        <div className="page">
        <nav>
            <Link to={"/"} className="title">HERMES</Link>
            <div className="page-links">
                <Link to={"/discover"}>Discover</Link>
                <Link to={"/store"} className="active">Store</Link>
                <button className="cart-btn">Cart</button>
            </div>
        </nav>
        </div>
    );
}

export default Store;