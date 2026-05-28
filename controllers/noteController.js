// In-memory notes store — resets on server restart
const mockNotes = [];
let nextId = 1;

const addNote = (req, res) => {
  const newNote = {
    id: String(nextId++),
    noteTitle: req.body.noteTitle || "",
    noteContent: req.body.noteContent || "",
    user_id: String(req.user.userId),
  };
  mockNotes.push(newNote);
  res.status(201).json({ note: newNote });
};

const getAllNotes = (req, res) => {
  const userNotes = mockNotes.filter(
    (note) => String(note.user_id) === String(req.user.userId),
  );
  res.status(200).json({ notes: userNotes });
};

const updateNote = (req, res) => {
  const { id } = req.params;
  const index = mockNotes.findIndex((n) => String(n.id) === String(id));
  if (index === -1) return res.status(404).json({ message: "Note not found" });
  mockNotes[index] = { ...mockNotes[index], ...req.body };
  res.status(200).json({ note: mockNotes[index] });
};

const deleteNote = (req, res) => {
  const { id } = req.params;
  const index = mockNotes.findIndex((n) => String(n.id) === String(id));
  if (index === -1) return res.status(404).json({ message: "Note not found" });
  const deleted = mockNotes.splice(index, 1);
  res.status(200).json({ note: deleted[0] });
};

export { addNote, getAllNotes, updateNote, deleteNote };
