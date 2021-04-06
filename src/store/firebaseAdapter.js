const BASE_URL = 'https://todo-2115d.firebaseio.com/';

export default class FireBaseAdapter {

  async fetchTasks() {
    const tasks  = await fetch(BASE_URL + 'tasks.json')
      .then(response => response.json());
    return Object.keys(tasks).map(k => ({id: k, ...tasks[k]})) || [];
  }

  async createTask(task) {
    const response = await fetch(BASE_URL + 'tasks.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task)
    });
    const taskId = await response.json();
    task.id = taskId.name;
    return task
  }

  async updateTask(task) {
    await fetch(BASE_URL + 'tasks/' + task.id + '.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task)
    });
    return task;
  }

}