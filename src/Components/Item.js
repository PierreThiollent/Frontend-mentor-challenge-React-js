import React from 'react';
import '../Style/Item.css';

const Item = ({ country }) => (
  <>
    <div className='country'>
      <div>
        <img src={country.flag} alt={country.name} />
      </div>
      <div className='country-infos'>
        <h2 className='country-name'>{country.name}</h2>
        <p>
          <strong>Population: </strong>
          {country.population}
        </p>
        <p className='country-region'>
          <strong>Region: </strong>
          {country.region}
        </p>
        <p>
          <strong>Capital: </strong>
          {country.capital}
        </p>
      </div>
    </div>
  </>
);

export default Item;
