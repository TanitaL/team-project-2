import React, { useEffect, Suspense, useState } from 'react';
// import CategoryList from '../../components/Cards/Notices/NoticesCategoriesList/NoticesCategoriesList';
import css from '../../components/Cards/Notices/NoticesCategoriesList/NoticesCategoriesItem/NoticesCategoriesItem.module.css';

// import { instance } from 'service/api/api';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import AddPetButton from 'components/AddPetButton/AddPetButton';

// import Pagination from 'components/Pagination/Pagination';
import { getFavoritesPets, getIsLoading, getPets } from 'redux/pets/selectors';

import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { Outlet, useParams } from 'react-router-dom';
import { noticeCategories } from 'constants/noticeCategories';
import { addFlagFavorite, fetchFavoritePets, fetchPets } from 'redux/pets/operations';
import { authSelector} from 'redux/auth/selectors';
import Container from 'components/Container/Container/Container';
import ModalAttention from 'components/Modals/ModalAttention/ModalAttention';

const { SELL, LOSTFOUND, FORFREE, MYPET, FAVORITE } = noticeCategories;

const NoticesPage = () => {
  const pets = useSelector(getPets);
  const isLoading = useSelector(getIsLoading);
  const isAuth = useSelector(authSelector);
  const favorites = useSelector(getFavoritesPets);

  const [isAttentionModalOpen, setIsAttentionModalOpen] = useState(false);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // const itemsPerPage = 10;
  const [query, setQuery] = useState('');
  const { categoryName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchFavoritePets());
    }
  }, [dispatch, isAuth])
  

  useEffect(() => {
    switch (categoryName) {
      case SELL:
        dispatch(fetchPets({ category: SELL, query }));
        break;

      case MYPET:
        dispatch(fetchPets({ category: MYPET }));
        break;

      case LOSTFOUND:
        dispatch(fetchPets({ category: LOSTFOUND, query }));
        break;

      case FORFREE:
        dispatch(fetchPets({ category: FORFREE, query }));
        break;

      case FAVORITE:
        dispatch(fetchPets({ category: FAVORITE }));
        break;

      default:
        break;
    }
   
  }, [categoryName, dispatch, query]);

useEffect(() => {
  if (isAuth && favorites?.length > 0 && pets?.length > 0) {
    console.log("🚀 ~ useEffect ~ pets?.length > 0:", pets?.length > 0)
    console.log(
      '🚀 ~ useEffect ~ favorites?.length > 0:',
      favorites?.length > 0
    );
    console.log('Это добавление флага всем если они есть в массиве');
    dispatch(addFlagFavorite());
  }
}, [dispatch, favorites, isAuth, pets?.length])


  // useEffect(() => {

  // const visiblePets = pets.filter(notice =>
  //   notice.title.toLowerCase().includes(query.toLowerCase())
  // );

  const handleSearch = async searchTerm => {
    const trimedQuery = searchTerm.trim();
    if (trimedQuery) {
      setQuery(trimedQuery);
    }
  };

  // useEffect(() => {
  //   const pages = Math.ceil(pets.length / itemsPerPage);
  //   setTotalPages(pages);
  // }, [pets.length]);

  // const handlePageChange = pageNumber => {
  //   setCurrentPage(pageNumber);
  // };

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = visiblePets.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <Container>
      {isAttentionModalOpen && !isAuth && (
        <ModalAttention modalOpen={setIsAttentionModalOpen} />
      )}
      <h1 className={css.textNoticesPage}>Find your favorite pet</h1>
      <SearchComponent onSearch={handleSearch} />
      <div className={css.categoryFilterWrapper}>
        <NoticesCategoriesNav />
        <div className={css.noticeFilter}>
          <NoticesFilters onFilter={handleSearch} />
          <AddPetButton modalOpen={setIsAttentionModalOpen} />
        </div>
      </div>
      {isLoading && <Loader />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {/* <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      /> */}
    </Container>
  );
};

export default NoticesPage;
