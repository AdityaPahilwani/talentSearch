/** @format */

import React from "react";
import classes from "./Contact.module.css";
import { FiTwitter, FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.heading}>Social handles :</div>
      <div className={classes.socials}>
        <div className={classes.box}>
          <a target="_blank" href="https://discord.gg/XA8Qu9GPyV">
            <FiTwitter color={"#0984e3"} size={30} />
          </a>
        </div>
        <div className={classes.box}>
          <a target="_blank" href="https://instagram.com/hackbash">
            <FaInstagram color={"#C7008A"} size={30} />
          </a>
        </div>
        <div className={classes.box}>
          <a target="_blank" href="https://instagram.com/hackbash">
            <FiMail color={"#eb4d4b"} size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
