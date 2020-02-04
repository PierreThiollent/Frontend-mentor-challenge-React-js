import React, { useState } from 'react';
import './Style/App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import List from './Components/List';

const App = () => {
  // State to manage the value of the input
  const [value, setvalue] = useState('');

  // Method to set the value of the input
  const handleChangeValue = value => {
    setvalue(value);
  };

  return (
    <>
      <Header />
      <Search value={value} handleChangeValue={handleChangeValue} />
      <List />
    </>
  );
};

export default App;
