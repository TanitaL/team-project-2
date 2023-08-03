import React, { useEffect, Suspense, useState } from 'react';

import css from '../../components/Cards/Notices/NoticesCategoriesList/NoticesCategoriesItem/NoticesCategoriesItem.module.css';

import SearchComponent from '../../components/SearchComponent/SearchComponent';
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import AddPetButton from 'components/AddPetButton/AddPetButton';

// import Pagination from 'components/Pagination/Pagination';
import Paginations from 'components/Pagination/Paginations';
import { getFavoritesPets, getPets, getPages } from 'redux/pets/selectors';

import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { noticeCategories } from 'constants/noticeCategories';
import {
  addFlagFavorite,
  fetchFavoritePets,
  fetchPets,
} from 'redux/pets/operations';
import { authSelector } from 'redux/auth/selectors';
import Container from 'components/Container/Container/Container';
import ModalAttention from 'components/Modals/ModalAttention/ModalAttention';
import LoaderPet from '../../components/LoaderPet/LoaderPet';

const { SELL, LOSTFOUND, FORFREE, MYPET, FAVORITE } = noticeCategories;

const NoticesPage = () => {
  const pets = useSelector(getPets);
  const pages = useSelector(getPages);
  // const isLoading = useSelector(getIsLoading);

  const isAuth = useSelector(authSelector);
  const favorites = useSelector(getFavoritesPets);

  const [isAttentionModalOpen, setIsAttentionModalOpen] = useState(false);
  const [page, setPage] = useState(1);

  const [query, setQuery] = useState('');
  const { categoryName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchFavoritePets());
    }
  }, [dispatch, isAuth]);

  useEffect(() => {
    switch (categoryName) {
      case SELL:
        dispatch(fetchPets({ category: SELL, query, page }));
        break;

      case MYPET:
        dispatch(fetchPets({ category: MYPET, query, page }));
        break;

      case LOSTFOUND:
        dispatch(fetchPets({ category: LOSTFOUND, query, page }));
        break;

      case FORFREE:
        dispatch(fetchPets({ category: FORFREE, query, page }));
        break;

      case FAVORITE:
        dispatch(fetchPets({ category: FAVORITE, query, page }));
        break;

      default:
        break;
    }
  }, [categoryName, dispatch, query, page]);

  useEffect(() => {
    if (isAuth && favorites?.length > 0 && pets?.length > 0) {
      dispatch(addFlagFavorite());
    }
  }, [dispatch, favorites, isAuth, pets?.length]);

  const handleSearch = async searchTerm => {
    const trimedQuery = searchTerm.trim();
    if (trimedQuery) {
      setQuery(trimedQuery);
    }
  };

  const onClearSearch = () => {
    setQuery('');
  };

  const handlePageChange = pageNumber => {
    setPage(pageNumber);
  };

  return (
    <Container>
      {isAttentionModalOpen && !isAuth && (
        <ModalAttention modalOpen={setIsAttentionModalOpen} />
      )}
      <h1 className={css.textNoticesPage}>Find your favorite pet</h1>
      <SearchComponent onSearch={handleSearch} onClearSearch={onClearSearch} />
      <div className={css.container}>
        <div className={css.categoryFilterWrapper}>
          <NoticesCategoriesNav />
          <div className={css.noticeFilter}>
            <NoticesFilters onFilter={handleSearch} />
            <AddPetButton modalOpen={setIsAttentionModalOpen} />
          </div>
        </div>
      </div>
      {/* {isLoading && <LoaderPet />} */}
      <Suspense fallback={<LoaderPet />}>
        <Outlet />
      </Suspense>
      <Paginations
        currentPage={page}
        totalPages={pages}
        handlePaginationChange={handlePageChange}
      />
    </Container>
  );
};

export default NoticesPage;
