import {  Stack } from "@mui/material";
import React from "react";

const SevendayInfo = ({ borderBottom, p, date, sunny }) => {
  return (
    <Stack
      
      sx={{ p, borderBottom, height: "48px" }}
    >
     
     
      <Stack direction="row"  display='flex' justifyContent='space-between' > {date} {sunny}</Stack>
    </Stack>
  );
};

export default SevendayInfo;
