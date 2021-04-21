/** @format */

import { gql } from "@apollo/client";

/**
 * This query returns feed data
 * @param  search  string of searched input , no need of complete user names just simple strings even character like "a" is good
 * @param  skills skills should be in array format containing strings
 * @return   success , message , error
 */

export const Queries = gql`
  query searchUsers($search: String, $skills: [String], $pageNo: Int!) {
    searchUsers(input: { search: $search, skills: $skills, pageNo: $pageNo }) {
      success
      message
      error
      data {
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
`;
