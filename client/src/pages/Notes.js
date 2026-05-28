import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Modal, Box, TextField, Button, Stack, Typography } from "@mui/material";

const NAV_ITEMS = [
  { label: "Dashboard", icon: "📅", path: "/" },
  { label: "Notes", icon: "📝", path: "/notes" },
  { label: "About", icon: "ℹ️", path: "/about-us" },
];

const Notes = () => {
  const navigate = useNavigate();
  const { createNote, getNotes, notes, deleteNote, updateNote, logoutUser } = useAppContext();

  // Add note form
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [addError, setAddError] = useState("");

  // Edit modal
  const [editOpen, setEditOpen] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  useEffect(() => { getNotes(); }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setAddError("Please fill in both title and note.");
      return;
    }
    setAddError("");
    // Temporarily set state values via context handleChange pattern
    // We call createNote directly by passing values in a workaround
    await handleCreateNote(title.trim(), content.trim());
    setTitle("");
    setContent("");
    setTimeout(() => getNotes(), 100);
  };

  // Direct create without relying on context state timing
  const handleCreateNote = async (noteTitle, noteContent) => {
    try {
      const token = localStorage.getItem("token");
      await fetch("/api/v1/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ noteTitle, noteContent }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    setTimeout(() => getNotes(), 100);
  };

  const openEdit = (note) => {
    setEditNote(note);
    setEditTitle(note.noteTitle);
    setEditContent(note.noteContent);
    setEditOpen(true);
  };

  const handleEdit = async () => {
    if (!editTitle.trim() || !editContent.trim()) return;
    try {
      const token = localStorage.getItem("token");
      await fetch(`/api/v1/notes/${editNote.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ noteTitle: editTitle, noteContent: editContent }),
      });
      setEditOpen(false);
      setTimeout(() => getNotes(), 100);
    } catch (err) {
      console.error(err);
    }
  };

  const modalStyle = {
    position: "absolute", top: "50%", left: "50%",
    transform: "translate(-50%, -50%)",
    width: 440, borderRadius: "18px",
    bgcolor: "#0f2a52", color: "white", boxShadow: 24, p: 3,
  };

  return (
    <Wrapper>
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
        <button className="sidebar-logout" title="Logout" onClick={logoutUser}>🚪</button>
      </aside>

      <div className="notes-main">
        <header className="notes-header">
          <h1 className="notes-title">My Notes</h1>
          <p className="notes-subtitle">Capture your thoughts and ideas.</p>
        </header>

        {/* ADD NOTE FORM */}
        <div className="add-note-form">
          <input
            className="add-input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="add-textarea"
            placeholder="Write your note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
          />
          {addError && <p className="add-error">{addError}</p>}
          <button className="add-btn" onClick={handleAdd}>+ Add note</button>
        </div>

        {/* NOTES GRID */}
        <div className="note-container">
          {notes.length === 0 && (
            <p className="notes-empty">No notes yet. Add your first one above!</p>
          )}
          {notes.map((note) => (
            <div key={note.id} className="note-box">
              <h3 className="note-box-title">{note.noteTitle}</h3>
              <p className="note-box-content">{note.noteContent}</p>
              <div className="note-actions">
                <button className="note-action-btn edit-btn" onClick={() => openEdit(note)} title="Edit">
                  <EditIcon fontSize="small" />
                </button>
                <button className="note-action-btn delete-btn" onClick={() => handleDelete(note.id)} title="Delete">
                  <DeleteIcon fontSize="small" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EDIT MODAL */}
      <Modal open={editOpen} onClose={() => setEditOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Edit Note</Typography>
          <Stack spacing={2}>
            <TextField
              label="Title" value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              fullWidth size="small"
              InputLabelProps={{ style: { color: "#cfe0ff" } }}
              sx={{ "& .MuiOutlinedInput-root": { color: "white" }, "& .MuiOutlinedInput-notchedOutline": { borderColor: "#2b4b7a" } }}
            />
            <TextField
              label="Note" value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              fullWidth multiline rows={4} size="small"
              InputLabelProps={{ style: { color: "#cfe0ff" } }}
              sx={{ "& .MuiOutlinedInput-root": { color: "white" }, "& .MuiOutlinedInput-notchedOutline": { borderColor: "#2b4b7a" } }}
            />
            <Stack direction="row" spacing={1}>
              <Button variant="contained" onClick={handleEdit}
                sx={{ flex: 1, borderRadius: "12px", textTransform: "none", fontWeight: 700 }}>
                Save
              </Button>
              <Button variant="outlined" onClick={() => setEditOpen(false)}
                sx={{ flex: 1, borderRadius: "12px", textTransform: "none", color: "white", borderColor: "rgba(255,255,255,0.3)" }}>
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex; min-height: 100vh; background: #f5f5f5;

  .sidebar {
    width: 72px; background: #1f3a5f;
    display: flex; flex-direction: column; align-items: center; padding: 24px 0;
    position: fixed; top: 0; left: 0; height: 100vh; z-index: 100;
  }
  .sidebar-logo {
    width: 40px; height: 40px; border-radius: 999px;
    border: 2px solid #fff; color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 18px;
  }
  .sidebar-nav { display: flex; flex-direction: column; gap: 12px; margin-top: 32px; }
  .nav-item {
    width: 38px; height: 38px; border-radius: 12px; border: none;
    background: rgba(255,255,255,0.12); color: #fff; font-size: 16px;
    cursor: pointer; transition: background 0.15s;
    display: flex; align-items: center; justify-content: center;
  }
  .nav-item:hover { background: rgba(255,255,255,0.22); }
  .nav-item.active { background: #fff; }
  .sidebar-logout {
    margin-top: auto; width: 38px; height: 38px; border-radius: 12px; border: none;
    background: rgba(255,255,255,0.12); color: #fff; cursor: pointer; font-size: 18px;
  }

  .notes-main {
    margin-left: 72px; flex: 1;
    padding: 32px; display: flex; flex-direction: column; gap: 24px;
  }

  .notes-title { font-size: 24px; font-weight: 700; color: #111827; margin: 0 0 4px; }
  .notes-subtitle { font-size: 14px; color: #6b7280; margin: 0; }

  /* ADD FORM */
  .add-note-form {
    background: #fff; border-radius: 16px;
    padding: 16px; max-width: 480px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    display: flex; flex-direction: column; gap: 10px;
  }
  .add-input, .add-textarea {
    border: 1px solid #e5e7eb; border-radius: 10px;
    padding: 10px 12px; font-size: 14px; font-family: inherit;
    outline: none; resize: none; color: #111827;
    transition: border-color 0.15s;
  }
  .add-input:focus, .add-textarea:focus { border-color: #1f3a5f; }
  .add-error { color: #ef4444; font-size: 13px; margin: 0; }
  .add-btn {
    align-self: flex-end;
    background: #1f3a5f; color: #fff;
    border: none; border-radius: 999px;
    padding: 8px 20px; font-size: 14px;
    font-weight: 600; cursor: pointer;
    transition: background 0.15s;
  }
  .add-btn:hover { background: #2d4f7c; }

  /* NOTES GRID */
  .note-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
  }
  .notes-empty { color: #6b7280; font-size: 14px; }

  .note-box {
    background: #1f3a5f; color: white;
    padding: 16px; border-radius: 16px;
    position: relative; min-height: 130px;
    display: flex; flex-direction: column; gap: 8px;
  }
  .note-box-title { font-size: 15px; font-weight: 600; margin: 0; color: #fff; }
  .note-box-content { font-size: 13px; opacity: 0.85; margin: 0; flex: 1; color: #fff; line-height: 1.5; }

  .note-actions {
    display: flex; gap: 6px; justify-content: flex-end;
    margin-top: auto; padding-top: 8px;
    border-top: 1px solid rgba(255,255,255,0.1);
  }
  .note-action-btn {
    background: transparent; border: none;
    color: rgba(255,255,255,0.5); cursor: pointer;
    padding: 4px; border-radius: 6px;
    transition: color 0.15s;
    display: flex; align-items: center;
  }
  .edit-btn:hover { color: #93c5fd; }
  .delete-btn:hover { color: #f87171; }

  /* MOBILE */
  @media (max-width: 768px) {
    .sidebar {
      width: 100%; height: 60px; flex-direction: row;
      justify-content: space-around; align-items: center;
      padding: 0 16px; top: auto; bottom: 0; left: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
    .sidebar-logo { display: none; }
    .sidebar-nav { flex-direction: row; gap: 0; margin-top: 0; flex: 1; justify-content: space-around; }
    .sidebar-logout { margin-top: 0; }
    .notes-main { margin-left: 0; margin-bottom: 60px; padding: 16px; gap: 16px; }
    .add-note-form { max-width: 100%; }
    .note-container { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }
  }
`;

export default Notes;
