import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    tasks: [],
    filter: 'all',
  }),

  getters: {
    filteredTasks(state) {
      if (state.filter === 'completed') {
        return state.tasks.filter(task => task.completed);
      } else if (state.filter === 'active') {
        return state.tasks.filter(task => !task.completed);
      }
      return state.tasks;
    },
  },

  actions: {
    addTask(taskText) {
      this.tasks.push({ text: taskText, completed: false });
    },

    removeTask(index) {
      this.tasks.splice(index, 1);
    },

    completeTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },

    editTask(index, updatedText) {
      this.tasks[index].text = updatedText;
    },

    filterTasks(type) {
      this.filter = type;
    },
  },
});
