import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://rkejgpvjtddghnkobadm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrZWpncHZqdGRkZ2hua29iYWRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMDk0ODIsImV4cCI6MjA1NjU4NTQ4Mn0.bhWX1XlOKtArjkKxYscs8N6wQOgFt2Px_xH7nVKo9JU"
);

export default supabase;

// Task related functions
export const taskService = {
  // Create a new task
  createTask: async (taskData) => {
    const { data, error } = await supabase
      .from('tasks')
      .insert([taskData])
      .select();
    
    if (error) throw error;
    return data[0];
  },

  // Get tasks for a user
  getUserTasks: async (userId) => {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  // Update a task
  updateTask: async (taskId, updates) => {
    const { data, error } = await supabase
      .from('tasks')
      .update(updates)
      .eq('id', taskId)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  // Delete a task
  deleteTask: async (taskId) => {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', taskId);
    
    if (error) throw error;
  }
};

// Simple task service functions for compatibility
export const fetchTasks = async (userId) => {
  return taskService.getUserTasks(userId);
};

export const addTask = async (task) => {
  return taskService.createTask(task);
};
