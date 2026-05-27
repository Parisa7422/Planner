import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 5000;

import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes.js";
import goalRoutes from "./routes/goalRoutes.js";
import quoteRoutes from "./routes/quoteRoute.js";
import noteRoutes from "./routes/noteRoutes.js";

import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

// API routes first
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/goals", authenticateUser, goalRoutes);
app.use("/api/v1/quotes", authenticateUser, quoteRoutes);
app.use("/api/v1/notes", authenticateUser, noteRoutes);

// Serve React — after API routes, no NODE_ENV check needed
app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.use(errorHandlerMiddleware);

app.listen(port, () => console.log(`Server running on port ${port}`));
