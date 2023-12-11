
import axios from 'axios';

export const BASE_URL = 'https://weatherapi-com.p.rapidapi.com';

 const weathers = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  }
};

export const fetchData = async (endpoint, params) => {
  const url = `${BASE_URL}/${endpoint}`;
  try {
    const response = await axios.get(url, { ...weathers, params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for the calling code to handle
  }
};
