import React from 'react';
import '../Style/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as faMoonDark } from '@fortawesome/free-solid-svg-icons';
import { faMoon as faMoonLignt } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
  // Method to toggle dark mode
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <header>
      <div className='container'>
        <h1>Where in the world</h1>
        <button id='toggle' className='btn-toggle-dark-mode' onClick={toggleDarkMode}>
          <FontAwesomeIcon className='far fa-moon' icon={faMoonDark} />
          <FontAwesomeIcon className='fas fa-moon' icon={faMoonLignt} />
          Dark mode
        </button>
      </div>
    </header>
  );
};

export default Header;
