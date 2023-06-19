"use client"
import { Grid, Typography, Button } from '@mui/material'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Microsoft from '../../icons/Microsoft.svg';
import Adobe from '../../icons/Adobe.svg';
import Google from '../../icons/Google-Maps.svg';
import Oracle from '../../icons/Oracle.svg';
import Image from 'next/image';

type Props = {}

const Hero = (props: Props) => {
  return (
    <Grid
      container
      minHeight={'60vh'}
      sx={{ backgroundColor: 'BLACK', pt: { xs: 3, md: 8 } }}
      width={'100%'}
      color={'white'}
    >
      <Grid container sx={{ mx: { xl: 31, lg: 15, md: 16, sm: 5, xs: 2 } }}>
        <Grid sx={{ display: 'block', textAlign: { xs: 'center', md: 'unset' } }} item md={6} xs={12}>
          <Typography fontSize={{ md: '1.6rem', lg: '2.2rem' }}>
            Keyifle Ürettiğimiz <br></br> Markalar
          </Typography>
          <Button variant='contained' sx={{
            backgroundColor: 'white', color: 'black',
            ':hover': {
              bgcolor: 'white',
              color: 'black',
            },
            mt: 2, textTransform: 'capitalize', borderRadius: '0'
          }} endIcon={<PlayArrowIcon sx={{ color: 'red' }} />}>Bizi izle</Button>
        </Grid>
        <Grid item md={6} xs={12}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat turpis magna, vitae maximus ex tincidunt quis. Nunc congue, metus sed rhoncus rutrum,
        </Grid>
      </Grid>

      <Grid container sx={{ px: { lg: 10, md: 0 } }} alignItems={'center'} display={'flex'} flexDirection={'row'}>
        <Grid item md={6} lg={3} sm={6} xs={12} sx={{ textAlign: 'center' }}>
          <Image
            src={Microsoft}
            alt='microsoft'
          />
        </Grid>
        <Grid item md={6} lg={3} sm={6} xs={12} sx={{ textAlign: 'center' }}>
          <Image
            src={Adobe}
            alt='adobe'
          />
        </Grid>
        <Grid item md={6} lg={3} sm={6} xs={12} sx={{ textAlign: 'center' }}>
          <Image
            src={Google}
            alt='google'
          />
        </Grid>
        <Grid item md={6} lg={3} sm={6} xs={12} sx={{ textAlign: 'center' }}>
          <Image
            src={Oracle}
            alt='oracle'
          />
        </Grid>
      </Grid>
      <Grid item md={6}></Grid>

    </Grid>
  )
}

export default Hero