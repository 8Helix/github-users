import decode from 'jwt-decode';

function setToken(token) {
  localStorage.setItem('accessToken', token);
}

function removeToken() {
  localStorage.removeItem('accessToken');
}

function parse(accessToken) {
  if (!accessToken) {
    return {
      valid: false,
      payload: null,
    };
  }

  const decoded = decode(accessToken);
  const currentTime = Date.now() / 1000;

  return {
    valid: decoded.exp > currentTime,
    payload: decoded.payload,
  };
}

function setRegisterErrors(messages, setErrors) {
  if (messages.length) {
    messages
      .map((item) => item.split(' ')[0])
      .map((item) => {
        switch (item) {
          case 'firstName':
            setErrors((prev) => ({
              ...prev,
              firstName:
                'firstName must be longer than or equal to 2 characters',
            }));
            break;
          case 'lastName':
            setErrors((prev) => ({
              ...prev,
              lastName: 'lastName must be longer than or equal to 2 characters',
            }));
            break;

          case 'username':
            setErrors((prev) => ({
              ...prev,
              username: 'username must be longer than or equal to 2 characters',
            }));
            break;

          case 'email':
            setErrors((prev) => ({
              ...prev,
              email: 'email must be an email',
            }));
            break;

          case 'birthDate':
            setErrors((prev) => ({
              ...prev,
              birthDate: 'birthDate must be a valid ISO 8601 date string',
            }));
            break;

          case 'password':
            setErrors((prev) => ({
              ...prev,
              password: 'password must be longer than or equal to 8 characters',
            }));
            break;
        }
      });
  }
}

function registerReds(errors, errorObject) {
  if (errors.firstName) {
    errorObject.firstNameRed = 'red';
  }
  if (errors.lastName) {
    errorObject.lastNameRed = 'red';
  }
  if (errors.username) {
    errorObject.usernameRed = 'red';
  }
  if (errors.email) {
    errorObject.emailRed = 'red';
  }
  if (errors.birthDate) {
    errorObject.birthDateRed = 'red';
  }
  if (errors.password) {
    errorObject.passwordRed = 'red';
  }
}

export { parse, setToken, removeToken, setRegisterErrors, registerReds };
