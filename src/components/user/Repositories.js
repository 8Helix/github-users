import { useEffect, useState } from 'react';
import { getUserData } from '../../http/get';
import Repository from './Repository';
import './Repositories.modules.css';

function Repositories({ user }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    getUserData(user.repos_url)
      .then((data) => {
        setRepos(data.data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="repositories">
      {error ? (
        <div className="center">
          <h2>{error}</h2>
        </div>
      ) : loading ? (
        <div className="center">
          <h2>Loading ...</h2>
        </div>
      ) : (
        repos.map((item, i) => {
          if (i < 10) {
            return <Repository item={item} key={item.id} />;
          }
        })
      )}
    </div>
  );
}

export default Repositories;
