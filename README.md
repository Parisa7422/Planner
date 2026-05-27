# Planner — Productivity App

A full-stack productivity app to track habits, take notes, and stay on top of your goals. Built with React, Node.js, and Express. Features AI-powered habit suggestions using the Claude API.

## ✨ Features

- **Habit tracker** — add habits, mark them done each day, track monthly progress
- **AI habit suggestions** — click "✨ AI suggest" to get personalised habit ideas based on what you're already tracking
- **Calendar view** — see your month and click any day to view habit status
- **Notes** — create and delete notes with a clean card layout
- **Authentication** — register and login with JWT
- **Responsive** — works on desktop and mobile

## 🖥 Live Demo

> **[Live Demo → planner-app-ig7m.onrender.com](https://planner-app-ig7m.onrender.com)**

## 🛠 Tech Stack

**Frontend:** React, React Router, styled-components, Material UI  
**Backend:** Node.js, Express, JWT authentication  
**AI:** Claude API (Anthropic) for habit suggestions  

## 🚀 Running locally

### 1. Clone the repo
```bash
git clone https://github.com/Parisa7422/Planner.git
cd Planner
```

### 2. Set up environment variables
```bash
cp .env.example .env
```
Edit `.env` and set a `JWT_SECRET` value (any long random string).

### 3. Install dependencies and start
```bash
npm install
npm install --prefix client
npm run dev
```

The app runs at `http://localhost:3000`

**Demo login:**
- Email: `testuser@example.com`
- Password: `password123`

## 📁 Project structure

```
Planner/
├── client/          # React frontend
│   └── src/
│       ├── pages/   # Dashboard, Notes, Register, Landing
│       ├── components/  # Calendar, GoalProgress, etc.
│       ├── context/ # Global state (useReducer + Context API)
│       └── assets/wrappers/  # styled-components
├── controllers/     # Route handlers
├── routes/          # Express routes
├── middleware/      # Auth, error handling
├── models/          # Mock data (User, Goal, Note, Quote)
└── server.js        # Express server
```

## 💡 What I learned / improved

- **Context API + useReducer** — global state management without Redux
- **JWT authentication** — protecting routes with middleware
- **AI integration** — calling the Claude API from a React component
- **Styled-components** — component-scoped CSS
- **React Router v6** — protected routes pattern

## 📬 Contact

Parisa Tahery · [LinkedIn](https://www.linkedin.com/in/parisa-taheri-a6688a13b/) · Utrecht, Netherlands
