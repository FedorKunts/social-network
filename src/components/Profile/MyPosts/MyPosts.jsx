import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      <textarea></textarea>
      <button>add post</button>
      <div className={s.posts}>
        <Post message="hello" />
        <Post message="how  are you" />
      </div>
    </div>
  );
};

export default MyPosts;
