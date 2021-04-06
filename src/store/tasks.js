import { createSlice } from "@reduxjs/toolkit";
import FirebaseAdapter from "./firebaseAdapter";
import { createSelector } from "reselect";

const storageAdapter = new FirebaseAdapter();

// Slice

const slice = createSlice({
  name: 'tasks',
  initialState: {
    list: [],
  },
  reducers: {
    getTasksSuccess: (state, action) => {
      state.list = action.payload
    },
    appendTask: (state, action) => {
      state.list.push(action.payload)
    },
    updateTasksSuccess: (state, action) => {
      const task = state.list.find(el => el.id === action.payload.id);
      task.isCompleted = action.payload.isCompleted;
    }
  }
});

export default slice.reducer;

// Actions

const { getTasksSuccess, appendTask, updateTasksSuccess } = slice.actions;

export const getTasks = () => async dispatch => {
  try {
    const tasks = await storageAdapter.fetchTasks();
    dispatch(getTasksSuccess(tasks))
  } catch (e) {
    return console.error(e.message)
  }
};

export const createTask = (taskParams) => async (dispatch) => {
  try {
    const task = await storageAdapter.createTask(taskParams);
    dispatch(appendTask(task))
  } catch (e) {
    return console.error(e.message);
  }
};

export const updateTask = task => async (dispatch) => {
  try {
    const updatedTask = await storageAdapter.updateTask(task);
    dispatch(updateTasksSuccess(updatedTask));
  } catch (e) {
    console.error(e.message);
  }
};

// Selectors

const tasksSelector = ({tasks}) => tasks;
const taskListSelector = createSelector(
  tasksSelector,
  ({ list }) => list
);

export const newTasksSelector = createSelector(
  taskListSelector,
  list => list.filter(task => !task.isCompleted)
);

export const completedTasksSelector = createSelector(
  taskListSelector,
  list => list.filter(task => task.isCompleted)
);

