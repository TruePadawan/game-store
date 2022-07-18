import Cart from "../Cart";
import { Link } from "react-router-dom";
import FeaturedItem from "../FeaturedItem";
import FeaturedItems from "../FeaturedItems";
import Item from "../Item";

import GTAVImg from "../../resources/images/gta-featured.jpg";
import DeadSpaceImg from "../../resources/images/deadspace.jpg";
import EldenRingImg from "../../resources/images/elden-ring.jpg";
import SpidermanImg from "../../resources/images/spidey.jpg";
import HaloImg from "../../resources/images/halo.png";
import ForzaImg from "../../resources/images/forza.jpg";
import SkyrimImg from "../../resources/images/skyrim.png";
import ASCUImg from "../../resources/images/ascu.jpg";
import SB2Img from "../../resources/images/sb2.jpg";

const Discover = ({cartOpen, openCart, closeCart, addCartItem, cartData}) => {
  return (
    <>
    {cartOpen && <Cart close={closeCart} items={cartData} />}
      <div className="page">
        <nav>
          <Link to={"/"} className="title">HERMES</Link>
          <div className="page-links">
            <Link to={"/discover"} className="active">Discover</Link>
            <Link to={"/store"}>Store</Link>
            <button className="cart-btn" type="button" onClick={openCart}>Cart</button>
          </div>
        </nav>
        <div className="featured">
          <FeaturedItems>
            <FeaturedItem
              img={GTAVImg}
              imgAlt={"GTA 5"}
              displayName={"GTAV"}
              name={"Grand Theft Auto: V"}
              addCartItem={addCartItem}
            />
          </FeaturedItems>
        </div>
        <section aria-label="Trending">
          <h2>Trending</h2>
          <ul className="items">
          <Item
            img={DeadSpaceImg}
            imgAlt={"Dead Space 2"}
            itemName={"Dead Space 2"}
              addCartItem={addCartItem}
          />
            <Item
              img={EldenRingImg}
              imgAlt={"Elden Ring"}
              itemName={"Elden Ring"}
              addCartItem={addCartItem}
            />
            <Item
              img={SpidermanImg}
              imgAlt={"Spiderman"}
              itemName={"Marvel's Spider-Man Remastered"}
              addCartItem={addCartItem}
            />
            <Item
              img={HaloImg}
              imgAlt={"Halo Infinite"}
              itemName={"Halo Infinite"}
              addCartItem={addCartItem}
            />
          </ul>
        </section>
        <section aria-label="On Sale">
          <h2>On Sale</h2>
          <ul className="items">
            <Item
              img={ForzaImg}
              imgAlt={"Forza Horizon 3"}
              itemName={"Forza Horizon 3"}
              addCartItem={addCartItem}
            />
            <Item
              img={SkyrimImg}
              imgAlt={"Skyrim"}
              itemName={"The Elder Scrolls V: Skyrim"}
              addCartItem={addCartItem}
            />
            <Item
              img={ASCUImg}
              imgAlt={"ASCU"}
              itemName={"Assassin's Creed: Unity"}
              addCartItem={addCartItem}
            />
            <Item
              img={SB2Img}
              imgAlt={"Star Wars Battlefront II"}
              itemName={"Star Wars: Battlefront II"}
              addCartItem={addCartItem}
            />
          </ul>
        </section>
      </div>
    </>
  );
};

export default Discover;
