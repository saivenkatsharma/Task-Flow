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
      // Use user.uid instead of user.id for Firebase authentication
      loadTasks(user.uid);
      console.log("Loading tasks for user:", user.uid);
    }
  }, [user, navigate, loadTasks]);

  if (!user) return null;

  return (
    <div className="w-full px-4 py-8 dashboard-container">
      {/* 3D Background Elements */}
      <div className="shape-blob shape-blob-1"></div>
      <div className="shape-blob shape-blob-2"></div>
      <div className="shape-blob shape-blob-3"></div>
      
      <motion.div 
        className="dashboard-content bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-8 max-w-6xl mx-auto border border-white/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="welcome-section mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <motion.h1 
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome back, {user.email.split('@')[0]}!
          </motion.h1>
          <motion.p 
            className="text-indigo-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Manage your tasks efficiently with our 3D-enhanced dashboard
          </motion.p>
        </div>

        <div className="task-section grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <motion.div 
            className="task-form-container bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-lg p-6 border border-indigo-100"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700 flex items-center">
              <span className="bg-indigo-600 text-white p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </span>
              Add New Task
            </h2>
            <TaskForm />
          </motion.div>

          <motion.div 
            className="task-list-container bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg p-6 border border-purple-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <TaskList />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;