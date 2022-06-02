import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.items.price * action.items.amount;

    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.items.id
    );
    let updatedCartItem;
    if (existingCartIndex >= 0) {
      let existingCartItem = state.items[existingCartIndex];
      let updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.items.amount,
      };
      updatedCartItem = [...state.items];
      updatedCartItem[existingCartIndex] = updatedItem;
    } else {
      updatedCartItem = state.items.concat(action.items);
    }
    return {
      items: updatedCartItem,
      totalAmount: updatedAmount,
    };
  }
  if ((action.type = "REMOVE")) {
    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.itemId
    );
    let existingCartItem = state.items[existingCartIndex];
    const totalAmount = state.totalAmount - existingCartItem.price;

    let updatedItem;
    if (existingCartItem.amount === 1) {
      updatedItem = state.items.filter((item) => item.id !== action.itemId);
    } else {
      updatedItem = state.items.map((item) => {
        if (item.id === action.itemId) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        } else return item;
      });
    }
    return {
      items: updatedItem,
      totalAmount: totalAmount,
    };
  }
  return defaultCart;
};

const CartProvider = (props) => {
  const [cartItems, modifyCartItems] = useReducer(cartReducer, defaultCart);

  const addToCartHandler = (items) => {
    modifyCartItems({ type: "ADD", items: items });
  };
  const removeFromCartHandler = (itemId) => {
    modifyCartItems({ type: "REMOVE", itemId: itemId });
  };
  const data = {
    items: cartItems.items,
    totalAmount: cartItems.totalAmount,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };
  return (
    <CartContext.Provider value={data}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
