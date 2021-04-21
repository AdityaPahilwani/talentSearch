/** @format */

import { gql } from "@apollo/client";

export const getPostbyIdQuery = gql`
  query getPostWithId($id: ID!) {
    getPostWithId(input: { id: $id }) {
      success
      message
      data {
        id
        description
        mediaLink
        postedBy {
          name
          id
          profilePic
          bio
        }

        likes
        comments {
          comment
          userData {
            name
            profilePic
            id
          }
        }
      }
    }
  }
`;
