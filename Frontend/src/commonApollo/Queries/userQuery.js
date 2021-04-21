import { gql } from "@apollo/client";

/**
 * common query which returns cached user data 
 * @return  id , name , email , profilePic , bio , skills
 */
export const getProfileData = gql`
  query getProfileData {
    getMe {
      id
      name
      email
      profilePic
      bio
      skills
    }
  }
`;
