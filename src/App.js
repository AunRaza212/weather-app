import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Feed from "./components/Feed";
import { Stack } from "@mui/material";
import { ApiContext } from "./components/ApiContext";

function App() {
  return (
    <ApiContext>
    <BrowserRouter>
      <Stack whiteSpace="none">
        <SearchBar />
      </Stack>
      <Routes>
        <Route exact path="/" element={<Feed />} />
      </Routes>
    </BrowserRouter>
    </ApiContext>
  );
}
export default App;

// // // // export default App;
// // // import React, { useState, useEffect } from 'react';
// // // import { fetchData } from './utils/fetchData'; // Replace with the actual path to your module
// // // import './App.css'
// // // const WeatherDisplay = () => {
// // //   const [weatherData, setWeatherData] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchDataFromApi = async () => {
// // //       try {
// // //         const data = await fetchData('your-api-endpoint'); // Replace with the actual endpoint
// // //         setWeatherData(data);
// // //       } catch (error) {
// // //         setError('Error fetching data from the API');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchDataFromApi();
// // //   }, []); // Empty dependency array ensures useEffect runs once on component mount

// // //   return (
// // //     <div>
// // //       {loading && <p>Loading...</p>}
// // //       {error && <p>{error}</p>}
// // //       {weatherData && (
// // //         <div className='App' >
// // //           <h2>Weather Information</h2>
// // //           <p>Temperature: {weatherData.temperature}</p>
// // //           {/* Display other relevant weather information here */}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default WeatherDisplay;
// // import React, { useState, useEffect } from 'react';
// // import { fetchData } from './utils/fetchData'; // Replace with the actual path to your module

// // const WeatherDisplay = () => {
// //   const [weatherData, setWeatherData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchDataFromApi = async () => {
// //       try {
// //         const data = await fetchData('forecast/3hourly', { lat: '35.5', lon: '-78.5' });
// //         setWeatherData(data);
// //       } catch (error) {
// //         setError('Error fetching data from the API');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchDataFromApi();
// //   }, []); // Empty dependency array ensures useEffect runs once on component mount

// //   return (
// //     <div>
// //       {loading && <p>Loading...</p>}
// //       {error && <p>{error}</p>}
// //       {weatherData && (
// //         <div>
// //           <h2>Weather Information</h2>
// //           <p>Temperature: {weatherData[0].temperature}</p>
// //           {/* Display other relevant weather information here */}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default WeatherDisplay;
// import React, { useState, useEffect } from 'react';
// import { fetchData } from './utils/fetchData'; // Replace with the actual path to your module

// import './App.css'

// const WeatherDisplay = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDataFromApi = async () => {
//       try {
//         const data = await fetchData('forecast/3hourly', { lat: '35.5', lon: '-78.5' });
//         setWeatherData(data);
//       } catch (error) {
//         setError('Error fetching data from the API');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDataFromApi();
//   }, []); // Empty dependency array ensures useEffect runs once on component mount
//   console.log('weatherData:', weatherData);
//   return (
//     <div className='App' >
//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {weatherData && weatherData.length > 0 && (
//         <div>
//           <h2>Weather Information</h2>
//           <p>Temperature: {weatherData.data[0].temp}</p>
//           {/* Display other relevant weather information here */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherDisplay;
// import React, { useState, useEffect } from 'react';
// import { fetchData } from './utils/fetchData'; // Replace with the actual path to your module

// const WeatherDisplay = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDataFromApi = async () => {
//       try {
//         const data = await fetchData('forecast/3hourly', { lat: '35.5', lon: '-78.5' });
//         setWeatherData(data);
//       } catch (error) {
//         setError('Error fetching data from the API');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDataFromApi();
//   }, []); // Empty dependency array ensures useEffect runs once on component mount

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {weatherData && weatherData.data.length > 0 && (
//         <div>
//           <h2>Weather Information</h2>
//           <p>Temperature: {weatherData.data[0].temp}</p>
//           {/* Display other relevant weather information here */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherDisplay;
