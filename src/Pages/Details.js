import React from 'react';
import Header from '../Components/Header/Header';
import { useLocation } from 'react-router-dom';
import '../Style/Details.css';

const Details = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className='detail'>
        <div className='container'>
          <img src={location.state.country.flag} alt={location.state.country.name} />
          <div className='detail-body'>
            <h2>{location.state.country.name}</h2>
            <p>
              <strong>Native name: </strong>
              {location.state.country.nativeName}
            </p>
            <p>
              <strong>Population: </strong>
              {location.state.country.population}
            </p>
            <p>
              <strong>Region: </strong>
              {location.state.country.region}
            </p>
            <p>
              <strong>Sub region: </strong>
              {location.state.country.subregion}
            </p>
            <p>
              <strong>Capital: </strong>
              {location.state.country.capital}
            </p>
            <p>
              <strong>Top Level Domain: </strong>
              {location.state.country.topLevelDomain[0]}
            </p>
            <p>
              <strong>Currencies: </strong>
              {location.state.country.currencies.map(currency => currency.code)}
            </p>
            <p>
              <strong>Languages: </strong>
              {location.state.country.languages.map(language => language.name)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
