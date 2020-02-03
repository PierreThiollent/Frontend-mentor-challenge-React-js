import React, { useState, useEffect } from 'react';
import GetCountries from '../Services/GetCountries';
import Item from '../Components/Item';
import '../Style/List.css';

const List = () => {
  // State to store countries
  const [countries, setcountries] = useState([]);

  // Effect to fetch countries from the API
  useEffect(() => {
    (async () => {
      await GetCountries().then(countriesList => {
        setcountries(countriesList);
      });
    })();
  }, [setcountries]);

  return countries.map(country => (
    <div id='countries' className='container countries'>
      <Item country={country} />
    </div>
  ));
};

export default List;
