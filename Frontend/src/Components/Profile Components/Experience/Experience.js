/** @format */

import React from "react";
import classes from "./Experience.module.css";
const Experience = ({ heading, role, duration }) => {
  return (
    <div className={classes.Container}>
      <h4 className={classes.heading}>{heading}</h4>
      <p className={classes.role}>{role}</p>
      <p className={classes.duration}>{duration}</p>
    </div>
  );
};

export default Experience;
