import { create } from 'zustand';
import { taskService } from '../supabase';

const useTaskStore = create((set) => ({
  tasks: [],
  loading: false,
  error: null,

  // Load tasks for a user
  loadTasks: async (userId) => {
    set({ loading: true, error: null });
    try {
      const tasks = await taskService.getUserTasks(userId);
      set({ tasks, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Create a new task
  createTask: async (taskData) => {
    set({ loading: true, error: null });
    try {
      const newTask = await taskService.createTask(taskData);
      set((state) => ({
        tasks: [newTask, ...state.tasks],
        loading: false
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Update a task
  updateTask: async (taskId, updates) => {
    set({ loading: true, error: null });
    try {
      const updatedTask = await taskService.updateTask(taskId, updates);
      set((state) => ({
        tasks: state.tasks.map(task =>
          task.id === taskId ? updatedTask : task
        ),
        loading: false
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Delete a task
  deleteTask: async (taskId) => {
    set({ loading: true, error: null });
    try {
      await taskService.deleteTask(taskId);
      set((state) => ({
        tasks: state.tasks.filter(task => task.id !== taskId),
        loading: false
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));

export default useTaskStore;
