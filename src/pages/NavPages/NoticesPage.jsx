import React, { useState, useEffect } from 'react';
import CategoryList from '../../components/Cards/Notices/NoticesCategoriesList/NoticesCategoriesList';
import css from '../../components/Cards/Notices/NoticesCategoriesList/NoticesCategoriesItem/NoticesCategoriesItem.module.css';

import SearchComponent from '../../components/SearchComponent/SearchComponent';
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import AddPetButton from 'components/AddPetButton/AddPetButton';
import Pagination from 'components/Pagination/Pagination';
import { getPets, getIsLoading } from 'redux/pets/selectors';
import {  useSelector } from 'react-redux';
import Loader from 'components/LoaderPort/Loader';

const NoticesPage = () => {
  const pets = useSelector(getPets);
  const isLoading = useSelector(getIsLoading);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;
  const [query, setQuery] = useState('');

  const visiblePets = pets.filter(notice =>
    notice.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = async searchTerm => {
    const trimedQuery = searchTerm.trim();
    if (trimedQuery) {
      setQuery(trimedQuery);
    }
  };

  useEffect(() => {
    const pages = Math.ceil(pets.length / itemsPerPage);
    setTotalPages(pages);
  }, [pets.length]);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = visiblePets.slice(indexOfFirstItem, indexOfLastItem);

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
      {isLoading && <Loader />}
      <h1 className={css.textNoticesPage}>Find your favorite pet</h1>
      <SearchComponent onSearch={handleSearch} />
      <div className={css.categoryFilterWrapper}>
        <NoticesCategoriesNav />
        <div className={css.noticeFilter}>
          <NoticesFilters onFilter={handleSearch} />
          <AddPetButton />
        </div>
      </div>
      <CategoryList data={currentItems} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default NoticesPage;
