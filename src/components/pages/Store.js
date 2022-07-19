import { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import { Link } from "react-router-dom";
import Item from "../Item";
import Cart from "../Cart";

import EldenRingImg from "../../resources/images/elden-ring.jpg";
import SkyrimImg from "../../resources/images/skyrim.png";
import GamepassImg from "../../resources/images/xbox.jpeg";
import SleepingDogsImg from "../../resources/images/sleeping.jpg";
import SB2Img from "../../resources/images/sb2.jpg";
import SpidermanImg from "../../resources/images/spidey.jpg";
import SteamGiftCardImg from "../../resources/images/sgc.jpg";
import DeadSpaceImg from "../../resources/images/deadspace.jpg";
import HaloImg from "../../resources/images/halo.png";
import ASCUImg from "../../resources/images/ascu.jpg";
import CODBO from "../../resources/images/cod.jpg";
import ForzaImg from "../../resources/images/forza.jpg";
import CartButton from "../CartButton";

const Store = () => {
  const { isCartOpen } = useContext(Context);

  return (
    <>
      {isCartOpen() && <Cart />}
      <div className="page">
        <nav>
          <Link to={"/game-store"} className="title">HERMES</Link>
          <div className="page-links">
            <Link to={"/game-store/discover"}>Discover</Link>
            <Link to={"/game-store/store"} className="active">Store</Link>
            <CartButton />
          </div>
        </nav>
        <div className="sticky">
          <div className="search-bar">
            <span>Search</span>
            <input type={"text"} />
          </div>
          <div className="category-bar">
            <span>Category</span>
            <select>
              <option value={"videogames"} defaultValue>
                Video Games
              </option>
              <option value={"others"}>Others</option>
            </select>
          </div>
        </div>
        <ul className="items store">
          <Item
            img={SkyrimImg}
            imgAlt={"Skyrim"}
            itemName={"The Elder Scrolls V: Skyrim"}
          />
          <Item
            img={GamepassImg}
            imgAlt={"Xbox Gamepass"}
            itemName={"Xbox Game Pass Ultimate"}
          />
          <Item
            img={EldenRingImg}
            imgAlt={"Elden Ring"}
            itemName={"Elden Ring"}
          />
          <Item
            img={SleepingDogsImg}
            imgAlt={"Sleeping Dogs"}
            itemName={"Sleeping Dogs"}
          />
          <Item
            img={SB2Img}
            imgAlt={"Star Wars Battlefront II"}
            itemName={"Star Wars: Battlefront II"}
          />
          <Item
            img={SteamGiftCardImg}
            imgAlt={"Steam Gift Card"}
            itemName={"Steam Gift Card - 50 USD"}
          />
          <Item
            img={SpidermanImg}
            imgAlt={"Spiderman"}
            itemName={"Marvel's Spider-Man Remastered"}
          />
          <Item
            img={DeadSpaceImg}
            imgAlt={"Dead Space 2"}
            itemName={"Dead Space 2"}
          />
          <Item
            img={HaloImg}
            imgAlt={"Halo Infinite"}
            itemName={"Halo Infinite"}
          />
          <Item
            img={ASCUImg}
            imgAlt={"ASCU"}
            itemName={"Assassin's Creed: Unity"}
          />
          <Item
            img={CODBO}
            imgAlt={"COD:BO2"}
            itemName={"Call Of Duty: Black Ops II"}
          />
          <Item
            img={ForzaImg}
            imgAlt={"Forza Horizon 3"}
            itemName={"Forza Horizon 3"}
          />
        </ul>
      </div>
    </>
  );
};

export default Store;
