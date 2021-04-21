/** @format */

import React, { useReducer, memo, useState, useCallback } from "react";
// import { BsThreeDots } from "react-icons/bs";
// import { BiLike } from "react-icons/bi";
import classes from "./card.module.css";
import Action from "./Action/Action";
import Comments from "./Comments/Comments";
import { useForm, CHANGE } from "../../Hooks/formHooks/useForm";
import { useMutation } from "@apollo/client";
import { createCommentMutation } from "./apollo/Mutations";
import ToggleLikeFeedPostHook from "./Hooks/toggleLike";
import { useHistory } from "react-router-dom";
import Paths from "../../Constants/paths";
const Card = ({ data, userData }) => {
  const history = useHistory();
  const [createComment] = useMutation(createCommentMutation);

  const {
    postedBy,
    description,
    likes,
    comments,
    mediaLink,
    id,
    doesUserLike,
  } = data;

  const { name, profilePic, bio, id: userId } = postedBy;
  const [postComments, setPostComments] = useState([...comments]);
  const [state, dispatch] = useReducer(useForm, {
    Comment: "",
  });
  const PostId = data.id;
  const { totalLikes, error, toggleLike, userLikes } = ToggleLikeFeedPostHook({
    id,
    doesUserLike: doesUserLike || false,
    likes,
  });
  const handleChange = (event) => {
    dispatch({
      type: CHANGE,
      data: {
        key: event.target.name,
        value: event.target.value,
      },
    });
  };
  const submitHandler = async () => {
    const { data, errors } = await createComment({
      variables: {
        postId: id,
        comment: state.Comment,
      },
    });

    const { id: commentId } = data.createComment.data;
    setPostComments((prevComments) => {
      const newComment = {
        userData: userData,
        comment: state.Comment,
        id: commentId,
      };
      return [newComment, ...prevComments];
    });
    console.log(errors);
    console.log(data);
    state.Comment = "";
  };
  const navigateToUserProfile = useCallback(() => {
    history.push(Paths.createProfilePath(userId));
  }, []);
  return (
    <div className={classes.Container}>
      {/* <div className={classes.options}>
        <BsThreeDots size={25} />
      </div> */}
      <div className={classes.top} onClick={navigateToUserProfile}>
        <div>
          <img
            src={profilePic}
            alt='ProfilePic'
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={classes.Name}>
          <h3>{name}</h3>
          {/* <div className={classes.time}>{bio}</div> */}
        </div>
      </div>
      <div>
        {description && (
          <div className={classes.description}>{description}</div>
        )}
        <div className={classes.likeContainer}>
          {mediaLink !== "false" && (
            <div className={classes.image}>
              <img
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={mediaLink}
                alt='ProfilePic'
              />
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexGrow: 1,
              width: "100%",
            }}>
            <div className={classes.like}>{totalLikes} likes</div>
            <div className={classes.comments}>
              {comments.length || 0} comments
            </div>
          </div>
          <Action
            postId={PostId}
            LikeHandler={toggleLike}
            showShare={true}
            userLikes={userLikes}
          />
        </div>
      </div>
      <div className={classes.writeYourCommentContainer}>
        <input
          type={"text"}
          value={state.Comment}
          onChange={handleChange}
          name='Comment'
          placeholder='Write a comment'
          className={classes.inputBox}
        />
        <button onClick={submitHandler} className={classes.btn}>
          Submit
        </button>
      </div>

      {postComments?.length > 0 &&
        postComments.map((item, index) => {
          const { comment, id, userData } = item;
          const { email, gender, id: userId, name, profilePic } = userData;
          return (
            <div className={classes.CommentsContainer}>
              <Comments
                userId={userId}
                profilePic={profilePic}
                name={name}
                comment={comment}
                key={id}
              />
            </div>
          );
        })}
    </div>
  );
};

export default memo(Card);
