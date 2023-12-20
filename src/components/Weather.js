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
      <Box sx={{visibility:{md:'collapse',sm:'collapse',xs:'collapse',xl:'visible' ,lg:'visible'}}} >
      <Sevendayforecast />
      </Box>
     
    </Stack>
  );
};

export default Weather;
