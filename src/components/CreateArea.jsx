import React, { useState } from "react";

function CreateArea(props) {
  const [Note, setNote] = useState({
    Title: "",
    Content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    //console.log(name, value);
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.onAdd(Note);
    setNote({ Title: "", Content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="Title"
          placeholder="Title"
          value={Note.Title}
        />
        <textarea
          onChange={handleChange}
          name="Content"
          placeholder="Take a note..."
          rows="3"
          value={Note.Content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
