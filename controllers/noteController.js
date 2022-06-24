import Note from "../models/Note.js";

const addNote = async (req, res) => {
  req.body.user_id = req.user.userId;
  const note = await Note.create(req.body);

  res.status(201).json({ note });
};

const getAllNotes = async (req, res) => {
  const notes = await Note.find({ user_id: req.user.userId });
  res.status(200).json({ notes });
};

const updateNote = async (req, res) => {
  res.send("update note");
};

const deleteNote = async (req, res) => {
  res.send("delet note");
};

export { addNote, getAllNotes, updateNote, deleteNote };
