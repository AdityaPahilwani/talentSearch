/** @format */

import { gql } from "@apollo/client";
/**
 * This query returns feed data
 * @param  pageNo  page no used for pagination
 * @return  feed data ( i.e id , likes , description , mediaLink , comments)
 */

export const Queries = gql`
  query getPosts($pageNo: Int!) {
    getPosts(input: { pageNo: $pageNo }) {
      success
      message
      error
      data {
        id
        likes
        description
        mediaLink
        doesUserLike
        postedBy {
          id
          name
          email
          gender
          profilePic
          bio
        }
        comments {
          comment
          id
          userData {
            id
            name
            email
            gender
            profilePic
          }
        }
      }
    }
  }
`;

