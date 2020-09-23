import {createSlice} from "@reduxjs/toolkit";

// Slice

const slice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    getTasksSuccess: (state, action) => {
      state.tasks = action.payload;
    }
  }
});

export default slice.reducer;

// Actions

const { getTasksSuccess } = slice.actions;

export const getTasks = () => dispatch => {
  try {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch(getTasksSuccess(tasks))
  } catch (e) {
    return console.error(e.message)
  }
};

const saveTask = (task) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks))
};

export const createTask = (task) => dispatch => {
  try {
    saveTask(task);
    dispatch(getTasks());
  } catch (e) {
    return console.error(e.message);
  }
};
