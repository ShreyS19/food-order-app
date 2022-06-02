import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import css from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const inputRef = useRef();
  const [isValidQuantity, setValidQuantity] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(0);
  const submitHandler = (e) => {
    e.preventDefault();
    const itemQuantity = inputRef.current.value;
    const itemQuantityNum = +itemQuantity;

    if (
      itemQuantityNum < 1 ||
      itemQuantityNum > 5 ||
      itemQuantity.trim().length === ""
    ) {
      setValidQuantity(true);
      return;
    }
    setItemQuantity(itemQuantityNum);
    props.submitToCart(itemQuantityNum);
  };

  return (
    <form className={css.form}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={submitHandler}>+ Add</button>
      {isValidQuantity && <p>*Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
