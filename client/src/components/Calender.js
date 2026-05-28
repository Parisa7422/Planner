import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/CalenderBox";
import { Modal, Box, Typography, Stack, Checkbox } from "@mui/material";
import { useAppContext } from "../context/appContext";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Calender = ({ month, year }) => {
  const { habits } = useAppContext();
  const [open, setOpen] = useState(false);
  const [selectedDateKey, setSelectedDateKey] = useState("");

  const currentYear = year || new Date().getFullYear();
  const monthIndex = new Date(`${month} 1, ${currentYear}`).getMonth();

  const firstDay = new Date(currentYear, monthIndex, 1);
  const lastDay = new Date(currentYear, monthIndex + 1, 0);
  const numberOfDays = lastDay.getDate();

  // Monday-based offset (Mon=0 ... Sun=6)
  const rawDay = firstDay.getDay(); // 0=Sun, 1=Mon...
  const startOffset = rawDay === 0 ? 6 : rawDay - 1;

  const today = new Date();
  const isCurrentMonth =
    today.getMonth() === monthIndex && today.getFullYear() === currentYear;
  const todayDate = today.getDate();

  const style = {
    position: "absolute", top: "50%", left: "50%",
    transform: "translate(-50%, -50%)",
    width: 420, borderRadius: "18px",
    bgcolor: "#0f2a52", color: "white", boxShadow: 24, p: 3,
  };

  return (
    <Wrapper>
      {DAYS.map((day) => (
        <div className="day" key={day}>{day}</div>
      ))}

      {/* Empty cells for offset */}
      {Array.from({ length: startOffset }).map((_, i) => (
        <div key={`empty-${i}`} />
      ))}

      {Array.from({ length: numberOfDays }, (_, i) => i + 1).map((date) => {
        const m = String(monthIndex + 1).padStart(2, "0");
        const d = String(date).padStart(2, "0");
        const dateKey = `${currentYear}-${m}-${d}`;
        const isToday = isCurrentMonth && date === todayDate;

        return (
          <div
            key={date}
            onClick={() => { setSelectedDateKey(dateKey); setOpen(true); }}
            className={isToday ? "days select" : "days"}
          >
            {date}
          </div>
        );
      })}

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Habits — {selectedDateKey}
          </Typography>
          <Stack spacing={1}>
            {habits.length === 0 ? (
              <Typography sx={{ opacity: 0.6, fontSize: 14 }}>No habits yet.</Typography>
            ) : habits.map((habit) => {
              const isDone = habit.doneDates?.includes(selectedDateKey);
              return (
                <div key={habit.id} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Checkbox size="small" checked={isDone} readOnly sx={{ color: "white" }} />
                  <span style={{ fontSize: 14 }}>{habit.title}</span>
                  {isDone && <span style={{ fontSize: 12, opacity: 0.6 }}>✓ done</span>}
                </div>
              );
            })}
          </Stack>
        </Box>
      </Modal>
    </Wrapper>
  );
};

export default Calender;
