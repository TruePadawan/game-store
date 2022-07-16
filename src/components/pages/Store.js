import Item from "../Item";
import { Link } from "react-router-dom";

import EldenRingImg from "../../resources/images/elden-ring.jpg";
import SkyrimImg from "../../resources/images/skyrim.png";
import GamepassImg from "../../resources/images/xbox.jpeg";
import SleepingDogsImg from "../../resources/images/sleeping.jpg";
import GTAVImg from "../../resources/images/gta5.png";
import SpidermanImg from "../../resources/images/spidey.jpg";
import SteamGiftCardImg from "../../resources/images/sgc.jpg";
import DeadSpaceImg from "../../resources/images/deadspace.jpg";
import HaloImg from "../../resources/images/halo.png";
import ASCUImg from "../../resources/images/ascu.jpg";
import CODBO from "../../resources/images/cod.jpg";
import ForzaImg from "../../resources/images/forza.jpg";

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
        <div className="sticky">
          <div className="search-bar">
            <span>Search</span>
            <input type={"text"} />
          </div>
          <div className="category-bar">
            <span>Category</span>
            <select>
              <option value={"videogames"} selected>
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
            img={GTAVImg}
            imgAlt={"GTAV"}
            itemName={"Grand Theft Auto: V"}
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
    );
}

export default Store;