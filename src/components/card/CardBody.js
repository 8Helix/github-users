import { useEffect, useState } from 'react';
import { getFollowers } from '../../http/get';
import BallLoader from '../loaders/BallLoader';
import CubeLoader1 from '../loaders/CubeLoader1';

function CardBody({ user }) {
  const [follow, setFollow] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getFollowers(user.url)
      .then((data) => {
        setFollow(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="cardImg">
        {user.loading ? (
          <CubeLoader1 />
        ) : (
          <img alt="user" src={`${user.avatar_url}`} />
        )}
      </div>
      <div className="cardBody">
        {user.loading ? <BallLoader /> : <h2>{user.login}</h2>}
        {loading ? (
          <>
            <BallLoader />
            <BallLoader />
          </>
        ) : (
          <>
            <h2>{follow.followers} Followers</h2>
            <h2>{follow.following} Following</h2>
          </>
        )}
      </div>
    </>
  );
}

export default CardBody;
