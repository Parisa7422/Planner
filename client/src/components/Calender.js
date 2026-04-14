import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/CalenderBox";
import { Modal, Box, Typography, Stack, Checkbox } from "@mui/material";
import { useAppContext } from "../context/appContext";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Calender = (props) => {
  useEffect(() => {
    getSelectedMonth();
    //  console.log("props  after use Effect: " + props.month);
  }, [props.month]);
  //First day of CURRENT MONTH
  function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1);
  }

  const getSelectedMonth = () => {
    let currentDate = new Date();
    if (props.month) {
      currentDate = new Date(`${props.month} 17, 2025 03:24:00`);
    }
    return currentDate;
  };

  const date = getSelectedMonth();
  //console.log(date);

  const firstDayCurrentMonth = getFirstDayOfMonth(
    date.getFullYear(),
    date.getMonth()
  );

  //  Last Day of CURRENT MONTH
  function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0);
  }

  const lastDayCurrentMonth = getLastDayOfMonth(
    date.getFullYear(),
    date.getMonth()
  );

  // get first day of the month as a string
  // get number of days in per month as a number
  const startTheWeek = String(firstDayCurrentMonth).slice(0, 3);
  const daysOftheMonth = String(lastDayCurrentMonth).slice(8, 10);
  const numberOfDays = parseInt(daysOftheMonth);

  // console.log("first day of week " + startTheWeek);
  // console.log("days of the month " + numberOfDays);

  // Create the arry
  const createArray = () => {
    const array = [];
    for (let i = 1; i <= numberOfDays; i++) {
      array.push(i);
    }
    return array;
  };
  const monthArray = createArray();

  // get Today date
  const today = new Date().getDate();
  // console.log(today);

  //get month Long
  const currentMonth = new Date();
  const monthLong = currentMonth.toLocaleString("en-US", { month: "long" });

  console.log("current month: " + monthLong);

  //for model
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
  //importing from appcontext
  const { habits } = useAppContext();
  //selected date
  const [selectedDateKey, setSelectedDateKey] = useState("");
  const selected = getSelectedMonth();
  const y = selected.getFullYear();
  const m = selected.getMonth() + 1;

  return (
    <Wrapper>
      {days.map((day) => {
        return (
          <div className="day" key={day}>
            {day}
          </div>
        );
      })}
      <div style={{ gridColumnStart: days.indexOf(startTheWeek) }}></div>
      {monthArray.map((month, index) => {
        return (
          <div
            key={month}
            onClick={() => {
              const day = month;
              const key = `${y}-${String(m).padStart(2, "0")}-${String(
                day
              ).padStart(2, "0")}`;
              setSelectedDateKey(key);
              setOpen(true);
            }}
            className={
              (index + 1 === today) &
              (!props.month || props.month === monthLong)
                ? "days select"
                : "days"
            }
          >
            {month}
          </div>
        );
      })}
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
            List of Habit, {selectedDateKey}
          </Typography>
          <Stack spacing={2}>
            {/* Habit's List */}
            <ul className="habit-list">
              {habits.map((habit) => (
                <li key={habit.id} className="habit-row">
                  <div className="habit-left">
                    <Checkbox
                      size="small"
                      onChange={() => {
                        console.log(habit.id);
                      }}
                    />
                    <span className="habit-name">{habit.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Stack>
        </Box>
      </Modal>
    </Wrapper>
  );
};
export default Calender;
