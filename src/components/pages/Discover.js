import { Link } from "react-router-dom";
import GTAVImg from "../../resources/images/gta-featured.jpg";
import FeaturedItem from "../FeaturedItem";
import FeaturedItems from "../FeaturedItems";

export default function Discover()
{
    return (
      <>
        <nav>
          <Link to={"/discover"} className="active">
            Discover
          </Link>
          <Link to={"/store"}>Store</Link>
          <button className="cart-btn">Cart</button>
        </nav>
        <div className="featured">
          <FeaturedItems>
            <FeaturedItem
              img={GTAVImg}
              imgAlt={"GTA 5"}
              name={"Grand Theft Auto: V"}
            />
          </FeaturedItems>
        </div>
      </>
    );
}