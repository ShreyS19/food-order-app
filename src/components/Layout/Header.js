import React, { Fragment } from "react";
import foodImage from "../../assets/meals.jpg";
import CartButton from "./CartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Hotel</h1>
        <CartButton showCartOnClick={props.showCartOnClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImage} alt="Food on table" />
      </div>
    </Fragment>
  );
};

export default Header;
