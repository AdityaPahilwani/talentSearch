/** @format */

import { gql } from "@apollo/client";

/**
 * This query returns feed data
 * @param  name  name of user 
 * @param  email email of user
 * @param  password  password of user
 * @param  gender  gender of user
 * @param  bio  bio of user
 * @return   success , message , error
 */

export const RegisterHandler = gql`
  mutation SignUp(
    $name: String!
    $email: String!
    $password: String!
    $gender: String!
    $bio: String!
  ) {
    signUp(
      input: {
        name: $name
        email: $email
        password: $password
        gender: $gender
        bio: $bio
      }
    ) {
      success
      message
      cookie
      error
      data {
        name
        email
        gender
      }
    }
  }
`;
