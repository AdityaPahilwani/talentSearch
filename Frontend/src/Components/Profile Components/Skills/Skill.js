/** @format */

import React from "react";
import classes from "./Skills.module.css";
import Heading from "../../HomePage Components/Headings/Heading";
import Chips from "./Chips/Chips";

const Skill = ({ skills }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.skills}>
        {skills.map((element, index) => (
          <div className={classes.chipWrapper}>
            <Chips key={index} className={classes.text}>
              {element}
            </Chips>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
