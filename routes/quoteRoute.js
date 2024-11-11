import express from "express";
const router = express.Router();

import { getQuotes } from "../controllers/quoteController.js";

router.route("/").get(getQuotes);

export default router;
