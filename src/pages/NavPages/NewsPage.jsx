import { useState, useEffect } from 'react';
import NewsList from '../../components/Cards/News/NewsList/NewsList';
import { fetchNews } from 'service/api/apiNews';

const NewsPage = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [pages, setPages] = useState(0);
  const [searchNews, setSearchNews] = useState('pet');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setSearchNews('pet');
    setPage(1);
    setPerPage(9);
    try {
      setIsLoading(true);
      fetchNews(searchNews, page, perPage).then(
        ({ articles, totalResults, pages }) => {
          setNewsItems(articles);
          setTotalResults(totalResults);
          setPages(pages);
        }
      );
      setIsLoading(false);
    } catch (error) {
      setError(error => error.message);
    }
  }, [searchNews, page, perPage]);

  console.log(newsItems);
  console.log(totalResults);
  console.log(pages);

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
