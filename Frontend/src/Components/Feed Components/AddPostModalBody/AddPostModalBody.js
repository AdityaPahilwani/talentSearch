/** @format */

import React, { useReducer, useEffect } from "react";
import classes from "./AddPostModalBody.module.css";
import { useMutation } from "@apollo/client";
import { ImCross } from "react-icons/im";
import { BsCardImage } from "react-icons/bs";
import { useForm, CHANGE } from "../../../Hooks/formHooks/useForm";
import { createPostMutation } from "./apollo/Mutation";

const AddPostModalBody = ({ userData, addPost, modalHandler }) => {
  let { profilePic, name } = userData;
  const [createPost] = useMutation(createPostMutation);
  const [state, dispatch] = useReducer(useForm, {
    description: "",
    mediaLink: "",
  });
  const uploadImage = (event) => {
    let files = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      dispatch({
        type: CHANGE,
        data: {
          key: event.target.name,
          value: e.target.result,
        },
      });
    };
  };

  useEffect(() => {
    console.log("mount", state);
    return () => {
      clearData();
    };
  }, []);
  const submitHandler = async () => {
    console.log(state);

    try {
      const { data } = await createPost({
        variables: {
          postType: "Temp",
          description: state.description,
          mediaLink: state.mediaLink,
        },
      });

      const { success, message, error, data: postData } = data.createPost;
      if (success) {
        let { id, mediaLink } = postData;
        let { description } = state;
        let data = {
          id,
          postedBy: userData,
          postType: "demo",
          description,
          mediaLink,
          doesUserLike: false,
          likes: 0,
          comments: [],
        };
        addPost(data);

        modalHandler();
        console.log(data);
      } else {
        alert(error);
      }
    } catch (err) {
      console.log("erro", JSON.stringify(err, null, 2));
    }
  };

  const clearData = () => {
    dispatch({
      type: CHANGE,
      data: {
        key: "mediaLink",
        value: "",
      },
    });
    dispatch({
      type: CHANGE,
      data: {
        key: "description",
        value: "",
      },
    });
  };
  const handleChange = (event) => {
    dispatch({
      type: CHANGE,
      data: {
        key: event.target.name,
        value: event.target.value,
      },
    });
  };

  // const closeModal = () => {
  //   clearData();
  //   modalHandler();
  // };
  return (
    <div className={classes.box}>
      <div className={classes.top}>
        <h3 className={classes.heading}>Create A Post</h3>
        <div className={classes.cross}>
          <ImCross
            className={classes.Cross}
            onClick={modalHandler}
            color={"black"}
            size={20}
          />
        </div>
      </div>
      <div className={classes.info}>
        <img className={classes.pic} src={profilePic} alt={"Profile Pic"} />
        <div className={classes.name}>{name}</div>
      </div>
      <textarea
        name="description"
        onChange={handleChange}
        className={classes.textArea}
        placeholder={"What Do you want to talk about?"}
      />
      <div className={classes.submitContainer}>
        <input
          name="mediaLink"
          style={{ display: "none" }}
          type="file"
          id="icon-button-file"
          accept="image/*"
          onChange={uploadImage}
        />
        <label htmlFor="icon-button-file">
          <BsCardImage className={classes.image} size={23} />
        </label>
        <button onClick={submitHandler} className={classes.btn}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddPostModalBody;
