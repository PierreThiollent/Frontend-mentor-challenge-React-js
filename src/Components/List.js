import React, { useState, useEffect } from 'react';
import GetCountries from '../Services/GetCountries';
import Item from '../Components/Item';
import '../Style/List.css';

const List = () => {
  // State to store countries
  const [countries, setcountries] = useState([]);

  // State to mange the loading spinner
  const [loading, setLoading] = useState(true);

  // Effect to fetch countries from the API
  useEffect(() => {
    (async () => {
      await GetCountries().then(countriesList => {
        setcountries(countriesList);
        setLoading(false);
      });
    })();
  }, [setcountries]);

  return loading ? (
    <div className='lds-ring'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    <div className='container countries'>
      {countries.map((country, index) => (
        <Item country={country} key={index} />
      ))}
      }
    </div>
  );
};

export default List;
