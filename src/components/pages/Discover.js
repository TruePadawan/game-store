import { Link } from "react-router-dom";
import GTAVImg from "../../resources/images/gta-featured.jpg";
import FeaturedItems from "../FeaturedItems";

export default function Discover()
{
    return (
      <>
        <nav>
          <Link to={"/discover"} className="active">Discover</Link>
          <Link to={"/store"}>Store</Link>
          <button className="cart-btn">Cart</button>
        </nav>
        <div className="featured">
          <FeaturedItems>
            <img src={GTAVImg} alt={"GTA 5"} className="featured-img" />
          </FeaturedItems>
        </div>
      </>
    );
}