// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import { useHistory } from "react-router-dom";
// import { useMutation } from "@apollo/client";
// import path from "../../../../../Constants/paths";
// import {
//   acceptFollowRequestMutation,
//   declineFollowRequestMutation,
//   requestToFollowUserMutation,
//   revokeToFollowUserRequestMutation,
//   unFollowUserMutation,
// } from "../../../../../commonApollo/Mutation/userRelationMutation";
// const UserAction = ({ userRelation, id, setTotal }) => {
//   const [acceptFollowRequest] = useMutation(acceptFollowRequestMutation);
//   const [requestToFollowUser] = useMutation(requestToFollowUserMutation);
//   const [revokeToFollowUserRequest] = useMutation(
//     revokeToFollowUserRequestMutation
//   );
//   const [declineFollowRequest] = useMutation(declineFollowRequestMutation);
//   const [unFollowUser] = useMutation(unFollowUserMutation);
//   const history = useHistory();
//   const [userRelationState, setUserRelationState] = useState({
//     ...userRelation,
//   });
//   const handleClick = useCallback(() => {
//     const {
//       hasReceivedRequest,
//       hasSentRequest,
//       isAdmin,
//       isFollower,
//       isFollowing,
//     } = userRelationState;
//     let callback;
//     console.log(inputObject);
//     if (isAdmin) {
//       setType("Edit user");
//       callback = Navigate;
//     }
//     if (isFollowing) {
//       setType("Unfollow");
//       callback = Navigate;
//     }
//   }, [userRelationState]);

//   return (
//     <button className={classes.button} onClick={handleClick}>
//       <span>{Type}</span>
//     </button>
//   );
// };

// export default UserAction;
