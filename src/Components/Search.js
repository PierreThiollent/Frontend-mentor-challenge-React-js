import React, { useState } from 'react';
import '../Style/Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  // State to manage the value of the input
  const [value, setvalue] = useState('');

  // State to manage the visibility of dropdown menu
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Method to set the value of the input
  const handleChangeValue = value => {
    setvalue(value);
    searchCountries(value);
  };

  // Method to toggle the dropdown
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Method to hide or show countries by his name
  const searchCountries = value => {
    const countryName = document.querySelectorAll('.country-name');
    countryName.forEach(name => {
      if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
        name.parentElement.parentElement.style.display = 'block';
      } else {
        name.parentElement.parentElement.style.display = 'none';
      }
    });
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
