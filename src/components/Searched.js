import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard'
import AirConditionsCard from './AirConditionsCard'
import { fetchData } from '../utils/fetchData'
import { useParams } from 'react-router-dom'
const Searched = () => {
    const { searchTerm } = useParams();
    const [apiData, setApiData] = useState(null);
    console.log(apiData)
    useEffect(() => {
        console.log("Search Term:", searchTerm);
      const fetchDataFromAPI = async () => {
        try {
          const data = await fetchData( 'forecast.json' ,{q:searchTerm});
          setApiData(data);
        } catch (error) {
          console.error("Error fetching data from the API", error);
        }
      };
  
      fetchDataFromAPI();
    }, [searchTerm]);
    if (!apiData) {
        return <div>Loading...</div>;
      }
  return (
 <Stack direction='row' >
       <Box p={2} sx={{ width: "300px", height: "90vh" }}>
         <Typography
          sx={{ fontWeight: "600", color: "#dde0e4", ml: "50px", mt: "15px" }}
          variant="h3"
          fontFamily="Rubik"
          mb="40px"
        >
          
        <span> {apiData.location.name} </span>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Rubik", fontWeight: "600", color: "#9399A2ff" }}
          >
            <span> Humidity: {apiData.current.humidity}%</span>
          </Typography>
          <Box mt={7}>
            <span>{apiData.current.temp_c}°C</span>
          </Box>
        </Typography>

        <WeatherCard apiData={apiData}/>
        <AirConditionsCard apiData={apiData}/>
      </Box>
 </Stack>
  )
}

export default Searched
