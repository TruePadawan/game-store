import { createContext, useState } from "react";

export const Context = createContext({
  getCartItems : () => {},
  addCartItem : () => {},
  removeCartItem : () => {},
  isCartOpen : () => {},
  openCart : () => {},
  closeCart : () => {},
});

const ContextProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

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
    let itemIndex = cartItems.findIndex((item) => item.name === itemName);
    cartItems[itemIndex].amount -= 1;

    if (cartItems[itemIndex].amount === 0) {
      let filteredItems = cartItems.filter((item) => item.name !== itemName);
      return filteredItems;
    }
    return cartItems;
  };

  const addCartItem = (itemData) => {
    setCartItems((latest) => update(latest, itemData));
  };
  
  const removeCartItem = (itemName) => {
    setCartItems((latest) => remove(latest, itemName));
  };

  const getCartItems = () => cartItems;

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);
  const isCartOpen = () => cartOpen;

  return (
    <Context.Provider
      value={{
        getCartItems,
        addCartItem,
        removeCartItem,
        isCartOpen,
        openCart,
        closeCart,
      }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
