import { useState, useEffect } from 'react';
import notify from 'service/addPetHelpers/toast';
import NewsList from '../../components/Cards/News/NewsList/NewsList';
import SearchComponent from 'components/SearchComponent/SearchComponent';
import { fetchNews } from 'service/api/apiNews';
import Container from 'components/Container/Container/Container';
import LoaderPet from '../../components/LoaderPet/LoaderPet';

import Paginations from 'components/Pagination/Paginations';
import css from '../../components/Cards/News/NewsList/NewsItems/NewsItems.module.css';

const NewsPage = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [searchNews, setSearchNews] = useState('pet');
  const [page, setPage] = useState(1);
  const [perPage] = useState(9);
  const [pages, setPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSetPage = () => {
    setPage(1);
  };

  const handleSearch = searchTerm => {
    if (searchTerm.trim() !== '') {
      handleSetPage();
      const correctedSearch = searchTerm.toLowerCase();
      setSearchNews(correctedSearch);
    } else {
      notify.error('Please, Enter the correct request');
    }
  };

  useEffect(() => {
    try {
      setIsLoading(true);
      fetchNews(searchNews, page, perPage).then(({ articles, pages }) => {
        setNewsItems(articles);
        setPages(pages);
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error => error.message);
    }
  }, [searchNews, page, perPage]);

  const handlePageChange = pageNumber => {
    setPage(pageNumber);
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
    <>
      <>{isLoading && <LoaderPet />}</>
      <Container>
        <h1 className={css.textNoticesPage}>News</h1>
        <SearchComponent onSearch={handleSearch} />

        {!isLoading && (
          <>
            <NewsList news={newsItems} />
            <Paginations
              currentPage={page}
              totalPages={pages}
              handlePaginationChange={handlePageChange}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default NewsPage;
