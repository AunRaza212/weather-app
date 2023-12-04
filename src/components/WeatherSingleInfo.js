import { Box, Stack } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import { categories, sun } from "../utils/constants";
const WeatherSingleInfo = ({ p, borderRight, time, temp, clouds }) => {
  return (
    <Stack mt={-5} spacing={{ xs: 1, sm: 2 }} 
    sx={{ borderRight, p }}>
      <Box
        color="#9399a2"
        fontSize={16}
        fontWeight={600}
        fontFamily="Rubik"
        display="flex"
        justifyContent="center"
        
      >
        {time}
      </Box>
      <Box display="flex" justifyContent="center">
        {clouds === "Sunny" || "Clear" ? (
          <img
src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png"
            style={{
              display: "flex",
              alignSelf: "center",
              backgroundSize: "cover",
              border: "0",
              borderRadius: "16px",
              height: "50px",
              width: "50px",
              backgroundPosition: "center",
            }}
          />
        ) : (
          "default"
        )}
      </Box>
      <Box
        color="#dde0e4"
        fontSize={24}
        fontFamily="Rubik"
        fontWeight={600}
        display="flex"
        justifyContent="center"
      >
        {temp}°C
      </Box>
    </Stack>
  );
};

export default WeatherSingleInfo;
