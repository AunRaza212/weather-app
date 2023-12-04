import { useState } from "react";
import "../index.css";
import { Box, Stack, Typography } from "@mui/material";

const Settings = () => {
  const [selectedUnit, setSelectedUnit] = useState("Celsius");
  const [wind, setWind] = useState("kmh");
  const [pressure, setPressure] = useState("hpa");
  const [precip,setPrecip]=useState('Milli')
  const [distance,setDistance]=useState('Kilo')
  const handleButtonClick = (unit) => {
    setSelectedUnit(unit);
  };
  const handleWind = (unit) => {
    setWind(unit);
  };
  const handlePressure = (unit) => {
    setPressure(unit);
  };
  const handlePrecip=(unit)=>{setPrecip(unit)}
  const handleDistance=(unit)=>{
    setDistance(unit)
  }
  return (
    <Stack>
      <Stack direction="row" ml="15px" >
        <Typography fontSize="20px" fontFamily="Rubik" color="#DDE0E4" p={2}>
          Units
        </Typography>
      </Stack>

      <Stack
        direction="column"
        ml="30px"
        p={2}
        borderRadius="20px"
        bgcolor="#202b3b"
        sx={{width:{md:'700px', lg:'1000px',sm:'442px',xs:'340px'}}}
      >
        <Typography color="#9399a2" p={1} fontSize="14px" fontWeight="bold">
          TEMPERATURE
        </Typography>

        <Box p={1} bgcolor="#0B131E" borderRadius="15px"  display="flex"
          justifyContent="space-between">
          <button
            className={`celsius ${selectedUnit === "Celsius" ? "active" : ""}`}
            onClick={() => handleButtonClick("Celsius")}
          >
            Celcius
          </button>
          <button
            className={`fahrenheit ${
              selectedUnit === "Fahrenheit" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Fahrenheit")}
          >
            Fahrenheit
          </button>
        </Box>
        <Typography
          mt="20px"
          color="#9399a2"
          p={1}
          fontSize="14px"
          fontWeight="bold"
        >
          WIND SPEED
        </Typography>
        <Box
          p={1}
          bgcolor="#0B131E"
          borderRadius="15px"
          display="flex"
          justifyContent="space-between"
        >
          <button
            className={`kmh ${wind === "kmh" ? "active" : ""}`}
            onClick={() => handleWind("kmh")}
          >
            km/h
          </button>
          <button
            className={`ms ${wind === "ms" ? "active" : ""}`}
            onClick={() => handleWind("ms")}
          >
            m/s
          </button>
          <button
            className={`knots ${wind === "knots" ? "active" : ""}`}
            onClick={() => handleWind("knots")}
          >
            knots
          </button>
        </Box>
        <Typography
          mt="20px"
          color="#9399a2"
          p={1}
          fontSize="14px"
          fontWeight="bold"
        >
          PRESSURE
        </Typography>
        <Box
          p={1}
          bgcolor="#0B131E"
          borderRadius="15px"
          display="flex"
          justifyContent="space-between"
        >
          <button
            className={`hpa ${pressure === "hpa" ? "active" : ""}`}
            onClick={() => handlePressure("hpa")}
          >
            hPa
          </button>
          <button
            className={`inches ${pressure === "Inches" ? "active" : ""}`}
            onClick={() => handlePressure("Inches")}
          >
            Inches
          </button>
          <button
            className={`kpa ${pressure === "kPa" ? "active" : ""}`}
            onClick={() => handlePressure("kPa")}
          >
            kPa
          </button>
          <button
            className={`mm ${pressure === "mm" ? "active" : ""}`}
            onClick={() => handlePressure("mm")}
          >
            mm
          </button>
        </Box>
        <Typography mt="20px" color="#9399a2" p={1} fontSize="14px" fontWeight="bold">
          PRECIPITATION
        </Typography>

        <Box p={1} bgcolor="#0B131E" borderRadius="15px"  display="flex"
          justifyContent="space-between">
          <button
            className={`celsius ${precip === "Milli" ? "active" : ""}`}
            onClick={() => handlePrecip("Milli")}
          >
           Millimeters
          </button>
          <button
            className={`fahrenheit ${
              precip === "Inches" ? "active" : ""
            }`}
            onClick={() => handlePrecip("Inches")}
          >
           Inches
          </button>
        </Box>
        <Typography mt="20px" color="#9399a2" p={1} fontSize="14px" fontWeight="bold">
          DISTANCE
        </Typography>

        <Box p={1} bgcolor="#0B131E" borderRadius="15px"  display="flex"
          justifyContent="space-between">
          <button
            className={`celsius ${distance === "Kilo" ? "active" : ""}`}
            onClick={() => handleDistance("Kilo")}
          >
           Kilometers
          </button>
          <button
            className={`fahrenheit ${
              distance=== "Miles" ? "active" : ""
            }`}
            onClick={() => handleDistance("Miles")}
          >
           Miles
          </button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Settings;
// const [alignment, setAlignment] = useState("Celsius");

// const handleChange = (event, newAlignment) => {
//   if(newAlignment!== null){
//   setAlignment(newAlignment);}
// };

// const theme =createTheme({palette:{
//   primary: {main:'#495d7a'}
// }})
/* <ToggleButtonGroup
          color='primary'
          value={alignment}
          exclusive
          onChange={handleChange}
     
        >
            <ToggleButton
            disableRipple
            value="Celsius"
           
           
           className="celsius"
            >
              Celsius
            </ToggleButton>
            <ToggleButton
            disableRipple
            value="Fahrenheit"
            className="fahrenheit"
            >
              Fahrenheit
            </ToggleButton>
            </ToggleButtonGroup> */
