import React from 'react'
import { Box, Typography } from '@mui/material'

type Props = {}

const Banner = (props: Props) => {
  return (
    <Box display={'flex'} width={'100%'} minHeight={'30rem'} justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: '#242424', color: 'white' ,textAlign:'center',px:3}} >
      <Typography variant='h2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu lacinia ipsum.
      </Typography>
    </Box>
  )
}

export default Banner