/** @format */

import React, { memo } from "react";
import classes from "./Action.module.css";
import { BiLike, BiComment, BiShare } from "react-icons/bi";
import { useHistory } from "react-router";
import path from "../../../Constants/paths";
const Action = ({
  showShare = true,
  showLike = true,
  showComment = true,
  LikeHandler,
  postId,
  userLikes = false,
}) => {
  const history = useHistory();
  const navigateToPost = () => {
    console.log(postId);
    history.push(path.createPostPath(postId));
  };
  return (
    <div className={classes.Container}>
      {showLike && (
        <div onClick={LikeHandler} className={classes.flex}>
          <BiLike size={22} style={{ color: userLikes ? "blue" : "black" }} />
          <span className={classes.text}>Like</span>
        </div>
      )}
      {showComment && (
        <div onClick={navigateToPost} className={classes.flex}>
          <BiComment size={22} />
          <span className={classes.text}>View All Comments</span>
        </div>
      )}
      {showShare && (
        <div className={classes.flex}>
          <BiShare size={22} />
          <span className={classes.text}>Share</span>
        </div>
      )}
    </div>
  );
};

export default memo(Action);
