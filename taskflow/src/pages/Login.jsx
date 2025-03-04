import LoginForm from "../components/LoginForm";
import "../styles/auth.css";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-left">
          <div className="auth-logo">
            <h1>TaskFlow</h1>
            <p className="tagline">Organize. Prioritize. Accomplish.</p>
          </div>
          <div className="auth-features">
            <div className="feature">
              <span className="feature-icon">📋</span>
              <span className="feature-text">Manage your tasks efficiently</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🔄</span>
              <span className="feature-text">Sync across all your devices</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📊</span>
              <span className="feature-text">Track your productivity</span>
            </div>
          </div>
        </div>
        <div className="auth-right">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
