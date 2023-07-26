import React, { useState, useEffect } from 'react';
import CategoryList from '../../components/Cards/Notices/NoticesCategoriesList/NoticesCategoriesList';
import css from '../../components/Cards/Notices/NoticesCategoriesList/NoticesCategoriesItem/NoticesCategoriesItem.module.css';

import { instance } from 'service/api/api';

const NoticesPage = () => {
  const [noticesData, setNoticesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getAllNotices = async () => {
    try {
      const response = await instance.get('notices');
      // console.log(response.data.notices);
      return response.data.notices;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchNoticesData = async () => {
      try {
        const data = await getAllNotices();
        setNoticesData(data);
        setIsLoading(false);
      } catch (error) {
        setError('404');
        setIsLoading(false);
      }
    };

    fetchNoticesData();
  }, []);

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
      <CategoryList data={noticesData} />
    </div>
  );
};

export default NoticesPage;
