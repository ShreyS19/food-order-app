import React from "react";
import CartButtonIcon from "../Cart/CartButtonIcon";
import classes from "./CartButton.module.css";

const CartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartButtonIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default CartButton;
