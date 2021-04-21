/** @format */

import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Chips.module.css";
const Chips = ({ children, value, cross, deleteHandler }) => {
  return (
    <div className={classes.text}>
      {children}
      {cross && (
        <AiOutlineClose
          onClick={() => {
            deleteHandler(value);
          }}
          color={"#ee5253"}
          className={classes.cross}
          size={25}
        />
      )}
    </div>
  );
};

export default Chips;
