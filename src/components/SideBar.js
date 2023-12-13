import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({ setSelectedCategory,selectedCategory }) => {
  return (
    <Stack
    mt='19px'
      ml="13px"
      sx={{
        width: { lg: "68px", xs: "20px", md:'26px' },
        height: { lg: "800px",xs:'710px',sm:'728px', md:'726px' },
        gap: "10px",
        p: { lg: "10px", xs: "27px", md:'28px' },
        overflowY: 'clip',
    
      }}
      bgcolor="#202B3B"
      borderRadius="10px"
      alignItems='center'
    >
      {categories.map((category) => (
      
        <button
          onClick={() => setSelectedCategory(category.name)}
          className={`sidebar sidebar:hover ${selectedCategory === category.name && 'active'  }` }
          key={category.name}
          style={{ fontFamily: "inherit", fontVariant: "unset" }}
        >
          <span>
            {category.icon}
            {category.name}
          </span>
        </button>
        
      ))}
    
    </Stack>
  );
};

export default SideBar;
// <Stack
//   ml="30px"
//   sx={{ width: { lg: "60px", xs: "20px" }, gap: "30px",p:{ lg:'10px',xs:'27px'},mt:'10px' }}
//   bgcolor="#202B3B"
//   borderRadius="10px"

// >
//   <Umbrella />
//   <Weather />
//   <Cities />
//   <Map />
//   <Settings />
// </Stack>
