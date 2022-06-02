import React, { useContext } from "react";
import Modal from "../UI/Modal";
import css from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const addFood = (item) => {
    cartCtx.addToCart({ ...item, amount: 1 });
  };

  const removeFood = (id) => {
    cartCtx.removeFromCart(id);
  };
  const cartItems = (
    <ul className={css["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={addFood.bind(null, item)}
            onRemove={removeFood.bind(null, item.id)}
          ></CartItem>
        );
      })}
    </ul>
  );
  return (
    <Modal hideCartOnClick={props.hideCartOnClick}>
      {cartItems}
      <div className={css.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={css.actions}>
        <button className={css["button--alt"]} onClick={props.hideCartOnClick}>
          Close
        </button>
        {hasItems && <button className={css.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
