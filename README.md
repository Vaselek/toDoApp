This is an educational project to learn how to use React Redux with Redux Toolkit.

The main advantage of the Redux Toolkit is the ability to keep most of logic inside one file due to the CreateSlice functions (see ./src/store/tasks.js).
This function takes the following arguments (the slice name, initial state, object that describes reducer (under the 'reducers' and 'extraReducers' keys) and return traditional redux actionCreators and reducer without boilerplate.