/** @format */

import apollo from "apollo-server-express";
const { gql } = apollo;
const postDefs = gql`
  type post {
    id: ID
    postedBy: basicUserDetails
    postType: String
    description: String
    mediaLink: String
    doesUserLike: Boolean
    likes: Int
    comments: [commentWithUser]
  }

  input createPostInput {
    postType: String
    description: String
    mediaLink: String
  }
  input reactToPostInput {
    postId: ID!
  }

  type postReturnType {
    success: Boolean
    message: String
    error: String
    data: [post]
  }

  type createPostDataReturnType {
    id: ID
    mediaLink: String
  }
  type createPostReturnType {
    success: Boolean
    message: String
    error: String
    data: createPostDataReturnType
  }

  type postWithIdReturnType {
    success: Boolean
    message: String
    error: String
    data: post
  }

  input getPostInput {
    pageNo: Int
  }
  input getPostWithIdInput {
    id: ID!
  }
  extend type Query {
    getPostWithId(input: getPostWithIdInput): postWithIdReturnType
    getPosts(input: getPostInput): postReturnType
  }

  extend type Mutation {
    createPost(input: createPostInput): createPostReturnType
    likePost(input: reactToPostInput): postReturnType
    unLikePost(input: reactToPostInput): postReturnType
  }
`;

export default postDefs;
