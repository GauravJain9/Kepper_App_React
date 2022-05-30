import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.delete(props.id)}>
        <DeleteIcon />
      </button>
      {/* <button onClick={() => props.edit(props.id)}>EDIT</button> */}
    </div>
  );
}

export default Note;
