import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ROUTES } from '../../config/routes.js';
import { AuthContext } from '../../context/AuthContext.js';
import { FollowContext } from '../../context/FollowContext.js';
import github from '../../../img/github.png';
import './Header.modules.css';

function Header() {
  const { logout } = useContext(AuthContext);
  const { setFavorites } = useContext(FollowContext);

  function handleLogout() {
    setFavorites([]);
    logout();
  }

  return (
    <header>
      <div className="header">
        <img className="logo" alt="github logo" src={github} />
        <nav className="navigation">
          <ul className="navigationList">
            <li>
              <NavLink
                to={`/${ROUTES.DASHBOARD}`}
                className={({ isActive }) =>
                  isActive ? 'navigationLink active-item' : 'navigationLink'
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to={`/${ROUTES.SEARCH}`}
                className={({ isActive }) =>
                  isActive ? 'navigationLink active-item' : 'navigationLink'
                }
              >
                Search
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${ROUTES.FAVORITES}`}
                className={({ isActive }) =>
                  isActive ? 'navigationLink active-item' : 'navigationLink'
                }
              >
                Favorites
              </NavLink>
            </li>
            <li>
              <div className="headerButton">
                <button className="navigationLink cta" onClick={handleLogout}>
                  Log Out
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
