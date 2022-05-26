import { createRoot } from 'react-dom/client';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
);
