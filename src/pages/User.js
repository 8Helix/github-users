import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserData } from '../http/get';
import UserInfo from '../components/user/UserInfo';
import Repositories from '../components/user/Repositories';
import '../components/user/UserInfo.modules.css';

function User() {
  const [user, setUser] = useState({});

  const { name } = useParams();

  useEffect(() => {
    setUser({ loading: true });
    getUserData(`https://api.github.com/users/${name}`).then((data) => {
      setUser({ ...data.data, loading: false });
    });
  }, []);

  return (
    <main>
      {Object.keys(user).length > 0 ? (
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
