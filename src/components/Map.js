import React from 'react'
import '../App.css'
import { categories } from '../utils/constants'
import { Stack, Typography } from '@mui/material'
const Map = () => {
  return (
    <Stack className='weather' alignItems='center'>
      {categories.map((value)=>value.map)}
   
      Map
     
    </Stack>
     
  )
}

export default Map
