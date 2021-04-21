/** @format */

import { gql } from "@apollo/client";

/**
 * This query is used for storing user details in cache
 */

export const IS_LOGGED_IN = gql`
  query getMe {
    getMe {
      loggedIn @client
      id @client
      name @client
      gender @client
      email @client
      profilePic @client
      bio @client
      skills @client
    }
  }
`;

/**
 * This query returns us logged in user details
 * @return  details like id,name,gender,profilePic,bio
 */
export const me = gql`
  query getMe {
    getMe {
      id
      name
      gender
      email
      profilePic
      bio
      skills
    }
  }
`;
