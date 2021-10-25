import React, { useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const FormTable = ({ createPost }) => {
  const [post, setPost] = useState({
    programming: "",
    stack: "",
    degree: "",
  });
  const addPost = (event) => {
    event.preventDefault();
    let id = Date.now();
    const newPost = {
      ...post,
      id: id,
    };
    createPost(newPost);
    setPost({
      programming: "",
      stack: "",
    });
  };
  return (
    <form className="form-group mb-3" onSubmit={(event) => addPost(event)}>
      <MyInput
        value={post.programming}
        className="form-control mb-3"
        placeholder="Programming"
        required
        onChange={(event) =>
          setPost({ ...post, programming: event.target.value })
        }
      />
      <MyInput
        value={post.stack}
        className="form-control mb-3"
        placeholder="Stack"
        required
        onChange={(event) => setPost({ ...post, stack: event.target.value })}
      />
      <MyButton className="btn btn-primary w-100">Add post</MyButton>
    </form>
  );
};

export default FormTable;
