import { useLocation } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';
import './Login.modules.css';

function Login() {
  const { state } = useLocation();

  return (
    <div className="login">
      <div className="login-form">
        <h1>Login</h1>
        {state?.success && <h3>Sign up was successfull</h3>}
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
