import React, { useState } from "react";
import { addComment } from "../../../redux/actions/commentActions";
import { useDispatch } from "react-redux";

import './postComments.css'

const PostComments = ({ id }) => {
    // const comments = useSelector(state => state.comment.comments);
    const [textInput, setTextInput] = useState("");

    const dispatch = useDispatch();

    const handleAddComment = (e) => {
        e.preventDefault();
        dispatch(addComment(textInput, id));
        setTextInput("");
    };

    return (
        <div className="post-comments">
            <form className='post-comments__form'>
                <input
                className='post-comments__form-input'
                    type="text"
                    value={textInput}
                    placeholder="Comment"
                    onChange={(e) => setTextInput(e.target.value)}
                />
                <input
                className='post-comments__form-btn'
                    type="submit"
                    onClick={(e) => handleAddComment(e)}
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default PostComments;
