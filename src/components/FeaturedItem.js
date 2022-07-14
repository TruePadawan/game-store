import "../css/featured-item.css";

const FeaturedItem = (props) => {
    return (
        <div className="featured-item">
            <img src={props.img} alt={props.imgAlt} className="featured-item-img" />

            <div className="item-details">
                <span className="name">{props.name}</span>
                <span className="price">
                    <span className="current">$14.99</span>
                    <span className="former">$29.99</span>
                </span>
                <button className="add-to-cart btn">Add to Cart</button>
            </div>
        </div>
    );
}

export default FeaturedItem;