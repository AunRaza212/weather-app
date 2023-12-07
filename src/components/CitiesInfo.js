import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { sun } from "../utils/constants";
import {fetchData} from '../utils/fetchData'
const CitiesInfo = ({city,temperature,time}) => {
  // const [apiData, setApiData] = useState(null);
  // const [cityy,setCityy]=useState('')

  // useEffect(() => {
    
  //   const fetchDataFromAPI = async () => {
  //     try {
  //       const data = await fetchData( 'forecast.json' ,{q:`${city}`});
  //       setApiData(data);
  //     } catch (error) {
  //       console.error("Error fetching data from the API", error);
  //     }
  //   };

  //   fetchDataFromAPI();
  // // }, []);
  // setCityy(city)
  // if (!apiData || !apiData.location || !apiData.current) {
  //   // Handle the case when data is not available
  //   return <div>Loading...</div>;
  // }
 
  return (
    <Stack
      direction="row"
      p={4}
      spacing={{ xs: 1, sm: 2 }}
      sx={{
        width: {
          md: "320px",
          sm: "414px",
          xs: "317px",
          lg: "792px",
          height: "100px",
        },
        boxShadow: "none",
        borderRadius: "30px",
        backgroundColor: "rgb(32,43,59)",
        ml: "25px",
        mt: "30px",
      }}
    >
      <img
        style={{
          display: "flex",
          alignSelf: "center",
          backgroundSize: "cover",
          border: "0",
          borderRadius: "16px",
          height: "115px",
          width: "115px",
          backgroundPosition: "center",
        }}
        alt="sun"
        src={sun}
      />

      <Box sx={{ mt: "30px",width:'130px' }}>
        <Typography
          color="#dde0e4ff"
          marginLeft="5px"
          fontSize="30px"
          fontWeight={600}
        >
          {city}
          
        </Typography>
        <Typography fontFamily='Rubik' color="#9399a2" marginLeft="5px" fontSize="15px">
        {time}
        </Typography>
      </Box>
      <Stack
        width="792px"
        fontSize="40px"
        fontFamily="Rubik"
        direction="column"
        alignItems="flex-end"
        alignSelf="start"
        color="#dde0e4ff"
        fontWeight="400"
      >
{temperature}
      
      </Stack>
    </Stack>
  );
};

export default CitiesInfo;
