import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import CalendarTodayRounded from "@mui/icons-material/CalendarTodayRounded";
import { useState } from "react";
const MonthButton = (props) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get current month for style the background
  const getMonth = () => {
    const today = new Date();
    return today.toLocaleString("en-US", { month: "long" });
  };

  // NEXT and PREVIOUS Handlere
  const [index, setIndex] = useState(monthNames.indexOf(getMonth()));
  const [isClicked, setClicked] = useState(false);
  const handlePrevious = () => {
    props.handleClick(monthNames[index - 1]);
    setClicked(true);
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(monthNames.length - 1);
    }
  };

  const handleNext = () => {
    props.handleClick(monthNames[index + 1]);
    setClicked(true);
    if (index + 1 < monthNames.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div>
      <div className="month-buttons">
        {monthNames.map((month, index) => {
          return (
            <button
              onClick={() => {
                props.handleClick(month);
              }}
              key={index}
              className={
                month === getMonth() ? "month-btn-default" : "month-btn"
              }
            >
              {month}
            </button>
          );
        })}
      </div>
      {/* for medium screen */}
      <div className="month-container-m">
        <div onClick={handlePrevious} className="btn-m">
          <ArrowBackIosRoundedIcon />
        </div>
        <div className={!isClicked ? "btn-m month this-month" : "btn-m month"}>
          {" "}
          {isClicked ? monthNames[index] : getMonth()}
        </div>
        <div onClick={handleNext} className="btn-m">
          <ArrowForwardIosRoundedIcon />
        </div>
        <div
          onClick={() => {
            setClicked(false);
            props.handleClick(getMonth());
          }}
          className="btn-m"
        >
          <CalendarTodayRounded />
        </div>
      </div>
    </div>
  );
};
export default MonthButton;
