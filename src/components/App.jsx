import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function noteData(data) {
    setNotes((prev) => [...prev, data]);
  }
  function deleteItem(id) {
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return index !== id;
      });
    });
  }
  // function editNotes(id) {
  //   setNotes((prev) => {
  //     return prev.map((note, index) => {
  //       if(index === id){
  //         note
  //       }
  //     });
  //   });
  // }
  return (
    <div>
      <Header />
      <CreateArea data={noteData} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          delete={deleteItem}
          // edit={editNotes}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
