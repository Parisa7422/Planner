// Mock data for goals (simulating a database)
const mockGoals = [
  {
    id: 1,
    title: "First Goal",
    content: "This is the content of the first goal.",
    done: false,
    user_id: 1,
  },
  {
    id: 2,
    title: "Second Goal",
    content: "This is the content of the second goal.",
    done: true,
    user_id: 2,
  },
];

// Function to add a new goal
const addTodo = (req, res) => {
  const newGoal = {
    id: mockGoals.length + 1,
    ...req.body,
    user_id: req.user.userId,
  };
  mockGoals.push(newGoal);
  res.status(201).json({ goal: newGoal });
};

// Function to get all goals for a user
const getTodos = (req, res) => {
  const userGoals = mockGoals.filter(
    (goal) => goal.user_id === req.user.userId
  );
  res.status(200).json({ goals: userGoals });
};

// Function to update a goal
const updateTodo = (req, res) => {
  const { id: todoId } = req.params;
  const goalIndex = mockGoals.findIndex((goal) => goal.id === parseInt(todoId));
  if (goalIndex === -1) {
    return res.status(404).json({ message: "Goal not found" });
  }
  // Update goal with new data from request body
  mockGoals[goalIndex] = { ...mockGoals[goalIndex], ...req.body };
  res.status(200).json({ goal: mockGoals[goalIndex] });
};

// Function to delete a goal
const deleteTodo = (req, res) => {
  const { id: todoId } = req.params;
  const goalIndex = mockGoals.findIndex((goal) => goal.id === parseInt(todoId));
  if (goalIndex === -1) {
    return res.status(404).json({ message: "Goal not found" });
  }
  const [deletedGoal] = mockGoals.splice(goalIndex, 1);
  res
    .status(200)
    .json({ message: "Goal deleted successfully", goal: deletedGoal });
};

export { addTodo, getTodos, updateTodo, deleteTodo };
