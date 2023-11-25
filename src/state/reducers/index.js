import {combineReducers} from 'redux';
import taskReducer from './taskReducer';

export const reducers = combineReducers({
    task: taskReducer
});

// reducers.js
const initialState = {
    habbits: [{"id":1,"title":"Go for a Hike"},{"id":2,"title":"Explore a Nature Trail"},{"id":3,"title":"Try a New Recipe"}],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_HABBIT':
        return {
          ...state,
          habbits: [...state.habbits, action.payload],
        };
      case 'REMOVE_HABBIT':
        return {
          ...state,
          habbits: state.habbits.filter(item => item.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  


