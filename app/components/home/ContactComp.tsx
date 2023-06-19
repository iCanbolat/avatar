import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const ContactComp = (props: Props) => {
  return (
    <Container maxWidth='xl' sx={{ minHeight: '35rem', mt: 7 , backgroundColor:'black'}}>
      <Typography color={'white'} textAlign={'center'}   fontWeight={900}>HUZURLARINIZDA</Typography>
      <Grid container spacing={2}>
        <Grid item md={4} >
          <Box component={'img'} src='https://via.placeholder.com/477x658' sx={{ width: '100%', height: '100%', backgroundColor: 'white' }} />
        </Grid>
        <Grid item md={4} >
          <Box component={'img'} src='https://via.placeholder.com/477x658' sx={{ width: '100%', height: '100%', backgroundColor: 'white' }} />
        </Grid>
        <Grid item md={4} >
          <Box component={'img'} src='https://via.placeholder.com/477x658' sx={{ width: '100%', height: '100%', backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      <Box display={'flex'} mt={8} width={'100%'} flexDirection={'column'} color={'white'} height={'100%'} textAlign={'center'}>
        <Typography variant='h1' fontWeight={900}>HEMEN TANIŞALIM</Typography>
        <Typography variant='h3' fontWeight={600}>Seninle konuşmayı çok isteriz</Typography>
        <Box display={'flex'} flexDirection={'row'} width={'100%'} justifyContent={'center'}>
          <Button sx={{ width: '50%', borderRadius: '2rem', mr: 1, backgroundColor: 'black', border: '1px solid grey' }} variant='contained'> Button</Button>
          <Button size='large' sx={{ borderRadius: '2rem', backgroundColor: 'white', color: 'black' }} variant='contained'>Lorem </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default ContactComp