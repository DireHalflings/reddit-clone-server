import { ADDING_COMMENT, ADDED_COMMENT } from "./actionConstants";
import { updatePosts } from "./postActions";
import { postComment } from "../../api/post";

export const addComment = (post) => async (dispatch) => {
    dispatch({ type: ADDING_COMMENT });
    try {
        const response = await postComment(post);
        dispatch({ type: ADDED_COMMENT, payload: response });
    } catch (err) {
        console.log(err);
    }
    try {
        dispatch(updatePosts(post.token));
    } catch (err) {
        console.log(err);
    }
};
