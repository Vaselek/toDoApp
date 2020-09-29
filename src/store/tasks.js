import {createSlice} from "@reduxjs/toolkit";

// Slice

const slice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    getTasksSuccess: (state, action) => (
      {
        ...state,
        tasks: action.payload
      }
    ),
    appendTask: (state, action) => (
      {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    )
  }
});

export default slice.reducer;

// Actions

const { getTasksSuccess, appendTask } = slice.actions;

export const getTasks = () => dispatch => {
  try {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch(getTasksSuccess(tasks))
  } catch (e) {
    return console.error(e.message)
  }
};

const saveTask = async (task) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  task.id = tasks.length;
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks))
  return task
};

export const createTask = (taskParams) => async (dispatch) => {
  try {
    const task = await saveTask(taskParams);
    dispatch(appendTask(task))
  } catch (e) {
    return console.error(e.message);
  }
};

const editTask = task => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskIndex = tasks.findIndex(el => el.id === task.id);
  tasks[taskIndex] = task;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const updateTask = task => dispatch => {
  try {
    editTask(task);
    dispatch(getTasks());
  } catch (e) {
    console.error(e.message);
  }
}
