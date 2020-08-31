import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const SearchDropdown = () => {
  // State to manage the visibility of dropdown menu
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Method to toggle the dropdown
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Method to filter countries by region
  const filterCountries = value => {
    const regionName = document.querySelectorAll('.country-region');
    regionName.forEach(region => {
      if (region.innerText.includes(value) || value === 'All') {
        region.parentElement.parentElement.style.display = 'block';
      } else {
        region.parentElement.parentElement.style.display = 'none';
      }
    });
  };

  return (
    <div className='dropdown' onClick={toggleDropdown}>
      Filter by region
      <FontAwesomeIcon className='fas fa-chevron-down' icon={faChevronDown} />
      {dropdownVisible && (
        <ul>
          <li
            onClick={event => {
              filterCountries(event.target.innerText);
            }}>
            All
          </li>
          <li
            onClick={event => {
              filterCountries(event.target.innerText);
            }}>
            Africa
          </li>
          <li
            onClick={event => {
              filterCountries(event.target.innerText);
            }}>
            America
          </li>
          <li
            onClick={event => {
              filterCountries(event.target.innerText);
            }}>
            Asia
          </li>
          <li
            onClick={event => {
              filterCountries(event.target.innerText);
            }}>
            Europe
          </li>
          <li
            onClick={event => {
              filterCountries(event.target.innerText);
            }}>
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
};

export default SearchDropdown;
