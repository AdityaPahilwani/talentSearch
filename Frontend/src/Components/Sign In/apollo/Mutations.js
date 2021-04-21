/** @format */

import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      success
      cookie
      message
      data {
        name
        email
        gender
        id
        name
        email
        gender
        profilePic
        bio
        userType
        experience
        skills
        followers {
          id
          name
          email
          gender
          profilePic
          bio
          userType
        }
        following {
          id
          name
          email
          gender
          profilePic
          bio
          userType
        }
        requestedTo {
          id
          name
          email
          gender
          profilePic
          bio
          userType
        }
        requestedBy {
          id
          name
          email
          gender
          profilePic
          bio
          userType
        }
      }
    }
  }
`;
