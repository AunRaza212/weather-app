import React from 'react'
import { categories } from '../utils/constants'
import { Stack } from '@mui/material'
const Umbrella = () => {
  return (
    <Stack alignItems='center'>
  {   categories.map((value)=> value.icon)}
    </Stack>
  )
}

export default Umbrella
