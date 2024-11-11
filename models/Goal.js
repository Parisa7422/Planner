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
    user_id: 1,
  },
];

// Functions to handle operations
export const getGoals = () => {
  return mockGoals;
};

export const getGoalById = (id) => {
  return mockGoals.find((goal) => goal.id === id);
};

export const addGoal = (goal) => {
  const newGoal = {
    id: mockGoals.length + 1,
    ...goal,
  };
  mockGoals.push(newGoal);
  return newGoal;
};

export const updateGoal = (id, updatedContent) => {
  const goalIndex = mockGoals.findIndex((goal) => goal.id === id);
  if (goalIndex !== -1) {
    mockGoals[goalIndex] = { ...mockGoals[goalIndex], ...updatedContent };
    return mockGoals[goalIndex];
  }
  return null;
};

export const deleteGoal = (id) => {
  const goalIndex = mockGoals.findIndex((goal) => goal.id === id);
  if (goalIndex !== -1) {
    return mockGoals.splice(goalIndex, 1);
  }
  return null;
};
