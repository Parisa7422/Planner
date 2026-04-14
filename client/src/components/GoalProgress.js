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
  // فعلاً داده‌ی فیک
  // const habitss = [
  //   { id: 1, name: "Reading", current: 5, target: 20, trend: "up" },
  //   { id: 2, name: "Healthy eating", current: 3, target: 20, trend: "steady" },
  //   {
  //     id: 3,
  //     name: "Listening to podcasts",
  //     current: 1,
  //     target: 20,
  //     trend: "down",
  //   },
  // ];

  const { habits, createHabit } = useAppContext();
  console.log(habits);

  // model
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 420,
    borderRadius: "18px",
    bgcolor: "#0f2a52",
    color: "white",
    boxShadow: 24,
    p: 3,
  };

  //habit title and target state
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");

  // Progress counting
  const totalCurrent = habits.reduce((sum, h) => sum + h.done, 0);
  const totalTarget = habits.reduce((sum, h) => sum + h.target, 0);
  const overall = totalTarget
    ? Math.round((totalCurrent / totalTarget) * 100)
    : 0;

  return (
    <Wrapper>
      <div className="goal-card">
        <header className="goal-header">
          <div className="goal-header-row">
            <p className="goal-label">This month’s habits</p>
            <span className="goal-percentage">{overall}%</span>
          </div>
          <div className="goal-progress-bar">
            <div
              className="goal-progress-fill"
              style={{ width: `${overall}%` }}
            />
          </div>
        </header>

        {/* Habit's List */}
        <ul className="habit-list">
          {habits.map((habit) => (
            <li key={habit.id} className="habit-row">
              <div className="habit-left">
                <span className="habit-dot" />
                <span className="habit-name">{habit.title}</span>
              </div>

              <div className="habit-right">
                <span className="habit-progress">
                  {habit.done}/{habit.target}
                </span>
                <span className={`habit-trend habit-trend--${habit.trend}`}>
                  {habit.trend === "up" && "▲"}
                  {habit.trend === "steady" && "▬"}
                  {habit.trend === "down" && "▼"}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <footer className="goal-footer">
          <button
            type="button"
            className="goal-btn goal-btn-primary"
            onClick={() => setOpen(true)}
          >
            Add habit
          </button>
          <button type="button" className="goal-btn goal-btn-ghost">
            View details
          </button>
        </footer>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ fontWeight: 700, mb: 2 }}
            >
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
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#2b4b7a",
                  },
                }}
              />
              <TextField
                label="Target (days)"
                type="number"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                fullWidth
                size="small"
                InputLabelProps={{ style: { color: "#cfe0ff" } }}
                sx={{
                  "& .MuiOutlinedInput-root": { color: "white" },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#2b4b7a",
                  },
                }}
              />
              <Button
                variant="contained"
                onClick={() => {
                  createHabit({
                    id: Date.now(),
                    title: title,
                    done: 0,
                    target: Number(target),
                    trend: "steady",
                    doneDates: [],
                  });
                  setTitle("");
                  setTarget("");
                  setOpen(false);
                }}
                sx={{
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: 700,
                }}
              >
                Add
              </Button>
            </Stack>
          </Box>
        </Modal>
      </div>
    </Wrapper>
  );
};

export default GoalProgress;
