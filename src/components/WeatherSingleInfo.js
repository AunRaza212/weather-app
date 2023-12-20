import { Box, Stack } from "@mui/material";
const WeatherSingleInfo = ({  borderRight, time, temp, clouds }) => {
  return (
    <Stack
      mt={-5}
      spacing={{ xs: 1, sm: 2 }}
      sx={{ borderRight, p: { lg: 5, xs: 3, md: '20px', sm: '20px' } }}
    >
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
            alt="sun"
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
          <img src="https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901" alt="clouds" />
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
