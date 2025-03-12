import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { FiLogOut, FiUser, FiCheckSquare } from "react-icons/fi";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <motion.nav 
      className="bg-white/90 backdrop-blur-md shadow-lg border-b border-indigo-100 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-2 rounded-lg mr-3">
                <FiCheckSquare className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                TaskFlow
              </span>
            </Link>
          </motion.div>
          
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-6">
                <motion.div 
                  className="flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-full"
                  whileHover={{ y: -2 }}
                >
                  <FiUser className="text-indigo-600" />
                  <span className="text-indigo-700 font-medium">
                    {user.email.split('@')[0]}
                  </span>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full hover:shadow-lg flex items-center space-x-2"
                >
                  <FiLogOut />
                  <span>Logout</span>
                </motion.button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/login"
                    className="text-indigo-600 hover:text-indigo-800 px-4 py-2 rounded-full border border-indigo-200 hover:border-indigo-400 transition-all duration-200 text-sm font-medium flex items-center space-x-2"
                  >
                    <FiUser />
                    <span>Login</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.3)" }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/register"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full hover:shadow-lg transition-all duration-200 text-sm font-medium flex items-center space-x-2"
                  >
                    <FiCheckSquare />
                    <span>Register</span>
                  </Link>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;