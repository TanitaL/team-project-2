import React, { useState, useEffect } from 'react';
import CategoryList from '../../components/Cards/Notices/NoticesCategoriesList/NoticesCategoriesList';
import css from '../../components/Cards/Notices/NoticesCategoriesList/NoticesCategoriesItem/NoticesCategoriesItem.module.css';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import AddPetButton from 'components/AddPetButton/AddPetButton';
import PaginationNews from 'components/Pagination/PaginationNews';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPets,
  getTotalResult,
  getIsLoading,
  getError,
} from 'redux/pets/selectors';
import { fetchPets } from 'redux/pets/operations';
import LoaderPet from 'components/LoaderPet/LoaderPet';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let initialQueryObj = {
  page: 1,
  limit: 12,
  category: '',
  sex: '',
  date: '',
  query: '',
};

const NoticesPage = () => {
  const dispatch = useDispatch();
  const pets = useSelector(getPets);
  const isLoading = useSelector(getIsLoading);
  const totalResult = useSelector(getTotalResult);
  const error = useSelector(getError);
  const [pages, setPages] = useState(0);
  const [queryObj, setQueryObj] = useState(initialQueryObj);

  useEffect(() => {
    let params = { limit: queryObj?.limit, page: queryObj?.page };

    for (const key in queryObj) {
      if (queryObj[key] === '') continue;
      params = { ...params, [key]: queryObj[key] };
    }
    dispatch(fetchPets(params));
  }, [queryObj, dispatch]);

  useEffect(() => {
    const pages = Math.ceil(totalResult / queryObj.limit);
    setPages(pages);
  }, [totalResult, queryObj.limit]);

  const handleSetPage = () => {
    setQueryObj(prevState => ({ ...prevState, page: 1 }));
  };

  const handleSetCategory = category => {
    setQueryObj(prevState => ({ ...prevState, category }));
  };

  const handleSetSex = sex => {
    setQueryObj(prevState => ({ ...prevState, sex }));
  };

  const handleSetDate = date => {
    setQueryObj(prevState => ({ ...prevState, date }));
  };

  const handleSearch = searchTerm => {
    if (searchTerm.trim() !== '') {
      handleSetPage();
      const correctedSearch = searchTerm.toLowerCase();
      setQueryObj({ query: correctedSearch });
    } else {
      Notify.warning('Please, Enter the correct data for the search', {
        timeout: 3000,
        position: 'center-top',
      });
    }
  };

  const handlePageChange = pageNumber => {
    setQueryObj(prevState => ({ ...prevState, page: pageNumber }));
    console.log('queryObj-->', queryObj);
  };

  if (error === '404') {
    return (
      <div>
        <img src="https://http.cat/407" alt="Error 404" />
        <p>Oops! Something went wrong.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className={css.textNoticesPage}>Find your favorite pet</h1>
      <SearchComponent
        onFilterSex={handleSetSex}
        onFilterDate={handleSetDate}
      />
      <div className={css.categoryFilterWrapper}>
        <NoticesCategoriesNav onChangeCategory={handleSetCategory} />
        <div className={css.noticeFilter}>
          <NoticesFilters onFilter={handleSearch} />
          <AddPetButton />
        </div>
      </div>
      {isLoading && <LoaderPet />}
      <CategoryList data={pets} />
      <PaginationNews
        currentPage={queryObj.page}
        totalPages={pages}
        handlePaginationChange={handlePageChange}
      />
    </div>
  );
};

export default NoticesPage;
