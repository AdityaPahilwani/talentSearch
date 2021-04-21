import React, { useCallback, useEffect, useState } from "react";
import classes from "./Requests.module.css";
import Page from "../../HOC/Page";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import { useLazyQuery, useMutation } from "@apollo/client";
import { Queries } from "./apollo/Queries";
import { useHistory } from "react-router-dom";
import Paths from "../../Constants/paths";
import path from "../../Constants/paths";
import {
  acceptFollowRequestMutation,
  declineFollowRequestMutation,
} from "../../commonApollo/Mutation/userRelationMutation";
const Requests = (props) => {
  const history = useHistory();
  const [acceptFollowRequest] = useMutation(acceptFollowRequestMutation);
  const [declineFollowRequest] = useMutation(declineFollowRequestMutation);
  const [getRequestedUsers, { loading, data, error, fetchMore }] = useLazyQuery(
    Queries
  );
  const [requestedUsers, setRequestedUsers] = useState([]);
  useEffect(() => {
    if (data) {
      const {
        data: requestedUserData,
        success,
        message,
      } = data?.getRequestedUsers;
      if (success) {
        console.log(requestedUserData);
        setRequestedUsers((prevData) => {
          return [...prevData, ...requestedUserData];
        });
      }
    }
  }, [data]);
  useEffect(() => {
    if (error) {
      console.log("error", JSON.stringify(error, null, 2));
      alert(error);
    }
  }, [error]);

  useEffect(() => {
    getRequestedUsers();
  }, []);
  const removeUserFromRequestedUser = useCallback((id) => {
    const newRequestedUser = requestedUsers.filter((item, index) => {
      return item.id !== id;
    });
    setRequestedUsers(newRequestedUser);
  }, []);
  const navigateToProfile = useCallback((id) => {
    history.push(path.createProfilePath(id));
  }, []);
  const acceptFollowRequestHandle = useCallback(async (id) => {
    try {
      const { errors, data } = await acceptFollowRequest({
        variables: {
          requestedTo: id,
        },
      });
      console.log(data);
      const { success, message, error } = data["acceptFollowRequest"];
      if (success) {
        removeUserFromRequestedUser(id);
      }
    } catch (err) {
      console.log("erro", JSON.stringify(err, null, 2));
    }
  }, []);
  const declineFollowRequestHandle = useCallback(async (id) => {
    try {
      const { errors, data } = await declineFollowRequest({
        variables: {
          requestedTo: id,
        },
      });
      console.log(data);
      const { success, message, error } = data["declineFollowRequest"];
      if (success) {
        removeUserFromRequestedUser(id);
      }
    } catch (err) {
      console.log("erro", JSON.stringify(err, null, 2));
    }
  }, []);
  return (
    <Page>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className={classes.pageContainer}>
          {requestedUsers?.map((item, index) => (
            <ProfileCard
              userData={item}
              navigateToProfile={navigateToProfile}
              key={item.id}
              acceptFollowRequestHandle={acceptFollowRequestHandle}
              declineFollowRequestHandle={declineFollowRequestHandle}
            />
          ))}
        </div>
      )}
    </Page>
  );
};
export default Requests;
