import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNewUser } from '../../http/auth';
import { ROUTES } from '../../config/routes';
import './RegisterForm.modules.css';

function RegisterForm() {
  const [user, setUser] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    password: '',
  });

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createNewUser(user);
      navigate(`${ROUTES.SIGN_IN}`, { state: { success: true } });
    } catch (error) {
      // Add Error messages to UI
      console.log(error);
    }
  }

  function handleChange(e) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <form>
      <div className="form-1">
        <label htmlFor="firstName">
          First Name
          <input
            name="firstName"
            id="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="birthDate">
          Date of birth
          <input
            name="birthDate"
            id="birthDate"
            type="date"
            value={user.birthDate}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            name="lastName"
            id="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            name="email"
            id="email"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="username">
          Username
          <input
            name="username"
            id="username"
            value={user.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            name="password"
            id="password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="button form-button">
        <button onClick={handleSubmit}>Sign Up</button>
      </div>
    </form>
  );
}

export default RegisterForm;
