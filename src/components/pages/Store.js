import Item from "../Item";
import { Link } from "react-router-dom";
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

const Store = (props) => {
  const cartItemCount = props.cartData.length;

    return (
      <>
        {props.cartOpen && <Cart close={props.closeCart} items={props.cartData} addItem={props.addCartItem} removeItem={props.removeCartItem} />}
        <div className="page">
          <nav>
            <Link to={"/"} className="title">HERMES</Link>
            <div className="page-links">
              <Link to={"/discover"}>Discover</Link>
              <Link to={"/store"} className="active">Store</Link>
              <CartButton onClick={props.openCart} itemCount={cartItemCount} />
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
              addCartItem={props.addCartItem}
            />
            <Item
              img={GamepassImg}
              imgAlt={"Xbox Gamepass"}
              itemName={"Xbox Game Pass Ultimate"}
              addCartItem={props.addCartItem}
            />
            <Item
              img={EldenRingImg}
              imgAlt={"Elden Ring"}
              itemName={"Elden Ring"}
              addCartItem={props.addCartItem}
            />
            <Item
              img={SleepingDogsImg}
              imgAlt={"Sleeping Dogs"}
              itemName={"Sleeping Dogs"}
              addCartItem={props.addCartItem}
            />
            <Item
              img={SB2Img}
              imgAlt={"Star Wars Battlefront II"}
              itemName={"Star Wars: Battlefront II"}
              addCartItem={props.addCartItem}
            />
            <Item
              img={SteamGiftCardImg}
              imgAlt={"Steam Gift Card"}
              itemName={"Steam Gift Card - 50 USD"}
              addCartItem={props.addCartItem}
            />
            <Item
              img={SpidermanImg}
              imgAlt={"Spiderman"}
              itemName={"Marvel's Spider-Man Remastered"}
              addCartItem={props.addCartItem}
            />
            <Item
              img={DeadSpaceImg}
              imgAlt={"Dead Space 2"}
              itemName={"Dead Space 2"}
              addCartItem={props.addCartItem}
            />
            <Item
              img={HaloImg}
              imgAlt={"Halo Infinite"}
              itemName={"Halo Infinite"}
              addCartItem={props.addCartItem}
            />
            <Item
              img={ASCUImg}
              imgAlt={"ASCU"}
              itemName={"Assassin's Creed: Unity"}
              addCartItem={props.addCartItem}
            />
            <Item
              img={CODBO}
              imgAlt={"COD:BO2"}
              itemName={"Call Of Duty: Black Ops II"}
              addCartItem={props.addCartItem}
            />
            <Item
              img={ForzaImg}
              imgAlt={"Forza Horizon 3"}
              itemName={"Forza Horizon 3"}
              addCartItem={props.addCartItem}
            />
          </ul>
        </div>
      </>
    );
}

export default Store;