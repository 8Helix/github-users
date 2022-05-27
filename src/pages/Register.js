import RegisterForm from '../components/forms/RegisterForm';
import './Register.modules.css';

function Register() {
  return (
    <div className="register">
      <div className="register-form">
        <h1>Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
