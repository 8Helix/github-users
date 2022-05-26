import FollowButton from './FollowButton';
import Organizations from './Organizations';
import './UserInfo.modules.css';
import CubeLoader from '../loaders/CubeLoader1';
import BallLoader from '../loaders/BallLoader';

function UserInfo({ user }) {
  return (
    <div className="info">
      <div className="user-img">
        {user.loading ? (
          <CubeLoader />
        ) : (
          <img alt="user" src={`${user.avatar_url}`} />
        )}
      </div>
      <div className="user-name">
        {user.loading ? <BallLoader /> : <h2>{user.name}</h2>}
        <div className="button">
          <FollowButton user={user} />
        </div>
      </div>
      <div className="user-follow">
        {user.loading ? (
          <>
            <BallLoader />
            <BallLoader />
          </>
        ) : (
          <>
            <h2>{user.followers} Followers</h2>
            <h2>{user.following} Following</h2>
          </>
        )}
      </div>
      {Object.keys(user).length > 1 && <Organizations user={user} />}
    </div>
  );
}

export default UserInfo;
