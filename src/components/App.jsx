import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { austOperationThunk } from '../redux/auth/thunks';
import BurgerProvider from 'context/BurgerProvider';
import { addFlagFavorite, fetchPets } from 'redux/pets/operations';
import {
  authSelector,
  favoritesSelector,
} from 'redux/auth/selectors';
import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import LoaderPet from './LoaderPet/LoaderPet';

const MainPage = lazy(() => import('../pages/NavPages/MainPage/MainPage'));
const NoticesPage = lazy(() => import('../pages/NavPages/NoticesPage'));
const OurFriendsPage = lazy(() => import('../pages/NavPages/OurFriendsPage'));
const LoginPage = lazy(() => import('../pages/AuthNavPages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/AuthNavPages/RegisterPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const AddPetPage = lazy(() => import('../pages/AddPetPage/AddPetPage'));
const NewsPage = lazy(() => import('../pages/NavPages/NewsPage'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));
const AfterVerifEmail = lazy(() => import('../pages/Other/AfterVerifEmail'));

// const NoticesCategoriesList = lazy(() =>
//   import('../components/NoticesCategoriesList/NoticesCategoriesList')
// );

export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(authSelector);
  const favorites = useSelector(favoritesSelector);

  useEffect(() => {
    dispatch(
      austOperationThunk({
        endpoint: 'current',
      })
    );
    dispatch(fetchPets());
  }, [dispatch]);

  useEffect(() => {
    if (isAuth && favorites?.length > 0) {
      dispatch(addFlagFavorite(favorites));
    }
  }, [dispatch, favorites, favorites?.length, isAuth]);

  return (
    <>
      <Suspense fallback={<LoaderPet />}>
        <Routes>
          <Route
            path="/"
            element={
              <BurgerProvider>
                <SharedLayout />
              </BurgerProvider>
            }
          >
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

            <Route
              path="/add-pet"
              element={
                <PrivateRoute>
                  <AddPetPage />
                </PrivateRoute>
              }
            />

            <Route
              path="/afterverify/:verificationToken"
              element={<AfterVerifEmail />}
            />

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
