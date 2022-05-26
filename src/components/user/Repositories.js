import { useEffect, useState } from 'react';
import { getUserData } from '../../http/get';
import Repository from './Repository';

function Repositories({ user }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getUserData(user.repos_url).then((data) => {
      setRepos(data.data);
    });
  }, []);

  return (
    <div className="repositories">
      {repos.map((item, i) => {
        if (i < 10) {
          return <Repository item={item} key={item.id} />;
        }
      })}
    </div>
  );
}

export default Repositories;
