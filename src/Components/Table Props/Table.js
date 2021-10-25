import React, { useMemo, useState } from "react";
import MyInput from "../UI/MyInput/MyInput";
import MySelect from "../UI/MySelect/MySelect";
import FormTable from "./FormTable";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
const Table = () => {
  const [posts, setPosts] = useState([
    { id: 1, programming: "Angular", stack: "Full-Stack" },
    { id: 2, programming: "Goo", stack: "Cyber" },
    { id: 3, programming: "Phyton", stack: "Backend" },
    { id: 4, programming: "Java", stack: "Backend" },
    { id: 5, programming: "Javascript", stack: "Full-Stack" },
  ]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((v) => v.id !== post.id));
  };
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");
  const SortedPost = useMemo(() => {
    console.log("render");
    if (select) {
      return [...posts].sort((a, b) => a[select].localeCompare(b[select]));
    }
    return posts;
  }, [select, posts]);
  const sortedAndSearchPosts = useMemo(() => {
    return SortedPost.filter(
      (post) =>
        post.programming.toLowerCase().includes(search.toLowerCase()) ||
        post.stack.toLowerCase().includes(search.toLowerCase())
    );
  });
  const sortSelect = (sort) => {
    setSelect(sort);
  };
  return (
    <div className="w-75 mx-auto">
      <FormTable createPost={createPost} />
      <div className="d-flex justify-content-center">
        <MyInput
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <MySelect
          value={select}
          onChange={sortSelect}
          defaultValue="Sorted by"
          options={[
            { value: "programming", name: "Programming" },
            { value: "stack", name: "Jobs" },
          ]}
        />
      </div>
      <table className="table table-striped align-middle">
        <TableHead />
        <tbody>
          {sortedAndSearchPosts?.map((post, i) => (
            <TableBody
              number={i + 1}
              removePost={removePost}
              key={post.id}
              post={post}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
