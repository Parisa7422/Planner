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
    user_id: 1,
  },
];

// Functions to handle operations
export const getNotes = () => {
  return mockNotes;
};

export const getNoteById = (id) => {
  return mockNotes.find((note) => note.id === id);
};

export const addNote = (note) => {
  const newNote = {
    id: mockNotes.length + 1,
    ...note,
  };
  mockNotes.push(newNote);
  return newNote;
};

export const updateNote = (id, updatedContent) => {
  const noteIndex = mockNotes.findIndex((note) => note.id === id);
  if (noteIndex !== -1) {
    mockNotes[noteIndex] = { ...mockNotes[noteIndex], ...updatedContent };
    return mockNotes[noteIndex];
  }
  return null;
};

export const deleteNote = (id) => {
  const noteIndex = mockNotes.findIndex((note) => note.id === id);
  if (noteIndex !== -1) {
    return mockNotes.splice(noteIndex, 1);
  }
  return null;
};
