// import React, { useState, useEffect, useCallback, useMemo } from "react";

// import { useMutation } from "@apollo/client";

// import {
//   acceptFollowRequestMutation,
//   declineFollowRequestMutation,
//   requestToFollowUserMutation,
//   revokeToFollowUserRequestMutation,
//   unFollowUserMutation,
// } from "../../../../commonApollo/Mutation/userRelationMutation";

// const UserActionHook = ({ id }) => {
//   const [acceptFollowRequest] = useMutation(acceptFollowRequestMutation);
//   const [requestToFollowUser] = useMutation(requestToFollowUserMutation);
//   const [revokeToFollowUserRequest] = useMutation(
//     revokeToFollowUserRequestMutation
//   );
//   const [declineFollowRequest] = useMutation(declineFollowRequestMutation);
//   const [unFollowUser] = useMutation(unFollowUserMutation);
//   const [userId, setUserId] = useState(id);
//   const [loading, setLoading] = useState(false);

//   const getApiCallBack = (callBack, callBackNameToGetData) => {
   
//     return async () => {
//       try {
//         const { errors, data } = await callBack({
//           variables: {
//             requestedTo: userId,
//           },
//         });
//         const { success, message, error } = data[callBackNameToGetData];
//         return { success, message, error };
//       } catch (err) {
//         console.log("erro", JSON.stringify(err, null, 2));
//       }
//     };
//   };

//   const getActions = (type) => {
//     let callBack;
//     switch (type) {
//       case REQUESTTOFOLLOW:
//         callBack = getApiCallBack(requestToFollowUser, "requestToFollowUser");
//         break;
//       case ACCEPTREQUEST:
//         callBack = getApiCallBack(acceptFollowRequest, "acceptFollowRequest");
//         break;
//       case REVOKEREQUEST:
//         callBack = getApiCallBack(
//           revokeToFollowUserRequest,
//           "revokeToFollowUserRequest"
//         );
//         break;
//       case UNFOLLOWUSERREQUEST:
//         callBack = getApiCallBack(unFollowUser, "unFollowUser");
//         break;
//       case DECLINEREQUEST:
//         callBack = getApiCallBack(declineFollowRequest, "declineFollowRequest");
//         break;
//     }

//     return async () => {
//       setLoading(true);
//       const data = await callBack();
//       setLoading(false);
//       return data;
//     };
//   };

//   return { loading, getActions };
// };

// export const ACCEPTREQUEST = "acceptRequest";
// export const UNFOLLOWUSERREQUEST = "unfollowUserRequest";
// export const REVOKEREQUEST = "revokeRequest";
// export const REQUESTTOFOLLOW = "requestToFollow";
// export const DECLINEREQUEST = "declineRequest";

// export default UserActionHook;

// // import React, { useState, useEffect, useCallback, useMemo } from "react";

// // import { useHistory } from "react-router-dom";
// // import { useMutation } from "@apollo/client";
// // import path from "../../../../Constants/paths";
// // import {
// //   acceptFollowRequestMutation,
// //   declineFollowRequestMutation,
// //   requestToFollowUserMutation,
// //   revokeToFollowUserRequestMutation,
// //   unFollowUserMutation,
// // } from "../../../../commonApollo/Mutation/userRelationMutation";
// // const UserActionHook = ({ userRelation, id }) => {
// //   const [acceptFollowRequest] = useMutation(acceptFollowRequestMutation);
// //   const [requestToFollowUser] = useMutation(requestToFollowUserMutation);
// //   const [revokeToFollowUserRequest] = useMutation(
// //     revokeToFollowUserRequestMutation
// //   );
// //   const [declineFollowRequest] = useMutation(declineFollowRequestMutation);
// //   const [unFollowUser] = useMutation(unFollowUserMutation);
// //   const history = useHistory();
// //   const [userRelationState, setUserRelationState] = useState({
// //     ...userRelation,
// //   });
// //   const [userId, setUserId] = useState(id);
// //   const [loading, setLoading] = useState();
// //   const [Type, setType] = useState();
// //   const [onClick, setOnClick] = useState();
// //   let Navigate = useCallback(() => {
// //     console.log("called");
// //     history.push(path.settings);
// //   }, []);

// //   const getApiCallBack = (callBack, callBackNameToGetData) => {
// //     return async () => {
// //       try {
// //         const { errors, data } = await callBack({
// //           variables: {
// //             requestedTo: userId,
// //           },
// //         });
// //         console.log(data, data[callBackNameToGetData]);
// //       } catch (err) {
// //         console.log("erro", JSON.stringify(err, null, 2));
// //       }
// //       // const { success, message, error } = data[callBackNameToGetData];
// //       // return { success, message, error };
// //     };
// //   };

// //   const getActions = useCallback(() => {
// //     const {
// //       hasReceivedRequest,
// //       hasSentRequest,
// //       isAdmin,
// //       isFollower,
// //       isFollowing,
// //     } = userRelationState;
// //     let callback;

// //     if (isAdmin) {
// //       setType("Edit user");
// //       callback = Navigate;
// //     }
// //     if (isFollowing) {
// //       setType("Unfollow");
// //       callback = getApiCallBack(unFollowUser, "unFollowUser");
// //     }
// //     if (!isFollowing && !isAdmin) {
// //       setType("follow");
// //       callback = getApiCallBack(requestToFollowUser, "requestToFollowUser");
// //     }
// //     setOnClick(() => {
// //       return async () => {
// //         const data = await callback();
// //         return data;
// //       };
// //     });
// //   }, [userRelationState]);
// //   useEffect(() => {
// //     console.log("Function recreated");
// //   }, [getActions]);
// //   return { loading, Type, onClick, getActions };
// // };

// // export const SENDREQUEST="sendRequest"
// // export const ACCEPTREQUEST="acceptRequest"
// // export const UNFOLLOWUSERREQUEST="unfollowUserRequest"
// // export const REVOKEREQUEST="revokeRequest"
// // export const requestToFollow="requestToFollow"

// // export default UserActionHook;
