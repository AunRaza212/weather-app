import React, { useState } from 'react'
import Weather from './Weather';
import Cities from './Cities';
import { Box, Stack } from '@mui/material';
import SideBar from './SideBar';

const MainFeed = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const renderComponentByCategory = () => {
      switch (selectedCategory) {
        case "Weather":
          return <Weather />;
        case "Cities":
          return <Cities />;
        case "":
          return <Weather />;
        // Add cases for other categories as needed
        default:
          return null;
      }
    };
  return (
    <Stack direction="row">

    <Box
      sx={{
        height: { sx: "auto", md: "92vh" },
        borderRight: "1px solid #3d3d3d",
        px: { sx: 0, md: 2 },
      }}
    >
      <SideBar setSelectedCategory={setSelectedCategory} />
    </Box>

    {renderComponentByCategory()}
    </Stack>
  )
}

export default MainFeed
