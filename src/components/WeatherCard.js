import React from "react";
import { Stack, Typography } from "@mui/material";
import WeatherSingleInfo from "./WeatherSingleInfo";
import { ApiContext, useApiData } from "./ApiContext";
const WeatherCard = ({ apiData }) => {
  if (!apiData || !apiData.forecast || !apiData.forecast.forecastday) {
    // Handle the case when data is not available
    return <div>Loading123...</div>;
  }

  return (
    <Stack
      sx={{
        width: { md: "750px", sm: "490px", xs: "390px", lg: "1000px" },
        boxShadow: "none",
        borderRadius: 5,
        backgroundColor: "rgb(32,43,59)",
        overflow:'clip',
        
      }}
      direction="column"
    >
      <Typography p={3} fontSize={14} color="#9399a2" fontWeight={600}>
        TODAY'S FORECAST
      </Typography>

      <Stack direction="row" p={2}>
        <WeatherSingleInfo
          p={3}
          time="6:00am"
          temp={apiData.forecast.forecastday[0].hour[6].temp_c}
          clouds={apiData.forecast.forecastday[0].hour[6].condition.text}
        />
        <WeatherSingleInfo
          p={3}
          time="9:00am"
          temp={apiData.forecast.forecastday[0].hour[9].temp_c}
          clouds={apiData.forecast.forecastday[0].hour[9].condition.text}
        />
        <WeatherSingleInfo
          p={3}
          time="12:00pm"
          temp={apiData.forecast.forecastday[0].hour[12].temp_c}
          clouds={apiData.forecast.forecastday[0].hour[12].condition.text}
        />
        <WeatherSingleInfo
          p={3}
          time="3:00pm"
          temp={apiData.forecast.forecastday[0].hour[15].temp_c}
          clouds={apiData.forecast.forecastday[0].hour[15].condition.text}
        />
        <WeatherSingleInfo
          p={3}
          time="6:00pm"
          temp={apiData.forecast.forecastday[0].hour[15].temp_c}
          clouds={apiData.forecast.forecastday[0].hour[15].condition.text}
        />
        <WeatherSingleInfo
          p={3}
          time="9:00pm"
          temp={apiData.forecast.forecastday[0].hour[18].temp_c}
          clouds={apiData.forecast.forecastday[0].hour[18].condition.text}
        />
      </Stack>
    </Stack>
  );
};

export default WeatherCard;
