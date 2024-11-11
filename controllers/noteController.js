// Mock data for notes (simulating a database)
const mockNotes = [
  {
    id: 1,
    noteTitle: "First Note",
    noteContent: "This is the content of the first note.",
    user_id: 1,
  },
  {
    id: 2,
    noteTitle: "Second Note",
    noteContent: "This is the content of the second note.",
    user_id: 2,
  },
];

// Function to add a new note
const addNote = (req, res) => {
  const newNote = {
    id: mockNotes.length + 1,
    ...req.body,
    user_id: req.user.userId,
  };
  mockNotes.push(newNote);
  res.status(201).json({ note: newNote });
};

// Function to get all notes for a user
const getAllNotes = (req, res) => {
  const userNotes = mockNotes.filter(
    (note) => note.user_id === req.user.userId
  );
  res.status(200).json({ notes: userNotes });
};

// Function to update a note
const updateNote = (req, res) => {
  const { id: noteID } = req.params;
  const noteIndex = mockNotes.findIndex((note) => note.id === parseInt(noteID));
  if (noteIndex === -1) {
    return res.status(404).json({ message: "Note not found" });
  }
  mockNotes[noteIndex] = { ...mockNotes[noteIndex], ...req.body };
  res.status(200).json({ note: mockNotes[noteIndex] });
};

// Function to delete a note
const deleteNote = (req, res) => {
  const { id: noteId } = req.params;
  const noteIndex = mockNotes.findIndex((note) => note.id === parseInt(noteId));
  if (noteIndex === -1) {
    return res.status(404).json({ message: "Note not found" });
  }
  const deletedNote = mockNotes.splice(noteIndex, 1);
  res.status(200).json({ note: deletedNote[0] });
};

export { addNote, getAllNotes, updateNote, deleteNote };
