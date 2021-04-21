/** @format */

import { gql } from "@apollo/client";

export const createCommentMutation = gql`
  mutation createComment($postId: String!, $comment: String!) {
    createComment(input: { postId: $postId, comment: $comment }) {
      success
      message
      error
      data {
        id
      }
    }
  }
`;

export const createLikeMutation = gql`
  mutation likePost($postId: ID!) {
    likePost(input: { postId: $postId }) {
      success
      message
      error
    }
  }
`;

export const createUnLikeMutation = gql`
  mutation unLikePost($postId: ID!) {
    unLikePost(input: { postId: $postId }) {
      success
      message
      error
    }
  }
`;
