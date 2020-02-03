import React from 'react';
import '../Style/Search.css';

const Search = () => {
  return (
    <section>
      <div class='container'>
        <input id='search' class='search' type='text' placeholder='Search for a country' />
        <div id='filter' class='dropdown'>
          Filter by region
          <i class='fas fa-chevron-down'></i>
          <ul>
            <li>All</li>
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Search;
