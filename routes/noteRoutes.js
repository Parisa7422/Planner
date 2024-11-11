import express from "express";
const router = express.Router();

import {
  addNote,
  getAllNotes,
  updateNote,
  deleteNote,
} from "../controllers/noteController.js";

router.route("/").post(addNote).get(getAllNotes);
router.route("/:id").patch(updateNote).delete(deleteNote);

export default router;
