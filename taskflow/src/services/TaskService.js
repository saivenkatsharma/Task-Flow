import supabase from "../supabase";

export const fetchTasks = async (userId) => {
  const { data, error } = await supabase.from("tasks").select("*").eq("user_id", userId);
  if (error) throw error;
  return data;
};

export const addTask = async (task) => {
  const { data, error } = await supabase.from("tasks").insert([task]);
  if (error) throw error;
  return data;
};
