import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useAuth } from "../context/AuthContext";
import useTaskStore from "../store/TaskStore";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { loadTasks } = useTaskStore();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      loadTasks(user.id);
    }
  }, [user, navigate, loadTasks]);

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        className="dashboard-content bg-white rounded-lg shadow-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="welcome-section mb-8">
          <h1 className="text-3xl font-bold text-indigo-600 mb-2">
            Welcome back, {user.email}!
          </h1>
          <p className="text-gray-600">
            Manage your tasks efficiently
          </p>
        </div>

        <div className="task-section grid gap-8">
          <motion.div 
            className="task-form-container bg-white rounded-lg shadow p-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>
            <TaskForm />
          </motion.div>

          <motion.div 
            className="task-list-container bg-white rounded-lg shadow p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <TaskList />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;