import React, { useState } from "react";
// import { addPost } from "../../redux/actions/postActions";
import { addPost } from "../../api/post";
import { useSelector } from "react-redux";

import "./addPost.css";
const AddPost = () => {
    const [subReddit, setSubReddit] = useState("subreddit");
    const [title, setTitle] = useState("title");
    const [url, setURL] = useState("genericurl");
    const token = useSelector((state) => state.user.jwt);

    const handleSubmitBtn = (e) => {
        e.preventDefault();
        const post = {
            subReddit: subReddit,
            title: title,
            url: url,
            token: token,
        };
        addPost(post);
        setSubReddit("");
        setTitle("");
        setURL("");
    };
    return (
        <div className="add-post-container">
            <div className="add-post">
                <div className="add-post-header">
                    <h2>Add a Post</h2>
                </div>
                <form className="input-container">
                    <div>
                        <input
                            type="text"
                            onChange={(e) => setSubReddit(e.target.value)}
                            placeholder="SubReddit"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={(e) => setURL(e.target.value)}
                            placeholder="Url"
                        />
                    </div>
                    <div className="form-btn">
                        <input
                            type="submit"
                            value="submit"
                            onClick={(e) => handleSubmitBtn(e)}
                        />
                        <i class="fas fa-arrow-circle-right fa-lg"></i>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPost;
