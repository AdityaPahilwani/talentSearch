/** @format */

import { gql } from "@apollo/client";

/**
 * This query is used to fetch user profiles who have sent request to admin
 * @return   success , message , error
 */

export const Queries = gql`
  query getRequestedUsers {
    getRequestedUsers {
      success
      message
      error
      data {
        id
        name
        profilePic
      }
    }
  }
`;
