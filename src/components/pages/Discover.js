import { Link } from "react-router-dom";
import FeaturedItem from "../FeaturedItem";
import FeaturedItems from "../FeaturedItems";
import GTAV_Featured_Img from "../../resources/images/gta-featured.jpg";
import Item from "../Item";

import GTAVImg from "../../resources/images/gta5.png";
import EldenRingImg from "../../resources/images/elden-ring.jpg";
import SpidermanImg from "../../resources/images/spidey.jpg";
import HaloImg from "../../resources/images/halo.png";
import ForzaImg from "../../resources/images/forza.jpg";
import SkyrimImg from "../../resources/images/skyrim.png";
import ASCUImg from "../../resources/images/ascu.jpg";
import SB2Img from "../../resources/images/sb2.jpg";

const Discover = () => {
  return (
    <div className="page">
      <nav>
        <Link to={"/"} className="title">HERMES</Link>
        <div className="page-links">
          <Link to={"/discover"} className="active">Discover</Link>
          <Link to={"/store"}>Store</Link>
          <button className="cart-btn">Cart</button>
        </div>
      </nav>
      <div className="featured">
        <FeaturedItems>
          <FeaturedItem
            img={GTAV_Featured_Img}
            imgAlt={"GTA 5"}
            name={"GTAV"}
          />
        </FeaturedItems>
      </div>
      <section aria-label="Trending">
        <h2>Trending</h2>
        <ul className="items">
          <Item
            img={GTAVImg}
            imgAlt={"GTAV"}
            itemName={"Grand Theft Auto: V"}
          />
          <Item
            img={EldenRingImg}
            imgAlt={"Elden Ring"}
            itemName={"Elden Ring"}
          />
          <Item
            img={SpidermanImg}
            imgAlt={"Spiderman"}
            itemName={"Marvel's Spider-Man Remastered"}
          />
          <Item
            img={HaloImg}
            imgAlt={"Halo Infinite"}
            itemName={"Halo Infinite"}
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
          />
          <Item
            img={SkyrimImg}
            imgAlt={"Skyrim"}
            itemName={"The Elder Scrolls V: Skyrim"}
          />
          <Item
            img={ASCUImg}
            imgAlt={"ASCU"}
            itemName={"Assassin's Creed: Unity"}
          />
          <Item
            img={SB2Img}
            imgAlt={"Star Wars Battlefront II"}
            itemName={"Star Wars: Battlefront II"}
          />
        </ul>
      </section>
    </div>
  );
};

export default Discover;
