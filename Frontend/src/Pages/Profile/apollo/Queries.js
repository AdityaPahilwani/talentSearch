/** @format */

import { gql } from "@apollo/client";

/**
 * This query returns feed data
 * @param  userId  id of user , you need to fetch details of
 * @return message , message , error , userRelation , data
 */

export const getUserQuery = gql`
  query getUser($userId: ID!) {
    getUser(input: { userId: $userId }) {
      success
      message
      error
      userRelation {
        isAdmin
        isFollowing
        isFollower
        hasSentRequest
        hasReceivedRequest
      }
      data {
        id
        name
        email
        gender
        profilePic
        bio
        userType
        skills
        totalFollowers
        totalFollowing
      }
    }
  }
`;
