import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [input, setInput] = useState({ title: "", content: "" });
  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function handleClick(event) {
    props.data(input);
    event.preventDefault();
    setInput({ title: "", content: "" });
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={input.title}
          />
        ) : null}

        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={input.content}
        />
        <zoom in={isExpanded ? true : false}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </zoom>
      </form>
    </div>
  );
}

export default CreateArea;
