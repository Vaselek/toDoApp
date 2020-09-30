export default class FireBaseAdapter {

  async fetchTasks() {
    const tasks  = await fetch('https://todo-2115d.firebaseio.com/tasks.json')
      .then(response => response.json());
    return Object.keys(tasks).map(k => ({id: k, ...tasks[k]})) || []
  }

  async createTask(task) {
    const response = await fetch('https://todo-2115d.firebaseio.com/tasks.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task)
    });
    const taskId = await response.json();
    task.id = taskId;
    return task
  }

  async updateTask(task) {
    const response = await fetch('https://todo-2115d.firebaseio.com/tasks/' + task.id + '.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task)
    });
    const taskId = await response.json();
    console.log('update', taskId);
    console.log('task', task);

    // const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // const taskIndex = tasks.findIndex(el => el.id === task.id);
    // tasks[taskIndex] = task;
    // localStorage.setItem('tasks', JSON.stringify(tasks));
    return task;
  }

}