import { Stack, Typography } from "@mui/material";
import React from "react";
import WeatherSingleInfo from "./WeatherSingleInfo";

const TodaysForecast = ({ apiData }) => {
  if (!apiData || !apiData.forecast || !apiData.forecast.forecastday) {
    // Handle the case when data is not available
    return <div>Loading123...</div>;
  }
  return (
    <>
      <Stack
        sx={{
          width: { md: "320px", sm: "358px", xs: "100%", lg: "400px" },
          boxShadow: "none",
          borderRadius: 5,
        }}
        gap="30px"
        direction='column'
        display="flex"
        justifyContent="center"
      >
       
        <Typography
          fontSize={14}
          color="#9399a2"
          fontWeight={600}
          variant="caption"
          display="flex"
          justifyContent="center"
          ml='75px'
        >
          TODAY'S FORECAST
        </Typography>
<Stack direction='row' width='600px' >


     
          <WeatherSingleInfo

            time="6:00 am"
            clouds={apiData.forecast.forecastday[0].hour[6].condition.text}
            temp={apiData.forecast.forecastday[0].hour[6].temp_c}
          />
          <WeatherSingleInfo
          
            time="9:00 am"
            clouds={apiData.forecast.forecastday[0].hour[9].condition.text}
            temp={apiData.forecast.forecastday[0].hour[9].temp_c}
          />
          <WeatherSingleInfo
           
            time="12:00 pm"
            clouds={apiData.forecast.forecastday[0].hour[12].condition.text}
            temp={apiData.forecast.forecastday[0].hour[12].temp_c}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default TodaysForecast;
