import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/NotePage";
import InputText from "../components/InputText";
import { useAppContext } from "../context/appContext";
import DeleteIcon from "@mui/icons-material/Delete";

const NAV_ITEMS = [
  { label: "Dashboard", icon: "🗓", path: "/" },
  { label: "Notes", icon: "📝", path: "/notes" },
  { label: "About", icon: "ℹ️", path: "/about-us" },
];

const Notes = () => {
  const navigate = useNavigate();
  const {
    createNote,
    noteTitle,
    noteContent,
    getNotes,
    notes,
    clearValues,
    deleteNote,
    closeInput,
    logoutUser,
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

  return (
    <Wrapper>
      {/* SIDEBAR — same as Dashboard */}
      <aside className="sidebar">
        <div className="sidebar-logo">P</div>
        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              title={item.label}
              className={`nav-item ${window.location.pathname === item.path ? "active" : ""}`}
              onClick={() => navigate(item.path)}
            >
              {item.icon}
            </button>
          ))}
        </nav>
        <button className="sidebar-logout" title="Logout" onClick={logoutUser}>
          ⟲
        </button>
      </aside>

      <div className="notes-main">
        <header className="notes-header">
          <h1 className="notes-title">My Notes</h1>
          <p className="notes-subtitle">Capture your thoughts and ideas.</p>
        </header>

        <div className="input-container">
          <InputText
            placeholder="Add a note ..."
            name="noteContent"
            value={noteContent}
            inputName="noteTitle"
            inputValue={noteTitle}
            className="note-textarea"
            formStyle="create-note"
            onAdd={onSubmit}
          />
        </div>

        <div className="note-container">
          {notes.map((note) => (
            <div key={note.id} className="note-box">
              <h3 className="note-box-title">{note.noteTitle}</h3>
              <p className="note-box-content">{note.noteContent}</p>
              <button
                className="icon-btn delete-btn"
                onClick={() => {
                  deleteNote(note.id);
                  setTimeout(() => getNotes(), 100);
                }}
              >
                <DeleteIcon fontSize="small" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Notes;
