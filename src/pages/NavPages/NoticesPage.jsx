import React, { useEffect, Suspense } from 'react';
// import CategoryList from '../../components/Cards/Notices/NoticesCategoriesList/NoticesCategoriesList';
import css from '../../components/Cards/Notices/NoticesCategoriesList/NoticesCategoriesItem/NoticesCategoriesItem.module.css';

// import { instance } from 'service/api/api';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import AddPetButton from 'components/AddPetButton/AddPetButton';

// import Pagination from 'components/Pagination/Pagination';
import { getIsLoading } from 'redux/pets/selectors';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { Outlet, useParams } from 'react-router-dom';
import { noticeCategories } from 'constants/noticeCategories';
import { addFlagFavorite, fetchPets } from 'redux/pets/operations';
import { authSelector, favoritesSelector } from 'redux/auth/selectors';

const { SELL, LOSTFOUND, FORFREE, MYPET } = noticeCategories;

const NoticesPage = () => {
  // const pets = useSelector(getPets);
  const isLoading = useSelector(getIsLoading);
  const isAuth = useSelector(authSelector);
  const favorites = useSelector(favoritesSelector);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // const itemsPerPage = 10;
  // const [query, setQuery] = useState('');
  const { categoryName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    switch (categoryName) {
      case SELL:
        dispatch(fetchPets(SELL));
        break;

      case MYPET:
        dispatch(fetchPets(MYPET));
        break;

      case LOSTFOUND:
        dispatch(fetchPets(LOSTFOUND));
        break;

      case FORFREE:
        dispatch(fetchPets(FORFREE));
        break;

      default:
        break;
    }
    if (isAuth && favorites?.length > 0) {
      dispatch(addFlagFavorite(favorites));
    }
  }, [categoryName, dispatch, favorites, isAuth]);

  // useEffect(() => {
  //   if (isAuth && favorites?.length > 0) {
  //     dispatch(addFlagFavorite(favorites));
  //   }
  // }, [dispatch, favorites, favorites?.length, isAuth]);

  // const visiblePets = pets.filter(notice =>
  //   notice.title.toLowerCase().includes(query.toLowerCase())
  // );

  const handleSearch = async searchTerm => {
    const trimedQuery = searchTerm.trim();
    if (trimedQuery) {
      // setQuery(trimedQuery);
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

  // if (isLoading) {
  //   return (
  //     <div
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         height: '100vh',
  //       }}
  //     >
  //       <div className="spinner-border text-primary" role="status">
  //         <span className="visually-hidden">Loading...</span>
  //       </div>
  //     </div>
  //   );
  // }

  // if (error === '404') {
  //   return (
  //     <div>
  //       <img src="https://http.cat/407" alt="Error 404" />
  //       <p>Oops! Something went wrong.</p>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1 className={css.textNoticesPage}>Find your favorite pet</h1>
      <SearchComponent onSearch={handleSearch} />
      <div className={css.categoryFilterWrapper}>
        <NoticesCategoriesNav />
        <div className={css.noticeFilter}>
          <NoticesFilters onFilter={handleSearch} />
          <AddPetButton />
        </div>
      </div>
      {isLoading && <Loader />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {/* {<CategoryList data={currentItems} />}
      {/* <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      /> */}
    </div>
  );
};

export default NoticesPage;
