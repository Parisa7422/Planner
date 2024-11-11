import { useEffect, useState } from "react";
import goalTree from "../assets/images/goal-tree.png";
import { useAppContext } from "../context/appContext";
const GoalProgress = () => {
  const { goals, getGoals, percentage, getPercentage } = useAppContext();

  useEffect(() => {
    getGoals();
    console.log("goals in the goalprogressbar : " + goals.length);
  }, [percentage]);

  // useEffect(() => {
  //   if (goals) {
  //     getDonesTasks();
  //     console.log("par");
  //   }
  // }, [goals]);

  // // Count done tasks
  // const getDonesTasks = () => {
  //   let count = 0;
  //   for (let i = 0; i < goals.length; i++) {
  //     if (goals[i].done === true) {
  //       count++;
  //     }
  //   }
  //   setCountGoal(count);
  //   //Calculate the precentage
  //   setPercentage(Math.floor((countDoneGoal * 100) / goals.length));
  // };

  return (
    <div className="goal-progressbar">
      <img className="backward-img" src={goalTree} alt="goal tree" />
      {/* <img className="forward-img" src={goalTree} alt="goal tree" /> */}

      <div className="progressbar-box">
        <div className="progress" style={{ width: `${percentage}%` }}>
          {percentage ? percentage + "%" : ""}
        </div>
        {/* count: {goals.length} done:{countDoneGoal} */}
      </div>
    </div>
  );
};
export default GoalProgress;
