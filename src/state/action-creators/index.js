export const markAsDone = (habbitId, index) => ({
  type: "MARK_AS_DONE",
  payload: [habbitId, index],
});

export const markAsUndone = (habbitId, index) => ({
  type: "MARK_AS_UNDONE",
  payload: [habbitId, index],
});

export const markAsNone = (habbitId, index) => ({
  type: "MARK_AS_NONE",
  payload: [habbitId, index],
});

export const addHabbit = (habbit) => ({
  type: "ADD_HABBIT",
  payload: habbit,
});

export const removeHabbit = (itemId) => ({
  type: "REMOVE_HABBIT",
  payload: itemId,
});
