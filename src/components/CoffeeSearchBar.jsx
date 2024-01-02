import React, { useState } from 'react';

const CoffeeSearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <div className='mt-4'>
        <div className="flex justify-center">
          <input
            className="border rounded-md py-2 px-3 focus:outline-none"
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
          />
          <button
            className="ml-2 bg-coffeecolor1 text-coffeecolor2 px-3 py-2 rounded-md transition-transform hover:scale-105"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default CoffeeSearchBar;




