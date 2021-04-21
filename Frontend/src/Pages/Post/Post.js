/** @format */

import React, { useEffect, useState } from "react";
import classes from "./Post.module.css";
import { useQuery } from "@apollo/client";
import { getPostbyIdQuery } from "./apollo/query";
import { useHistory } from "react-router";
import Page from "../../HOC/Page";
import { cache } from "../../index";
import { getProfileData } from "../../commonApollo/Queries/userQuery";
import Card from "../../Components/Cards/Card";
import path from "../../Constants/paths";

const Post = () => {
  const [postId, setpostId] = useState("");
  const history = useHistory();
  const { loading, error, data } = useQuery(getPostbyIdQuery, {
    variables: {
      id: postId,
    },
  });
  const profiledata = cache.readQuery({
    query: getProfileData,
  });
  useEffect(() => {
    const id = history.location.pathname.split("/")[2];
    setpostId(id);
  }, []);
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  if (data.getPostWithId.message === "Not Authorized") {
    return (
      <Page>
        The Data is private and Cannot be Viewed, to View it you must follow the
        user
      </Page>
    );
  }
  return (
    <Page>
      <div style={{ width: "75%", margin: "auto", padding: "2%" }}>
        <Card data={data.getPostWithId.data} userData={profiledata} />
      </div>
    </Page>
  );
};

export default Post;
