import { useState } from "react";
import {
  createLikeMutation,
  createUnLikeMutation,
} from "../apollo/Mutations";
import { useMutation } from "@apollo/client";
const ToggleLikeFeedPostHook = ({ id, doesUserLike, likes }) => {
  const [targetId, setTargetId] = useState(id);
  const [error, setError] = useState(false);
  const [userLikes, setUserLikes] = useState(doesUserLike);
  const [totalLikes, setTotalLikes] = useState(likes);
  const [likePost] = useMutation(createLikeMutation);
  const [unLikePost] = useMutation(createUnLikeMutation);
  //   console.log(id);
  const commonApiToggle = async (callBack) => {
    try {
      const data = await callBack({
        variables: {
          postId: id,
        },
      });
      const { success, message, error } = data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleLike = () => {
    console.log(userLikes,targetId);
    if (userLikes) {
      if (totalLikes > 0) {
        setTotalLikes((prevData) => prevData - 1);
      }
      setUserLikes(false);
      commonApiToggle(unLikePost);
      return;
    } else {
      setTotalLikes((prevData) => prevData + 1);
      setUserLikes(true);
      commonApiToggle(likePost);
    }
  };
  return { totalLikes, error, toggleLike, userLikes };
};

export default ToggleLikeFeedPostHook;
