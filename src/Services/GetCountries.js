const GetCountries = async () => {
  try {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default GetCountries;
