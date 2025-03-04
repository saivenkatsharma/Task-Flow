import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import useTaskStore from "../store/TaskStore";
import { FiCheck, FiTrash2, FiRotateCcw } from "react-icons/fi";

const TaskList = () => {
  const { user } = useAuth();
  const { tasks, updateTask, deleteTask } = useTaskStore();

  const { loadTasks } = useTaskStore();

  useEffect(() => {
    if (user) {
      // Load tasks for the current user
      loadTasks(user.uid);
    }
  }, [user, loadTasks]);

  const handleToggleStatus = async (taskId, currentStatus) => {
    const newStatus = currentStatus === "completed" ? "pending" : "completed";
    await updateTask(taskId, { status: newStatus });
  };

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
  };

  return (
    <div className="task-list-wrapper">
      <h2 className="text-2xl font-semibold mb-6 text-purple-700 flex items-center">
        <span className="bg-purple-600 text-white p-2 rounded-lg mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </span>
        Your Tasks
      </h2>
      <AnimatePresence>
        {tasks.length === 0 ? (
          <motion.div
            className="text-center py-12 text-indigo-500 bg-indigo-50 rounded-xl border border-indigo-100 shadow-inner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="text-lg font-medium">No tasks yet. Add your first task above!</p>
          </motion.div>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <motion.li
                key={task.id}
                className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-5 flex items-center justify-between border ${task.status === "completed" ? "border-green-100 bg-green-50/50" : "border-indigo-100"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                layout
                whileHover={{ y: -5, boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex-1">
                  <h3 className={`text-lg font-medium ${
                    task.status === "completed" ? "line-through text-gray-500" : "text-indigo-900"
                  }`}>
                    {task.title}
                  </h3>
                  {task.description && (
                    <p className={`mt-2 text-sm ${
                      task.status === "completed" ? "text-gray-400" : "text-indigo-600"
                    }`}>
                      {task.description}
                    </p>
                  )}
                  <div className="mt-2 flex items-center">
                    <span className={`text-xs px-2 py-1 rounded-full ${task.status === "completed" ? "bg-green-100 text-green-800" : "bg-indigo-100 text-indigo-800"}`}>
                      {task.status === "completed" ? "Completed" : "In Progress"}
                    </span>
                    <span className="text-xs text-gray-500 ml-3">
                      {new Date(task.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.15, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleToggleStatus(task.id, task.status)}
                    className={`p-3 rounded-full shadow-md transition-all duration-200 ${
                      task.status === "completed"
                        ? "bg-indigo-100 hover:bg-indigo-200"
                        : "bg-green-100 hover:bg-green-200"
                    }`}
                  >
                    {task.status === "completed" ? (
                      <FiRotateCcw className="w-5 h-5 text-indigo-600" />
                    ) : (
                      <FiCheck className="w-5 h-5 text-green-600" />
                    )}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.15, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDelete(task.id)}
                    className="p-3 rounded-full shadow-md bg-red-100 hover:bg-red-200 transition-all duration-200"
                  >
                    <FiTrash2 className="w-5 h-5 text-red-600" />
                  </motion.button>
                </div>
              </motion.li>
            ))}
          </ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;
