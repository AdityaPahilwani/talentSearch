/** @format */

import React, { memo, useCallback } from "react";
import { BsThreeDots } from "react-icons/bs";
import Action from "../Action/Action";
import { useHistory } from "react-router-dom";
import classes from "./Comments.module.css";
import Paths from "../../../Constants/paths";
const Comments = ({ profilePic, name, comment, nested, userId }) => {
  const history = useHistory();
  const navigateToUserProfile = useCallback(() => {
    history.push(Paths.createProfilePath(userId));
  }, []);
  return (
    <div className={nested ? classes.nested : classes.Container}>
      <div className={classes.flex} onClick={navigateToUserProfile}>
        <div className={classes.img}>
          <img src={profilePic} alt="Profile Pic" />
        </div>
        <div className={classes.topContainer}>
          <div className={classes.name}>{name}</div>
          <div className={classes.options}>
            {/* <span className={classes.margin}>{time}</span> */}
            {/* <BsThreeDots size={25} /> */}
          </div>
        </div>
      </div>
      <div className={classes.comment}>{comment}</div>
      {/* <Action showShare={false} showComment={false} /> */}
    </div>
  );
};

export default memo(Comments);
