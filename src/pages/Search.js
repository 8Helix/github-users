import { useRef, useState } from 'react';
import { getUserData } from '../http/get';
import Card from '../components/card/Card';
import './Search.modules.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
  const search = useRef(null);
  const [searchedUser, setSearchedUser] = useState({});
  const [error, setError] = useState('');

  function handleSearch() {
    setError('');
    setSearchedUser({ loading: true });
    const name = search.current.value;
    getUserData(`https://api.github.com/users/${name}`)
      .then((data) => {
        console.log({ ...data.data, loading: false });
        setSearchedUser({ ...data.data, loading: false });
      })
      .catch((err) => setError(err.message));
  }

  return (
    <main>
      <div className="search">
        <input type="text" placeholder="Username ..." ref={search} />
        <div className="iconDiv">
          <FontAwesomeIcon
            onClick={handleSearch}
            icon={faSearch}
            className="icon"
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="searchedCard">
        {error ? (
          <h2 style={{ color: 'white' }}>
            User with `{search.current.value}` login doesn&apos;t exists{' '}
          </h2>
        ) : (
          Boolean(Object.keys(searchedUser).length > 1) && (
            <Card user={searchedUser} />
          )
        )}
      </div>
    </main>
  );
}

export default Search;
