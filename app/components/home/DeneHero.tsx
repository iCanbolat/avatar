import { Grid, Divider } from '@mui/material'
import React from 'react'
import HeroTyped from './HeroTyped'

type Props = {}

const DeneHero = (props: Props) => {
  return (
    <>
      <Grid
        container
        minHeight={'40vh'}
        width={'100%'}
        color={'white'}
        className='back'
      >
        <Grid item sm={12} >
          <Grid sx={{ mt: { xs: 12, sm: 10 }, mx: { xl: 23, lg: 15, md: 10, sm: 3.2, xs: 2.3 }, maxHeight: '15rem', position: 'absolute' }} item md={10.2} lg={12}>
            <HeroTyped text='MARKANIZIN AVATARI BİZ OLALIM' />
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ width: '100%', borderColor: 'rgb(0 0 0 / 84%)' }} />
    </>
  )
}

export default DeneHero