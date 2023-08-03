import React, { useState } from 'react';
import './SearchComponent.scss';

const SearchComponent = ({ onSearch, onClearSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    onClearSearch()
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-component" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
        className="search-component__input"
      />
      <button type="submit" className="search-component__search-button">
        <i className="fas fa-search"></i>
      </button>
      {searchTerm && (
        <button
          type="button"
          onClick={handleClearSearch}
          className="search-component__clear-button"
        >
          <i className="fas fa-times"></i>
        </button>
      )}
    </form>
  );
};

export default SearchComponent;
