import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const SevendayInfo = ({borderBottom,p,date,sunny}) => {

  return (
    <Stack direction="row"  sx={{p, borderBottom, justifyContent:'space-between'}}>
      <Typography color='#9399a2' fontSize={16}>{date}</Typography>
      <Box fontWeight='bold' color='#dde0e4' >{sunny}</Box>
    </Stack>
  );
};

export default SevendayInfo;
