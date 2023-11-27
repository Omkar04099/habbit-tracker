import {combineReducers} from 'redux';
import taskReducer from './taskReducer';

export const reducers = combineReducers({
    task: taskReducer
});

// reducers.js
const initialState = {
    habbits: [{"id":1,"title":"Go for a Hike"},{"id":2,"title":"Explore a Nature Trail"},{"id":3,"title":"Try a New Recipe"}],
    status: 'None'
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_HABBIT':
        return {
          ...state,
          habbits: [action.payload, ...state.habbits],
        };
      case 'REMOVE_HABBIT':
        return {
          ...state,
          habbits: state.habbits.filter(item => item.id !== action.payload),
        };
      case 'MARK_AS_DONE':
        return{
          ...state,
          status: 'Done'
        };
      case 'MARK_AS_UNDONE':
        return{
          ...state,
          status: 'Undone'
        };
      case 'MARK_AS_NONE':
          return{
            ...state,
            status: 'None'
          };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  


