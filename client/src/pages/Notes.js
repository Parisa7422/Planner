import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/NotePage";
import InputText from "../components/InputText";
import { useAppContext } from "../context/appContext";

//Reac icons
import DeleteIcon from "@mui/icons-material/Delete";

const Notes = () => {
  const {
    createNote,
    noteTitle,
    noteContent,
    getNotes,
    notes,
    clearValues,
    deleteNote,
    closeInput,
  } = useAppContext();

  useEffect(() => {
    getNotes();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    createNote();
    clearValues();
    closeInput();
    setTimeout(() => {
      getNotes();
    }, 100);
  };

  const handleEdit = (e) => {
    if (e.keyCode === 13) {
      alert("entered");
    }
  };

  return (
    <Wrapper>
      <div className="input-container">
        <InputText
          placeholder="Add a note ..."
          name="noteContent"
          value={noteContent}
          inputName="noteTitle"
          inputValue={noteTitle}
          class="note-textarea"
          formStyle="create-note"
          onAdd={onSubmit}
        />
      </div>

      <div className="note-container">
        {notes.map((note) => {
          return (
            <div key={note.id} className="note-box" onKeyUp={handleEdit}>
              {/* <input
                className="note-content"
                name="noteTitle"
                value={note.noteTitle}
              /> */}
              <h3>{note.noteTitle}</h3>
              {note.noteContent}
              {/* <input
                className="note-content"
                name="noteContent"
                value={note.noteContent}
              /> */}
              <button
                className="icon-btn delete-btn"
                onClick={() => {
                  deleteNote(note.id);
                  setTimeout(() => {
                    getNotes();
                  }, 100);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default Notes;
