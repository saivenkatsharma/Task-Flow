import { create } from 'zustand';
import { taskService } from '../../supabase';

const useTaskStore = create((set) => ({
  tasks: [],
  loading: false,
  error: null,

  // Load tasks for a user
  loadTasks: async (userId) => {
    set({ loading: true, error: null });
    try {
      if (!userId) {
        console.error('No user ID provided to loadTasks');
        set({ loading: false, error: 'User not authenticated' });
        return;
      }
      
      console.log('Loading tasks for user ID:', userId);
      
      // Try to get tasks from Supabase
      try {
        const tasks = await taskService.getUserTasks(userId);
        console.log('Tasks loaded:', tasks);
        set({ tasks, loading: false });
      } catch (supabaseError) {
        console.error('Supabase error:', supabaseError);
        
        // If we can't get tasks from Supabase, provide some sample tasks
        const sampleTasks = [
          { id: 'sample1', title: 'Welcome to TaskFlow', description: 'This is a sample task to get you started', status: 'pending', user_id: userId, created_at: new Date().toISOString() },
          { id: 'sample2', title: 'Create your first task', description: 'Use the form above to create your first real task', status: 'pending', user_id: userId, created_at: new Date().toISOString() }
        ];
        
        set({ tasks: sampleTasks, loading: false });
      }
    } catch (error) {
      console.error('General error in loadTasks:', error);
      set({ error: error.message || 'Failed to load tasks', loading: false });
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
