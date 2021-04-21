/** @format */
/**
 * Global object to define routes this way we don't deal with magic strings and changing routes is fast
 * @return   Global object to definte routes
 */
const path = {
  homepage: "/",
  register: "/register",
  feed: "/feed",
  posts: "/post/:postId",
  createPostPath: (id) => {
    return `/post/${id}`;
  },
  profile: "/profile/:userId",
  /**
   * It creates new user profile part to hit
   * @return  new route with userId to hit on
   */
  createProfilePath: (id) => {
    return `/profile/${id}`;
  },
  signIn: "/signin",
  settings: "/settings",
  requests: "/requests",
  search: "/search",
  // createSearchPath: (search) => {
  //   return `/search?q=${search}`;
  // },
};

export default path;
