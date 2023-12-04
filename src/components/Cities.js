import React from "react";
import "../App.css";
import { sun } from "../utils/constants";
import { Box, Stack, Typography } from "@mui/material";
import CitiesInfo from "./CitiesInfo";
import TodaysForecast from "./TodaysForecast";
import ThreeDayForecast from "./ThreeDayForecast";
import Sevendayforecast from "./Sevendayforecast";
const Cities = ({ apiData }) => {
  if (!apiData || !apiData.location || !apiData.current) {
    // Handle the case when data is not available
    return <div>Loading...</div>;
  }
  return (
    <Stack direction="row">
      <Stack direction="column">
        <CitiesInfo />
        <CitiesInfo />
        <CitiesInfo />
        <CitiesInfo />
      </Stack>

      <Box mt='15px' sx={{visibility:{sm:'hidden',xs:'hidden',lg:'visible',md:'visible',xl:'visible'}}} >
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
            <span>Humidity: {apiData.current.humidity}%</span>
          </Typography>
          <Box mt="35px">
            <span>{apiData.current.temp_c}°C</span>
          </Box>
        </Typography>
        <TodaysForecast />
        <ThreeDayForecast />
      </Box>
  
    </Stack>
  );
};

export default Cities;
