/** @format */

import { gql } from "@apollo/client";

/**
 * This query returns feed data
 * @param  email  email of user 
 * @param  password password of user
 * @return   success , message , error
 */

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      success
      cookie
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

      }
    }
  }
`;


// followers {
//   id
//   name
//   email
//   gender
//   profilePic
//   bio
//   userType
// }
// following {
//   id
//   name
//   email
//   gender
//   profilePic
//   bio
//   userType
// }
// requestedTo {
//   id
//   name
//   email
//   gender
//   profilePic
//   bio
//   userType
// }
// requestedBy {
//   id
//   name
//   email
//   gender
//   profilePic
//   bio
//   userType
// }