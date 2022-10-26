import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([
    { Title: "Note title", Content: "Note contents" }
  ]);

  function addNote(note) {
    setNotes([...notes, note]);
  }

  function deleteNote(key) {
    setNotes((prevNotes) => {
      return prevNotes.filter((Item, Index) => {
        return Index !== key;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.Title}
          content={note.Content}
          delNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
