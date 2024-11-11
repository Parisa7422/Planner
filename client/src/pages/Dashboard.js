import Wrapper from "../assets/wrappers/DashboardPage";
import Inspiration from "../components/Inspiration";
import RightSideBar from "../components/RightSideBar";
import MonthButton from "../components/MonthButton";
import Calender from "../components/Calender";
import { useState, useEffect } from "react";
import GoalProgress from "../components/GoalProgress";
import { useAppContext } from "../context/appContext";

const Dashboard = () => {
  const [selectedMonth, setMonth] = useState("");

  //get index of the selected month from MonthButton component
  const handleClick = (monthName) => {
    setMonth(monthName);
  };

  console.log(selectedMonth);
  return (
    <Wrapper>
      <RightSideBar />
      <div className="center-items">
        <Inspiration />
        <MonthButton handleClick={handleClick} />
        <div className="flex-row">
          <Calender month={selectedMonth} />
          <GoalProgress />
        </div>
      </div>
    </Wrapper>
  );
};
export default Dashboard;
