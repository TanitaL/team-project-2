import React, { useState, useEffect } from 'react';
import NewsList from '../../components/Cards/News/NewsList/NewsList';

const NewsPage = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Error loading data');
        }

        const data = await response.json();
        setNewsItems(data);
        setIsLoading(false);
      } catch (err) {
        setError('404');
        setIsLoading(false);
      }
    };

    fetchNewsData();
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
      <h1>News</h1>
      <NewsList news={newsItems} />
    </div>
  );
};

export default NewsPage;
