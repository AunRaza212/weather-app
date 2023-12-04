import { Stack, Typography } from "@mui/material";
import React from "react";
import WeatherSingleInfo from "./WeatherSingleInfo";

const TodaysForecast = () => {
  return (
    <>
      <Stack
        sx={{
          width: { md: "320px", sm: "358px", xs: "100%", lg: "400px" },
          boxShadow: "none",
          borderRadius: 5,
        }}
        gap='30px'
      >
        

        
        <Typography
          fontSize={14}
          color="#9399a2"
          fontWeight={600}
          variant="caption"
          display="flex"
          justifyContent="center"
        >
          TODAY'S FORECAST
        </Typography>
        
        <Stack direction="row" display="flex" justifyContent="center">
          <WeatherSingleInfo p={2} time="6:00 am" />
          <WeatherSingleInfo p={2} time="9:00 am" />
          <WeatherSingleInfo p={2} time="12:00 pm" />
        </Stack>
      </Stack>
    </>
  );
};

export default TodaysForecast;
