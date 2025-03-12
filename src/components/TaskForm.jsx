import { useState } from "react";
import { motion } from "framer-motion";
import useTaskStore from "../store/TaskStore";
import { useAuth } from "../context/AuthContext";
import { FiPlus } from "react-icons/fi";

const TaskForm = () => {
  const { user } = useAuth();
  const { createTask } = useTaskStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    try {
      await createTask({
        title: title.trim(),
        description: description.trim(),
        user_id: user.uid,
        status: "pending",
        created_at: new Date().toISOString()
      });
      setTitle("");
      setDescription("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <motion.div 
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center">
            <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            {error}
          </div>
        </motion.div>
      )}
      
      <div className="form-group">
        <label htmlFor="title" className="block text-sm font-medium text-indigo-700 mb-1">
          Task Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-lg border-indigo-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white/80 backdrop-blur-sm transition-all duration-200 hover:shadow-md p-3"
          placeholder="Enter task title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description" className="block text-sm font-medium text-indigo-700 mb-1">
          Description (optional)
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full rounded-lg border-indigo-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white/80 backdrop-blur-sm transition-all duration-200 hover:shadow-md p-3"
          rows="3"
          placeholder="Enter task description"
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.3)" }}
        whileTap={{ scale: 0.97 }}
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 font-medium text-lg"
      >
        <div className="flex items-center justify-center">
          <FiPlus className="mr-2 h-5 w-5" />
          Add Task
        </div>
      </motion.button>
    </form>
  );
};

export default TaskForm;
