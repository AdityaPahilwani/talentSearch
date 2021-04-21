/** @format */

import React from "react";
import classes from "./Education.module.css";
const Education = ({ name, score, location,type }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.name}>{name}</div>
      <div className={classes.type}>{type}</div>
      <div className={classes.score}>{score}</div>
      <div className={classes.location}>{location}</div>
    </div>
  );
};

export default Education;
