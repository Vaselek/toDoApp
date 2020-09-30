export default class LocalStorageAdapter {

  fetchTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
  }

  createTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    task.id = tasks.length;
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return task
  }

  updateTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskIndex = tasks.findIndex(el => el.id === task.id);
    tasks[taskIndex] = task;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return task;
  }

}