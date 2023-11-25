export const markAsDone=(task)=>{
    return (dispatch)=> {
        dispatch({
            type: 'done',
            payload: task
        })
    }
}

export const markAsUndone=(task)=>{
    return (dispatch)=> {
        dispatch({
            type: 'undone',
            payload: task
        })
    }
}

export const addHabbit = (habbit) => ({
    type: 'ADD_HABBIT',
    payload: habbit,
  });
  
export const removeHabbit = (itemId) => ({
    type: 'REMOVE_HABBIT',
    payload: itemId,
  });