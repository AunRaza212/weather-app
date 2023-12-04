import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { sun } from "../utils/constants";

const CitiesInfo = () => {
  
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

      <Box sx={{ mt: "30px" }}>
        <Typography
          color="#dde0e4ff"
          marginLeft="5px"
          fontSize="30px"
          fontWeight={600}
        >
          Madrid
        </Typography>
        <Typography fontFamily='Rubik' color="#9399a2" marginLeft="5px" fontSize="15px">
          10:23
        </Typography>
      </Box>
      <Stack
        width="792px"
        fontSize="40px"
        fontFamily="Rubik"
        direction="column"
        alignItems="flex-end"
        alignSelf="start"
        color="#dde0e4ff"
        fontWeight="400"
      >
        31
      </Stack>
    </Stack>
  );
};

export default CitiesInfo;
