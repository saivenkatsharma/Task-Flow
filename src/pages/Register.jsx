import RegisterForm from "../components/RegisterForm";
import "../styles/auth.css";

const Register = () => {
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
              <span className="feature-icon">🚀</span>
              <span className="feature-text">Get started in seconds</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🔒</span>
              <span className="feature-text">Secure account protection</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🌐</span>
              <span className="feature-text">Access from anywhere</span>
            </div>
          </div>
        </div>
        <div className="auth-right">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
