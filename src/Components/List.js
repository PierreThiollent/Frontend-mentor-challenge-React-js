import React, { useState, useEffect } from 'react';
import Item from '../Components/Item';
import '../Style/List.css';

const List = () => {
  // State to store countries
  const [countries, setcountries] = useState([]);

  // State to mange the loading spinner
  const [loading, setLoading] = useState(true);

  // Effect to fetch countries from the API
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(countriesList => {
        setcountries(countriesList);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [loading]);

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
    </div>
  );
};

export default List;
