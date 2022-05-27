import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../config/routes';
import { AuthContext } from '../../context/AuthContext';
import './LoginForm.modules.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [validation, setValidation] = useState('');

  let usernameRed = '';
  if (validation) {
    usernameRed = 'red';
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (error) {
      console.log(error);
      if (error.response.statusText === 'Unauthorized') {
        setValidation('Invalid Username or Password');
      }
    }
  }

  return (
    <form>
      <div className="form-0">
        <label className={usernameRed} htmlFor="username">
          Username
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div className="center">
        {validation && (
          <p className="error" style={{ marginLeft: '-10px' }}>
            {validation}
          </p>
        )}
      </div>
      <div className="button login-button">
        <button onClick={handleSubmit}>Login</button>
        <button
          onClick={() => {
            navigate(`${ROUTES.SIGN_UP}`);
          }}
        >
          Create Account
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
