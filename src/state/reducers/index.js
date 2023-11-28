import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

export const reducers = combineReducers({
  task: taskReducer,
});

// reducers.js
const initialState = {
  habbits: [
    {
      id: 1,
      title: "Go for a Hike",
      status: ["None", "None", "None", "None", "None", "None"],
    },
    {
      id: 2,
      title: "Explore a Nature Trail",
      status: ["None", "None", "None", "None", "None", "None"],
    },
    {
      id: 3,
      title: "Try a New Recipe",
      status: ["None", "None", "None", "None", "None", "None"],
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HABBIT":
      return {
        ...state,
        habbits: [action.payload, ...state.habbits],
      };
    case "REMOVE_HABBIT":
      return {
        ...state,
        habbits: state.habbits.filter((item) => item.id !== action.payload),
      };
    case "MARK_AS_DONE":
      const arr = action.payload;
      const habbitId = arr[0],
        index = arr[1];
      state.habbits[habbitId].status[index] = "Done";
      return {
        ...state,
      };
    case "MARK_AS_UNDONE":
      const array = action.payload;
      const habId = array[0],
        ind = array[1];
      state.habbits[habId].status[ind] = "Undone";
      return {
        ...state,
      };
    case "MARK_AS_NONE":
      const ar = action.payload;
      const hId = ar[0],
        i = ar[1];
      state.habbits[hId].status[i] = "None";
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default rootReducer;
