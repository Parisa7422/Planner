import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
  HANDLE_CHANGE,
  GET_GOALS,
  CLEAR_VALUES,
  GET_QUOTES,
  GET_NOTES,
  EDIT_NOTE,
  OPEN_INPUT,
  CLOSE_INPUT,
  GET_PERCENTAGE,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertType: "",
  alertText: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  title: "",
  content: "",
  done: false,
  goals: [],
  percentage: 0,
  editTodoId: "",
  quotes: [],
  noteContent: "",
  noteTitle: "",
  notes: [],
  isExpand: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // reducer is going to be function which will handle disptach
  const [state, dispatch] = useReducer(reducer, initialState);

  // axios
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  //request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // response

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // console.log(error.response)
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  // Local Storage
  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );

      const { user, token } = data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, alertText },
      });
      // local storage
      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  // LogoutUser
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  //handlechange
  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  //Expand Input
  const openInput = () => {
    dispatch({ type: OPEN_INPUT });
  };
  const closeInput = () => {
    dispatch({ type: CLOSE_INPUT });
  };

  //Clear values
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  //Goal
  const createGoal = async ({ title }) => {
    try {
      const { content, done, percentage } = state;
      await authFetch.post("/goals/add-todo", {
        title,
        content,
        done,
      });

      dispatch({ type: GET_PERCENTAGE, payload: percentage });
      // dispatch({ type: ADD_GOAL });
    } catch (error) {
      return console.log(error);
    }
  };
  const getPercentage = async () => {
    const { goals } = state;
    console.log(goals.length);
    let count = 0;
    for (let i = 0; i < goals.length; i++) {
      if (goals[i].done === true) {
        count++;
      }
    }

    const percentage = Math.floor((count * 100) / goals.length);
    dispatch({ type: GET_PERCENTAGE, payload: { percentage } });
    console.log("goals: " + goals.length);
    console.log("percantage is: " + percentage);
  };

  const getGoals = async () => {
    try {
      const { data } = await authFetch.get("/goals/todos");
      const { goals } = data;

      dispatch({
        type: GET_GOALS,
        payload: {
          goals,
        },
      });
      getPercentage();
    } catch (error) {
      logoutUser();
    }
  };

  const updateGoal = async (id) => {
    try {
      const { goals } = state;
      var response = await authFetch.patch(`/goals/${id}`);

      const goal = goals.find((goal) => {
        return goal._id === id;
      });
      goal.done = response.data.updateTodo.done;
      goal._id = response.data.updateTodo._id;
      goal.content = response.data.updateTodo.content;
      goal.title = response.data.updateTodo.title;

      dispatch({ type: GET_GOALS, payload: { goals } });
    } catch (error) {
      return console.log(error);
    }
    getPercentage();
  };

  const deleteGoal = async (id) => {
    try {
      const { percentage } = state;
      await authFetch.delete(`goals/${id}`);
      dispatch({ type: GET_PERCENTAGE, payload: percentage });
    } catch (error) {
      return console.log(error);
    }
  };

  // Quotes
  const getAllQuotes = async () => {
    try {
      const { data } = await authFetch.get("/quotes");
      const { quotes } = data;
      dispatch({
        type: GET_QUOTES,
        payload: {
          quotes,
        },
      });
    } catch (error) {
      return console.log(error);
    }
  };

  // Notes

  const createNote = async () => {
    try {
      const { noteContent, noteTitle } = state;
      await authFetch.post("/notes", {
        noteContent,
        noteTitle,
      });
    } catch (error) {
      return console.log("error");
    }
  };

  const getNotes = async () => {
    try {
      const { data } = await authFetch.get("/notes");
      const { notes } = data;
      // console.log(notes);

      dispatch({
        type: GET_NOTES,
        payload: {
          notes,
        },
      });
    } catch (error) {
      return console.log(error);
    }
  };

  const updateNote = async (id) => {
    try {
      const { noteTitle, noteContent } = state;
      await authFetch.patch(`/notes/${id}`, {
        noteContent,
        noteTitle,
      });
      dispatch({
        type: EDIT_NOTE,
        payload: {
          noteContent,
          noteTitle,
        },
      });
    } catch (error) {
      return console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await authFetch.delete(`/notes/${id}`);
    } catch (error) {
      return console.log(error);
    }
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        logoutUser,
        handleChange,
        clearValues,
        openInput,
        closeInput,
        createGoal,
        getGoals,
        updateGoal,
        deleteGoal,
        getPercentage,
        getAllQuotes,
        createNote,
        getNotes,
        deleteNote,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};
export { AppProvider, initialState, useAppContext };
