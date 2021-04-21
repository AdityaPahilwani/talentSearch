import { gql, useMutation } from "@apollo/client";

/**
 * This mutation is used to accept follow request
 * @param  requestedTo  ID of the user to process request on
 * @return   success , message , error
 */
export const acceptFollowRequestMutation = gql`
  mutation acceptFollowRequestMutation($requestedTo: ID!) {
    acceptFollowRequest(input: { requestedTo: $requestedTo }) {
      success
      message
      error
    }
  }
`;

/**
 * This mutation is used to send request to other users
 * @param  requestedTo  ID of the user to process request on
 * @return   success , message , error
 */

export const requestToFollowUserMutation = gql`
  mutation requestToFollowUserMutation($requestedTo: ID!) {
    requestToFollowUser(input: { requestedTo: $requestedTo }) {
      success
      message
      error
    }
  }
`;

/**
 * This mutation is used to revoke request , when request is in pending state user can revoke their request
 * @param  requestedTo  ID of the user to process request on
 * @return   success , message , error
 */

export const revokeToFollowUserRequestMutation = gql`
  mutation revokeToFollowUserRequestMutation($requestedTo: ID!) {
    revokeToFollowUserRequest(input: { requestedTo: $requestedTo }) {
      success
      message
      error
    }
  }
`;

/**
 * This mutation is used to decline follow request
 * @param  requestedTo  ID of the user to process request on
 * @return   success , message , error
 */

export const declineFollowRequestMutation = gql`
  mutation declineFollowRequestMutation($requestedTo: ID!) {
    declineFollowRequest(input: { requestedTo: $requestedTo }) {
      success
      message
      error
    }
  }
`;

/**
 * This mutation is used to unfollow users
 * @param  requestedTo  ID of the user to process request on
 * @return   success , message , error
 */
export const unFollowUserMutation = gql`
  mutation unFollowUserMutation($requestedTo: ID!) {
    unFollowUser(input: { requestedTo: $requestedTo }) {
      success
      message
      error
    }
  }
`;
