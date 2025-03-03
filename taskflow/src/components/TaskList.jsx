import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import useTaskStore from "../store/TaskStore";
import { FiCheck, FiTrash2, FiRotateCcw } from "react-icons/fi";

const TaskList = () => {
  const { user } = useAuth();
  const { tasks, updateTask, deleteTask } = useTaskStore();

  useEffect(() => {
    if (user) {
      // TODO: Load tasks from backend
    }
  }, [user]);

  const handleToggleStatus = async (taskId, currentStatus) => {
    const newStatus = currentStatus === "completed" ? "pending" : "completed";
    await updateTask(taskId, { status: newStatus });
  };

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
  };

  return (
    <div className="task-list-wrapper">
      <h2 className="text-2xl font-semibold mb-6">Your Tasks</h2>
      <AnimatePresence>
        {tasks.length === 0 ? (
          <motion.div
            className="text-center py-8 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>No tasks yet. Add your first task above!</p>
          </motion.div>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <motion.li
                key={task.id}
                className={`bg-white rounded-lg shadow p-4 flex items-center justify-between ${
                  task.status === "completed" ? "opacity-75" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                layout
              >
                <div className="flex-1">
                  <h3 className={`text-lg font-medium ${
                    task.status === "completed" ? "line-through text-gray-500" : "text-gray-900"
                  }`}>
                    {task.title}
                  </h3>
                  {task.description && (
                    <p className={`mt-1 text-sm ${
                      task.status === "completed" ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {task.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleToggleStatus(task.id, task.status)}
                    className={`p-2 rounded-full ${
                      task.status === "completed"
                        ? "bg-gray-200 hover:bg-gray-300"
                        : "bg-green-100 hover:bg-green-200"
                    }`}
                  >
                    {task.status === "completed" ? (
                      <FiRotateCcw className="w-5 h-5 text-gray-600" />
                    ) : (
                      <FiCheck className="w-5 h-5 text-green-600" />
                    )}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDelete(task.id)}
                    className="p-2 rounded-full bg-red-100 hover:bg-red-200"
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
