/** @format */

import classes from "./Heading.module.css";
import React from "react";

const Heading = ({ heading }) => {
  return <h1 className={classes.Heading}>{heading}</h1>;
};

export default Heading;
