import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Discover from "./components/pages/Discover";
import Store from "./components/pages/Store";

const RouteSwitch = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const _openCart = () => setCartOpen(true);
  const _closeCart = () => setCartOpen(false);

  const update = (prevItems, { name, price }) => {
    let items = [...prevItems];
    const index = items.findIndex((item) => item.name === name);
    if (index === -1)
    {
      items.push({ name, price, amount : 1 });
    }
    else {
      items[index].amount += 1;
    }
    return items;
  };

  const remove = (latest, itemName) => {
    let cartItems = [...latest];
    let itemIndex = cartItems.findIndex(item => item.name === itemName);
    cartItems[itemIndex].amount -= 1;
    
    if (cartItems[itemIndex].amount === 0)
    {
      let filteredItems = cartItems.filter(item => item.name !== itemName);
      return filteredItems;
    }
    return cartItems;
  }

  const removeCartItem = (itemName) => {
    setCartItems(latest => remove(latest, itemName));
  }

  const addCartItem = (itemData) => {  
    setCartItems(latest => update(latest, itemData));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="discover"
          element={
            <Discover
              openCart={_openCart}
              closeCart={_closeCart}
              cartOpen={cartOpen}
              addCartItem={addCartItem}
              removeCartItem={removeCartItem}
              cartData={cartItems}
            />
          }
        />
        <Route
          path="store"
          element={
            <Store
              openCart={_openCart}
              closeCart={_closeCart}
              cartOpen={cartOpen}
              addCartItem={addCartItem}
              removeCartItem={removeCartItem}
              cartData={cartItems}
            />
          }
        />
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here.</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
