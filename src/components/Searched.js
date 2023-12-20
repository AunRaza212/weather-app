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
          sx={{ fontWeight: "600", color: "#dde0e4", ml: "30px", mt: "15px",mb:'0px' }}
         variant="h3"
          fontFamily="Rubik"
          mb="40px"
        >
           <span> {apiData.location.name} </span>
           </Typography>
       
       
         <Typography variant="h6"   >
         <span style={{fontFamily:'Rubik',marginLeft:'30px',fontWeight:'600',color:'#9399a2'}} > Humidity: {apiData.current.humidity}%</span>
         </Typography>
         <Typography variant="h3" mt='70px' mb='30px' >
         <span style={{ fontFamily:'Rubik',fontWeight: "600", color: "#dde0e4",marginLeft:'30px' }}>{apiData.current.temp_c}°C</span>
         </Typography>

        <WeatherCard apiData={apiData}/>
        <AirConditionsCard apiData={apiData}/>
      </Box>
 </Stack>
  )
}

export default Searched
