import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import AirConditionsInfo from "./AirConditionsInfo";

const AirConditionsCard = ({apiData}) => {
  return (
    <Box>
    <Stack
      sx={{
        width: { md: "750px", sm: "490px", xs: "391px", lg: "1000px" },
        boxShadow: "none",
        borderRadius: 5,
        backgroundColor: "rgb(32,43,59)",
        mt: "10px",
      }}
      direction="column"
    >
      <Typography p={3} fontSize={14} color='#9399a2' fontWeight={600}  >
        AIR CONDITIONS
      </Typography>
      <Stack direction="column" mt='-10px'>
        <AirConditionsInfo apiData={apiData} />
      </Stack>
    </Stack></Box>
  );
};

export default AirConditionsCard;
