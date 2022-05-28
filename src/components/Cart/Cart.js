import React from "react";
import Modal from "../UI/Modal";
import css from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={css["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 30.21 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal hideCartOnClick={props.hideCartOnClick}>
      {cartItems}
      <div className={css.total}>
        <span>Total amount</span>
        <span>35</span>
      </div>
      <div className={css.actions}>
        <button className={css["button--alt"]} onClick={props.hideCartOnClick}>
          Close
        </button>
        <button className={css.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
