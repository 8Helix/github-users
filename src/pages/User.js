import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserData } from '../http/get';
import UserInfo from '../components/user/UserInfo';
import Repositories from '../components/user/Repositories';
import './User.modules.css';

function User() {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const { name } = useParams();

  useEffect(() => {
    setUser({ loading: true });
    getUserData(`https://api.github.com/users/${name}`)
      .then((data) => {
        setUser({ ...data.data, loading: false });
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main className="center">
      {error ? (
        <h2 style={{ color: 'white' }}>{error}</h2>
      ) : Object.keys(user).length > 0 ? (
        <div className="user-container">
          <div className="center">
            <div className="user-info">
              <UserInfo user={user} />
            </div>
          </div>
          {Object.keys(user).length > 1 && <Repositories user={user} />}
        </div>
      ) : (
        <h2 className="center">Sorry No User</h2>
      )}
    </main>
  );
}

export default User;
