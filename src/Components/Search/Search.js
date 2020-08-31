import React from 'react';
import './Search.css';
import SearchInput from './SearchInput';
import SearchDropdown from './SearchDropdown';

const Search = () => (
  <section>
    <div className='container'>
      <SearchInput />
      <SearchDropdown />
    </div>
  </section>
);

export default Search;
