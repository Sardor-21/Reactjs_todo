import React from "react";
import MyButton from "../UI/MyButton/MyButton";
const TableBody = (props) => {
  return (
    <tr>
      <td>{props.number}</td>
      <td>{props.post.programming}</td>
      <td>{props.post.stack}</td>
      <td className="text-end">
        <MyButton
          className="btn btn-danger"
          onClick={() => props.removePost(props.post)}
        >
          {" "}
          Delete{" "}
        </MyButton>
      </td>
    </tr>
  );
};

export default TableBody;
