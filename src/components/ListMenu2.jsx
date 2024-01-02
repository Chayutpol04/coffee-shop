import React from 'react';
import MenuData from './MenuData';
import CoffeeAll from './CoffeeAll';
import CoffeeSearchBar from './CoffeeSearchBar';
import { useState} from 'react';

function ListMenu2() {
const [searchTerm, setSearchTerm] = useState('');

const handleSearch = (term) => {
  setSearchTerm(term.toLowerCase());
};

const filteredMenuData = MenuData.filter((card) => {
  return card.title.toLowerCase().includes(searchTerm);
});

return (
  <>
          <CoffeeSearchBar onSearch={handleSearch}/>
          <div className="container mx-auto mt-10 grid gap-8 grid-cols-1 w-fit sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-center">
          {filteredMenuData.length === 0 ? (
              <p className="text-center text-gray-500">No results found.</p>
          ) : (
              filteredMenuData.map((card) => (
              <CoffeeAll key={card.id} card={card} />
              ))
          )}
          </div>
        
  </>
);
}

export default ListMenu2;


