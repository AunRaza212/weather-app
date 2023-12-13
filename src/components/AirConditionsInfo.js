import { Box, Grid,  Stack, Typography } from "@mui/material";
import { icons } from "../utils/constants";

const AirConditionsInfo = ({apiData}) => {
  if (!apiData || !apiData.current) {
    // Handle the case when data is not available
    return <div>Loading123...</div>;
  }
  return (
<>
      <Grid container spacing={5} p={2} >
        <Grid item xs={6} display="inline-flex" marginBottom="5px" gap="4px">
          <Stack direction="row">
            <Box key={icons.name} mt="3px" color='#9399a2'>
              {icons
                .filter((value) => value.name === "thermometer")
                .map((value) => value.icon)}
            </Box>
            <Typography fontSize='20px' color='#9399a2'>
              Real Feel <br />{" "}
              <span
                style={{
                  fontFamily: "Rubik",
                  fontWeight: "600",
                  fontSize: "28px",
                  color: "#c4cad3",
                }}
              >
                {apiData.current.feelslike_c}°C
              </span>{" "}
            </Typography>
          </Stack>

          {/* Content for the first grid item */}
        </Grid>
        <Grid item xs={6} display="flex" gap="4px" marginBottom="5px">
       

        
          <Box key={icons.icon} mt="3px" color='#9399a2' >
            {icons
              .filter((value) => value.name === "wind")
              .map((value) => value.icon)}
          </Box>
          <Typography color='#9399a2' fontSize='20px'>Wind <br/>   <span
                style={{
                  fontFamily: "Rubik",
                  fontWeight: "600",
                  fontSize: "28px",
                  color: "#c4cad3",
                }}
              >
                {apiData.current.wind_kph}Km/h
              </span></Typography>
             
         
        </Grid>
      </Grid>
      <Grid container spacing={5} p={2} color="#a29993">
        <Grid item xs={6} display="flex" gap="4px">
          <Stack direction='row'  >

        
          <Box key={icons.name} mt="3px" color='#9399a2' >
            {icons
              .filter((value) => value.name === "waterDrop")
              .map((value) => value.icon)}
          </Box>
          <Typography fontSize='20px'color='#9399a2'>Humidity <br/>   <span
                style={{
                  fontFamily: "Rubik",
                  fontWeight: "600",
                  fontSize: "28px",
                  color: "#c4cad3",
                }}
              >{apiData.current.humidity}%</span> </Typography>
                </Stack>
          {/* Content for the third grid item */}
        </Grid>
        <Grid item xs={6} display="flex" gap="4px" >
        

       
          <Box key={icons.name} mt="3px" color='#9399a2'>
            {icons
              .filter((value) => value.name === "UV")
              .map((value) => value.icon)}
          </Box>
          <Typography fontSize='20px' color='#9399a2'>UV <br/>   <span
                style={{
                  fontFamily: "Rubik",
                  fontWeight: "600",
                  fontSize: "28px",
                  color: "#c4cad3",
                }}
              >{apiData.current.uv}</span> </Typography>
              
          {/* Content for the fourth grid item */}
        </Grid>
      </Grid>
      </>
  );
};

export default AirConditionsInfo;
// //{weatherData.data[0].temp}{weatherData && weatherData.data.length > 0 &&
// import { Grid, Paper, Stack, Typography } from '@mui/material'
// import React from 'react'

// const AirConditionsInfo = () => {
//   return (

//   )
// }

// export default AirConditionsInfo
