import { useState, useEffect } from 'react';
import NewsList from '../../components/Cards/News/NewsList/NewsList';
import { fetchNews } from 'service/api/apiNews';

const NewsPage = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [searchNews, setSearchNews] = useState('pets');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      setIsLoading(true);
      fetchNews(searchNews, page, perPage).then(
        ({ articles, totalResults, isLastPage }) => {
          setNewsItems(articles);
          setTotalResults(totalResults);
          setIsLastPage(isLastPage);
        }
      );
      setIsLoading(false);
    } catch (error) {
      setError(error => error.message);
    }
  }, []);

  console.log(newsItems);
  console.log(totalResults);
  console.log(isLastPage);

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
      <h1>News</h1>
      <NewsList news={newsItems} />
    </div>
  );
};

export default NewsPage;
