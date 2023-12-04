import { Input,  Stack } from '@mui/material'
import React from 'react'

const SearchBar = () => {
  return (
 
    <Stack
    sx={{
      
      bgcolor: "#202B3B",
      ml: {xs:13.7,lg:20,md:20},
      mt: 2,
      mr: 130,
      border: "none",
      borderRadius: '5px',
      p: 0.7,
      pl: 2,
      width:{lg:'960px',sm:'360px', md:'710px',xs:'360px'}
    }}
  >
    <Input placeholder="Search for Cities" disableUnderline={true} sx={{
bgcolor: "#202B3B", // Changed the bgcolor
borderRadius: 5,
color: 'white', // Set text color for the placeholder
}} />
  </Stack>
    
  )
}

export default SearchBar
