import React, { useState } from 'react';
import '../Style/Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  // State to show or hide dropdown menu
  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (
    <section>
      <div class='container'>
        <input id='search' class='search' type='text' placeholder='Search for a country' />
        <div id='filter' class='dropdown' onClick={() => setDropdownVisible(!dropdownVisible)}>
          Filter by region
          <FontAwesomeIcon className='fas fa-chevron-down' icon={faChevronDown} />
          {dropdownVisible && (
            <ul>
              <li>All</li>
              <li>Africa</li>
              <li>America</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
