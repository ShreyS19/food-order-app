import React, { useContext } from "react";
import css from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = props.price.toFixed(2);
  const submitToCart = (quantity) => {
    cartCtx.addToCart({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: quantity,
    });
  };

  return (
    <li key={props.id} className={css.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={css.description}>{props.description}</div>
        <div className={css.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} submitToCart={submitToCart} />
      </div>
    </li>
  );
};

export default MealItem;
