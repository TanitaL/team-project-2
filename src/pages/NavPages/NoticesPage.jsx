import React, { useState, useEffect } from 'react';
import CategoryList from '../../components/Cards/Notices/NoticesCategoriesList/NoticesCategoriesList';
import css from '../../components/Cards/Notices/NoticesCategoriesList/NoticesCategoriesItem/NoticesCategoriesItem.module.css';

import { instance } from 'service/api/api';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import AddPetButton from 'components/AddPetButton/AddPetButton';
import Pagination from 'components/Pagination/Pagination';
const NoticesPage = () => {
  const [noticesData, setNoticesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;
  const getAllNotices = async () => {
    try {
      const response = await instance.get('notices');
      return response.data.notices;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  const handleSearch = async searchTerm => {
    try {
      setIsLoading(true);
      const data = await getAllNotices();

      if (searchTerm.trim() !== '') {
        const filteredNotices = data.filter(notice =>
          notice.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setNoticesData(filteredNotices);
      } else {
        setNoticesData(data);
      }

      setIsLoading(false);
    } catch (error) {
      setError('404');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchNoticesData = async () => {
      try {
        const data = await getAllNotices();
        setNoticesData(data);
        setIsLoading(false);
        const pages = Math.ceil(data.length / itemsPerPage);
        setTotalPages(pages);
      } catch (error) {
        setError('404');
        setIsLoading(false);
      }
    };

    fetchNoticesData();
  }, []);
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = noticesData.slice(indexOfFirstItem, indexOfLastItem);

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

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
