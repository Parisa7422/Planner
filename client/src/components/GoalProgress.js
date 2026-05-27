import { useState } from "react";
import Wrapper from "../assets/wrappers/GoalProgressCard";
import { useAppContext } from "../context/appContext";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  Stack,
} from "@mui/material";

const GoalProgress = () => {
  const { habits, createHabit, deleteHabit, toggleHabitDay } = useAppContext();

  // Modal state
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setAiSuggestions([]);
    setTitle("");
    setTarget("");
  };

  // Form state
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");
  const today = new Date().toISOString().split("T")[0];

  // AI suggestion state
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [aiLoading, setAiLoading] = useState(false);

  // Progress counting
  const totalCurrent = habits.reduce(
    (sum, h) => sum + (h.doneDates ? h.doneDates.length : 0),
    0
  );
  const totalTarget = habits.reduce((sum, h) => sum + (h.target || 0), 0);
  const overall = totalTarget
    ? Math.min(Math.round((totalCurrent / totalTarget) * 100), 100)
    : 0;

  // AI: suggest habits based on existing ones
  const suggestHabits = async () => {
    setAiLoading(true);
    setAiSuggestions([]);
    try {
      const existingNames = habits.map((h) => h.title).join(", ") || "none yet";
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 300,
          messages: [
            {
              role: "user",
              content: `I'm tracking these habits: ${existingNames}. Suggest 3 new complementary daily habits I could add. Reply with ONLY a JSON array of objects like: [{"title":"habit name","target":20,"reason":"one short sentence why"}]. No markdown, no extra text.`,
            },
          ],
        }),
      });
      const data = await response.json();
      const text = data.content?.[0]?.text || "[]";
      const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
      setAiSuggestions(parsed);
    } catch (err) {
      setAiSuggestions([{ title: "Could not load suggestions", target: 0, reason: "Try again later." }]);
    }
    setAiLoading(false);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 440,
    borderRadius: "18px",
    bgcolor: "#0f2a52",
    color: "white",
    boxShadow: 24,
    p: 3,
    maxHeight: "90vh",
    overflowY: "auto",
  };

  return (
    <Wrapper>
      <div className="goal-card">
        <header className="goal-header">
          <div className="goal-header-row">
            <p className="goal-label">This month's habits</p>
            <span className="goal-percentage">{overall}%</span>
          </div>
          <div className="goal-progress-bar">
            <div
              className="goal-progress-fill"
              style={{ width: `${overall}%` }}
            />
          </div>
        </header>

        {/* Habits list */}
        <ul className="habit-list">
          {habits.length === 0 && (
            <li className="habit-empty">No habits yet. Add your first one!</li>
          )}
          {habits.map((habit) => {
            const doneCount = habit.doneDates?.length || 0;
            const isDoneToday = habit.doneDates?.includes(today);

            return (
              <li key={habit.id} className="habit-row">
                <div className="habit-left">
                  <span className="habit-dot" />
                  <span className="habit-name">{habit.title}</span>
                </div>
                <div className="habit-right">
                  <span className="habit-progress">
                    {doneCount}/{habit.target}
                  </span>
                  <button
                    type="button"
                    className={`habit-action-btn ${isDoneToday ? "done" : ""}`}
                    onClick={() => toggleHabitDay(habit.id, today)}
                  >
                    {isDoneToday ? "✓" : "Today"}
                  </button>
                  <button
                    type="button"
                    className="habit-delete-btn"
                    onClick={() => deleteHabit(habit.id)}
                    title="Delete habit"
                  >
                    ✕
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Buttons */}
        <footer className="goal-footer">
          <button
            type="button"
            className="goal-btn goal-btn-primary"
            onClick={() => setOpen(true)}
          >
            + Add habit
          </button>
          <button
            type="button"
            className="goal-btn goal-btn-ghost"
            onClick={suggestHabits}
            disabled={aiLoading}
            title="Get AI habit suggestions"
          >
            {aiLoading ? "..." : "✨ AI suggest"}
          </button>
        </footer>

        {/* AI suggestions inline */}
        {aiSuggestions.length > 0 && (
          <div className="ai-suggestions">
            <p className="ai-label">✨ AI suggestions</p>
            {aiSuggestions.map((s, i) => (
              <div key={i} className="ai-card">
                <div className="ai-card-top">
                  <span className="ai-card-title">{s.title}</span>
                  <button
                    className="ai-add-btn"
                    onClick={() => {
                      createHabit({ title: s.title, target: s.target });
                      setAiSuggestions((prev) => prev.filter((_, j) => j !== i));
                    }}
                  >
                    Add
                  </button>
                </div>
                <p className="ai-card-reason">{s.reason}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add habit modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            New Habit
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              size="small"
              InputLabelProps={{ style: { color: "#cfe0ff" } }}
              sx={{
                "& .MuiOutlinedInput-root": { color: "white" },
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "#2b4b7a" },
              }}
            />
            <TextField
              label="Target (days this month)"
              type="number"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              fullWidth
              size="small"
              InputLabelProps={{ style: { color: "#cfe0ff" } }}
              sx={{
                "& .MuiOutlinedInput-root": { color: "white" },
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "#2b4b7a" },
              }}
            />
            <Button
              variant="contained"
              onClick={() => {
                if (!title.trim() || !target) return;
                createHabit({ title, target });
                setTitle("");
                setTarget("");
                handleClose();
              }}
              sx={{ borderRadius: "12px", textTransform: "none", fontWeight: 700 }}
            >
              Add habit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Wrapper>
  );
};

export default GoalProgress;
