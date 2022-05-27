import { useContext } from 'react/';
import Header from './components/header/Header.js';
import { AuthContext } from './context/AuthContext.js';
import { FollowContextProvider } from './context/FollowContext';
import Routes from './Routes.js';

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <FollowContextProvider>
      {isAuthenticated && <Header />}
      <Routes />
    </FollowContextProvider>
  );
}

export default App;
