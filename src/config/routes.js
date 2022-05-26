import AuthGuard from '../components/guards/AuthGuard';
import GuestGuard from '../components/guards/GuestGuard';
import { Dashboard, Favorites, Login, Register, Search, User } from '../pages';

const ROUTES = {
  SIGN_IN: '/',
  SIGN_UP: 'signup',
  DASHBOARD: 'dashboard',
  USER: 'user/:name',
  SEARCH: 'search',
  FAVORITES: 'favorites',
};

const ROUTES_CONFIG = [
  {
    path: ROUTES.SIGN_IN,
    guard: GuestGuard,
    page: Login,
  },

  {
    path: ROUTES.SIGN_UP,
    guard: GuestGuard,
    page: Register,
  },

  {
    path: ROUTES.DASHBOARD,
    guard: AuthGuard,
    page: Dashboard,
  },
  {
    path: ROUTES.USER,
    guard: AuthGuard,
    page: User,
  },
  {
    path: ROUTES.SEARCH,
    guard: AuthGuard,
    page: Search,
  },
  {
    path: ROUTES.FAVORITES,
    guard: AuthGuard,
    page: Favorites,
  },
];

export { ROUTES, ROUTES_CONFIG };
