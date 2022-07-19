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
import CartButton from "../CartButton";

const Discover = (props) => {
  const cartItemCount = props.cartData.length;

  return (
    <>
    {props.cartOpen && <Cart close={props.closeCart} items={props.cartData} addItem={props.addCartItem} removeItem={props.removeCartItem} />}
      <div className="page">
        <nav>
          <Link to={"/"} className="title">HERMES</Link>
          <div className="page-links">
            <Link to={"/discover"} className="active">Discover</Link>
            <Link to={"/store"}>Store</Link>
            <CartButton onClick={props.openCart} itemCount={cartItemCount} />
          </div>
        </nav>
        <div className="featured">
          <FeaturedItems>
            <FeaturedItem
              img={GTAVImg}
              imgAlt={"GTA 5"}
              displayName={"GTAV"}
              name={"Grand Theft Auto: V"}
              addCartItem={props.addCartItem}
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
              addCartItem={props.addCartItem}
          />
            <Item
              img={EldenRingImg}
              imgAlt={"Elden Ring"}
              itemName={"Elden Ring"}
              addCartItem={props.addCartItem}
            />
            <Item
              img={SpidermanImg}
              imgAlt={"Spiderman"}
              itemName={"Marvel's Spider-Man Remastered"}
              addCartItem={props.addCartItem}
            />
            <Item
              img={HaloImg}
              imgAlt={"Halo Infinite"}
              itemName={"Halo Infinite"}
              addCartItem={props.addCartItem}
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
              addCartItem={props.addCartItem}
            />
            <Item
              img={SkyrimImg}
              imgAlt={"Skyrim"}
              itemName={"The Elder Scrolls V: Skyrim"}
              addCartItem={props.addCartItem}
            />
            <Item
              img={ASCUImg}
              imgAlt={"ASCU"}
              itemName={"Assassin's Creed: Unity"}
              addCartItem={props.addCartItem}
            />
            <Item
              img={SB2Img}
              imgAlt={"Star Wars Battlefront II"}
              itemName={"Star Wars: Battlefront II"}
              addCartItem={props.addCartItem}
            />
          </ul>
        </section>
      </div>
    </>
  );
};

export default Discover;
