/** @format */

import classes from "./Backdrop.module.css";
import React from "react";

const Backdrop = ({ showSideDrawer }) => {
  return <div onClick={showSideDrawer} className={classes.Backdrop}></div>;
};

export default Backdrop;
