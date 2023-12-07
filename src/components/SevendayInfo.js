import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const SevendayInfo = ({borderBottom,p,date,sunny}) => {

  return (
    <Stack direction="row"  sx={{p, borderBottom, justifyContent:'space-between'}}>
      <Typography color='#9399a2' fontSize={16}>{date|| 'N/A'}</Typography>
      <Box fontWeight='bold' color='#dde0e4' >{sunny|| 'N/A'}</Box>
    </Stack>
  );
};

export default SevendayInfo;
