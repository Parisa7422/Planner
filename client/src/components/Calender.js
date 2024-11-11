import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/CalenderBox";

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
      currentDate = new Date(`${props.month} 17, 2022 03:24:00`);
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
    </Wrapper>
  );
};
export default Calender;
