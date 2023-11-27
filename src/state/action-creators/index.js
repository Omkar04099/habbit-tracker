export const markAsDone=(task)=>({
            type: 'MARK_AS_DONE',
            payload: task     
});

export const markAsUndone=(task)=>({
            type: 'MARK_AS_UNDONE',
            payload: task
});

export const markAsNone=(task)=>({
    type: 'MARK_AS_NONE',
    payload: task
});

export const addHabbit = (habbit) => ({
    type: 'ADD_HABBIT',
    payload: habbit,
  });
  
export const removeHabbit = (itemId) => ({
    type: 'REMOVE_HABBIT',
    payload: itemId,
  });