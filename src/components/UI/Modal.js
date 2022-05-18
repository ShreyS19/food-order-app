import React, { Fragment } from "react";
import reactDom from "react-dom";
import css from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={css.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={css.modal}>
      <div className={css.content}>{props.children}</div>
    </div>
  );
};

const overlays = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {reactDom.createPortal(<Backdrop />, overlays)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlays
      )}
    </Fragment>
  );
};

export default Modal;
