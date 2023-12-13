import { Box, Stack, Typography } from "@mui/material";
import { sun } from "../utils/constants";
const CitiesInfo = ({city,temperature,time}) => {
 
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

      <Box sx={{ mt: "30px",width:{xl:'140px',lg:'140px',md:'500px',sm:'400px',xs:'500px'} }}>
        <Typography
          color="#dde0e4ff"
          marginLeft="5px"
          fontSize="20px"
          fontWeight={600}
        >
          {city}
          
        </Typography>
        <Typography fontFamily='Rubik' color="#9399a2" marginLeft="5px" fontSize="15px">
        {time}
        </Typography>
      </Box>
      <Stack
        sx={{ width: {
          md: "320px",
          sm: "414px",
          xs: "317px",
          lg: "792px",
         

        }, fontSize:{ md: "30px",
        sm: "25px",
        xs: '25px',
        lg: "30px",
        }}}
        fontSize="30px"
        fontFamily="Rubik"
        direction="column"
        alignItems="flex-end"
      
        color="#dde0e4ff"
        fontWeight="400"
      >
{temperature}°C
      
      </Stack>
    </Stack>
  );
};

export default CitiesInfo;
