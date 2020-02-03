import React, { useState } from 'react';
import '../Style/Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  // State to manage the visibility of dropdown menu
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // State to manage the value of the input
  const [value, setvalue] = useState('');

  // Method to set the value of the input
  const handleChangeValue = value => {
    setvalue(value);
  };

  // Method to toggle the dropdown
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <section>
      <div className='container'>
        <input
          className='search'
          type='text'
          placeholder='Search for a country'
          value={value}
          onChange={event => {
            handleChangeValue(event.target.value);
          }}
        />
        <div className='dropdown' onClick={toggleDropdown}>
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
