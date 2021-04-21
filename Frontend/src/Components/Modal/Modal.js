import classes from "./Modal.module.css";
import BackDrop from "../Backdrop/BackDrop";
import React from "react";
const containerStyle = {
  position: "relative",
  zIndex: 100001,
};
const Modal = (props) => {
  const { displayModal, closeModal } = props;
  const animateStyle = {
    transform: displayModal ? "translateY(0)" : "translateY(-100vh)",
    opacity: displayModal ? "1" : "0",
  };
  return (
    <div className={classes.Modal} style={animateStyle}>
      <BackDrop show={displayModal} clicked={closeModal} />
      <div style={containerStyle}>{props.children}</div>
    </div>
  );
};
const areEqual = (prevProps, nextProps) => {
  return prevProps.displayModal === nextProps.displayModal;
};

export default React.memo(Modal, areEqual);
