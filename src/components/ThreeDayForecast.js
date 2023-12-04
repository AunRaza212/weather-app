import React from 'react'
import SevendayInfo from './SevendayInfo'
import { Box, Stack, Typography } from '@mui/material'

const ThreeDayForecast = () => {
  return (
  <Stack ml='57px' direction='column'  >
    <Typography color='#9399a2' fontSize='14px' p={1}  fontFamily='Rubik' fontWeight={600} >
        3-Day Forecast 
    </Typography>
    <Stack direction='column'  > 
    <Box  >
      <Typography fontFamily='Rubik' fontWeight='bold' fontSize='17px' >
    <SevendayInfo  borderBottom='1px solid #9399a2' p={3} date='Monday' sunny='Sunny' />
    <SevendayInfo borderBottom='1px solid #9399a2' p={3} date='Tuesday' sunny='Sunny' />
    <SevendayInfo  p={3} date='Wednesday' sunny='Sunny' /></Typography></Box>
    </Stack>
   
  </Stack>
  )
}

export default ThreeDayForecast
