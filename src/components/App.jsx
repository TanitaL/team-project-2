import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/AuthNavPages/LoginPage';
import NewsPage from '../pages/NavPages/NewsPage';
import NoticesPage from '../pages/NavPages/NoticesPage';
import OurFriendsPage from '../pages/NavPages/OurFriendsPage';
import RegisterPage from '../pages/AuthNavPages/RegisterPage';
import SharedLayout from './SharedLayout/SharedLayout';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import MainPage from '../pages/NavPages/MainPage/MainPage';
import UserPage from 'pages/UserPage/UserPage';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/friends" element={<OurFriendsPage />} />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/user"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
