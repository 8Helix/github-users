import { useState, useEffect, useContext } from 'react';
import { FollowContext } from '../../context/FollowContext';

function FollowButton({ user }) {
  const [button, setButton] = useState('');
  const { favorites, setFavorites } = useContext(FollowContext);

  useEffect(() => {
    if (!favorites.find((item) => item.username === user.login)) {
      setButton('Follow');
    } else {
      setButton('Following');
    }
  }, []);

  function handleFollow() {
    if (button === 'Follow') {
      setFavorites((prev) => {
        return [...prev, { username: user.login, imgUrl: user.avatar_url }];
      });
      setButton('Following');
    } else {
      setFavorites((prev) => {
        return [...prev.filter((item) => item.username !== user.login)];
      });
      setButton('Follow');
    }
  }
  return <button onClick={handleFollow}>{button}</button>;
}

export default FollowButton;
