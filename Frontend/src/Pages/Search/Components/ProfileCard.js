/** @format */

import React from "react";
import { useHistory } from "react-router";
import classes from "./ProfileCard.module.css";

const ProfileCard = ({ userData, navigateToProfile }) => {
  let { profilePic, name, bio, id } = userData;
  const history = useHistory();
  const navigate = () => {
    history.push(`/profile/${id}`);
  };
  return (
    <div className={classes.container} onClick={navigate}>
      <img src={profilePic} className={classes.image}></img>
      <div className={classes.textWrapper}>
        <span className={classes.name}>{name}</span>
        {bio && <span className={classes.bio}>{bio}</span>}
      </div>
    </div>
  );
};

export default ProfileCard;
