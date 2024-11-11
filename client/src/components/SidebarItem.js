import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import InputText from "./InputText";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";

const SidebarItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    getGoals,
    goals,
    updateGoal,
    deleteGoal,
    createGoal,
    getPercentage,
    clearValues,
    content,
    closeInput,
    percentage,
  } = useAppContext();

  // Open sidebar item
  const handleClick = () => {
    setIsOpen(true);
    getGoals();
  };

  const filtered = goals.filter(({ title }) => {
    return title === props.name;
  });

  const handleEdit = (id, done) => {
    updateGoal(id);
  };

  const handleDelete = (id) => {
    deleteGoal(id);
    console.log("Attempting to delete goal with ID:", id);
    deleteGoal(id);
    setTimeout(() => {
      getGoals();
    }, 50);
  };

  // create Goal
  const onSubmit = (e) => {
    e.preventDefault();
    const title = props.name;
    createGoal({ title });
    setTimeout(() => {
      getGoals();
    }, 50);
    clearValues();
    closeInput();
  };

  return (
    <div
      onClick={handleClick}
      name={props.name}
      className={`sidebar-btn sidebar-btn${isOpen && "-select"}`}
    >
      {props.title}
      <div className="goal-input-container">
        {" "}
        {isOpen && (
          <InputText
            placeholder="Add a goal ..."
            onAdd={onSubmit}
            name="content"
            value={content}
            class="goals-textarea"
            formStyle="create-goal"
            visible={{ display: "none" }}
          />
        )}
      </div>
      {isOpen && (
        <div>
          <ul className="list-items">
            {filtered.map((goal) => {
              return (
                <li
                  key={goal._id}
                  className="list-item"
                  style={{
                    textDecoration: goal.done ? "line-through" : "none",
                  }}
                  onClick={() => {
                    handleEdit(goal.id, goal.done);
                  }}
                >
                  {goal.content}
                  <button
                    className="icon-btn"
                    onClick={() => {
                      handleDelete(goal.id);
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {isOpen && (
        <button
          onMouseDown={() => {
            setIsOpen(false);
            clearValues();
          }}
          className="icon-btn close-btn"
        >
          <CancelIcon />
        </button>
      )}
    </div>
  );
};
export default SidebarItem;
