import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNewUser } from '../../http/auth';
import { ROUTES } from '../../config/routes';
import './RegisterForm.modules.css';
import { registerReds, setRegisterErrors } from '../../helpers/jwt';

function RegisterForm() {
  const redObject = {
    usernameRed: '',
    firstNameRed: '',
    lastNameRed: '',
    emailRed: '',
    birthDateRed: '',
    passwordRed: '',
  };

  const [user, setUser] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    password: '',
  });

  const navigate = useNavigate();

  async function handleSubmit(e) {
    setErrors({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      birthDate: '',
      password: '',
    });
    e.preventDefault();
    try {
      await createNewUser(user);
      navigate(`${ROUTES.SIGN_IN}`, { state: { success: true } });
    } catch (error) {
      if (error.code === 'ERR_BAD_REQUEST') {
        const messages = error.response.data.message;
        setRegisterErrors(messages, setErrors);
      }
    }
  }

  function handleChange(e) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  registerReds(errors, redObject);

  return (
    <form>
      <div className="form-1">
        <div className="firstName">
          <label className={redObject.firstNameRed} htmlFor="firstName">
            First Name
            <input
              name="firstName"
              id="firstName"
              value={user.firstName}
              onChange={handleChange}
            />
          </label>
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div className="birthDate">
          <label className={redObject.birthDateRed} htmlFor="birthDate">
            Date of birth
            <input
              name="birthDate"
              id="birthDate"
              type="date"
              value={user.birthDate}
              onChange={handleChange}
            />
          </label>
          {errors.birthDate && <p className="error">{errors.birthDate}</p>}
        </div>
        <div className="lastName">
          <label className={redObject.lastNameRed} htmlFor="lastName">
            Last Name
            <input
              name="lastName"
              id="lastName"
              value={user.lastName}
              onChange={handleChange}
            />
          </label>
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div className="email">
          <label className={redObject.emailRed} htmlFor="email">
            Email
            <input
              name="email"
              id="email"
              type="email"
              value={user.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="userName">
          <label className={redObject.usernameRed} htmlFor="username">
            Username
            <input
              name="username"
              id="username"
              value={user.username}
              onChange={handleChange}
            />
          </label>
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="password">
          <label className={redObject.passwordRed} htmlFor="password">
            Password
            <input
              name="password"
              id="password"
              type="password"
              value={user.password}
              onChange={handleChange}
            />
          </label>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
      </div>
      <div className="button form-button">
        <button onClick={handleSubmit}>Sign Up</button>
      </div>
    </form>
  );
}

export default RegisterForm;
