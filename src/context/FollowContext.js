import { useState, useEffect, createContext } from 'react';

const FollowContext = createContext();

function FollowContextProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const data = localStorage.getItem('Favorites');
    if (data) {
      return JSON.parse(data);
    }
    return [];
  });

  useEffect(() => {
    if (favorites.length) {
      localStorage.setItem('Favorites', JSON.stringify(favorites));
    } else {
      localStorage.removeItem('Favorites');
    }
  }, [favorites]);

  return (
    <FollowContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FollowContext.Provider>
  );
}

export { FollowContext, FollowContextProvider };
