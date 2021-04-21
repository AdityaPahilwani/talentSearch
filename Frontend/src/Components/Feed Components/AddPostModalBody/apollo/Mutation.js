import { gql } from "@apollo/client";

/**
 * Returns an Image object that can then be painted on the screen.
 * The url argument must specify an absolute <a href="#{@link}">{@link URL}</a>. The name
 * argument is a specifier that is relative to the url argument.
 * <p>
 * This method always returns immediately, whether or not the
 * image exists. When this applet attempts to draw the image on
 * the screen, the data will be loaded. The graphics primitives
 * that draw the image will incrementally paint on the screen.
 *
 * @param  postType  type of post we have skipped this for now
 * @param  description description of post consider it as caption
 * @param  mediaLink it should be base64 encoded url of image to store in image
 * @return success , message , error
 */
export const createPostMutation = gql`
  mutation CreatePost(
    $postType: String!
    $description: String!
    $mediaLink: String!
  ) {
    createPost(
      input: {
        postType: $postType
        description: $description
        mediaLink: $mediaLink
      }
    ) {
      success
      message
      error
      data {
        id
        mediaLink
      }
    }
  }
`;
