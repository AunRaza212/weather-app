import "../App.css";
import { Box, Stack, Typography } from "@mui/material";
import Sevendayforecast from "./Sevendayforecast";
import AirConditionsCard from "./AirConditionsCard";
import WeatherCard from "./WeatherCard";




const Weather = ({apiData}) => {
  if (!apiData || !apiData.location || !apiData.current) {
    // Handle the case when data is not available
    return <div>Loading...</div>;
  }
  return (
    <Stack direction="row">
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
      <Box sx={{visibility:{md:'collapse',sm:'collapse',xs:'collapse',xl:'visible' ,lg:'visible'}}} >
      <Sevendayforecast />
      </Box>
     
    </Stack>
  );
};

export default Weather;
