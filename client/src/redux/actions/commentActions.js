import { ADD_COMMENT } from "./actionConstants";

export const addComment = (comment, id) => ({
    type: ADD_COMMENT,
    payload: { comment, id },
});
