import { Input,   Stack } from '@mui/material'
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
const[searchTerm,setSearchTerm]=useState('')
const navigate = useNavigate();
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Trigger the search when Enter key is pressed
      handleSearch();
    }
  };
  const handleSearch = () => {
    // Use navigate to navigate to a new route
    navigate(`/${searchTerm}`);
  };

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
    direction='row'
  >
    
    <Input   onKeyDown={handleKeyPress} value={searchTerm}   onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search for Cities" disableUnderline={true}
  
  
    sx={{
bgcolor: "#202B3B", // Changed the bgcolor
borderRadius: 5,
color: 'white', // Set text color for the placeholder
}} />

  
  </Stack>
   
  )
}

export default SearchBar
