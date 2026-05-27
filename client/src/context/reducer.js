import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  SETUP_USER_ERROR,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  LOGOUT_USER,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  GET_GOALS,
  GET_QUOTES,
  GET_NOTES,
  EDIT_NOTE,
  EDIT_GOAL,
  OPEN_INPUT,
  CLOSE_INPUT,
  GET_PERCENTAGE,
  CREATE_HABITS,
  UPDATE_HABIT,
  DELETE_HABIT,
  TOGGLE_HABIT_DAY,
  LOAD_HABITS,
} from "./actions";
import { initialState } from "./appContext";
const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }

  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }

  if (action.type === CLEAR_VALUES) {
    const initialState = {
      content: "",
      noteContent: "",
      noteTitle: "",
    };

    return {
      ...state,
      ...initialState,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }

  if (action.type === OPEN_INPUT) {
    return {
      ...state,
      isExpand: true,
    };
  }
  if (action.type === CLOSE_INPUT) {
    return {
      ...state,
      isExpand: false,
    };
  }
  if (action.type === EDIT_GOAL) {
    return {
      ...state,
      done: action.done.payload,
    };
  }
  if (action.type === GET_GOALS) {
    return {
      ...state,
      goals: action.payload.goals,
      percentage: action.payload.percentage,
    };
  }
  if (action.type === GET_PERCENTAGE) {
    return {
      ...state,
      percentage: action.payload.percentage,
    };
  }

  if (action.type === GET_QUOTES) {
    return {
      ...state,
      quotes: action.payload.quotes,
    };
  }

  if (action.type === GET_NOTES) {
    return {
      ...state,
      notes: action.payload.notes,
    };
  }
  if (action.type === EDIT_NOTE) {
    return {
      ...state,
      noteContent: action.payload.noteContent,
      noteTitle: action.payload.noteTitle,
    };
  }
  if (action.type === CREATE_HABITS) {
    return {
      ...state,
      habits: [...state.habits, action.payload.habits],
    };
  }

  if (action.type === UPDATE_HABIT) {
    return {
      ...state,
      habits: state.habits.map((habit) =>
        habit.id === action.payload.id ? action.payload : habit,
      ),
    };
  }

  if (action.type === DELETE_HABIT) {
    return {
      ...state,
      habits: state.habits.filter((habit) => habit.id !== action.payload),
    };
  }

  if (action.type === TOGGLE_HABIT_DAY) {
    const { habitId, date } = action.payload;

    return {
      ...state,
      habits: state.habits.map((habit) => {
        if (habit.id !== habitId) return habit;

        const alreadyDone = habit.doneDates.includes(date);

        return {
          ...habit,
          doneDates: alreadyDone
            ? habit.doneDates.filter((day) => day !== date)
            : [...habit.doneDates, date],
        };
      }),
    };
  }

  if (action.type === LOAD_HABITS) {
    return {
      ...state,
      habits: action.payload,
    };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
