import { Box, Container, Grid, Typography, Button } from '@mui/material'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import Mac from "../../icons/fusion/macbook.png"
import Ruler from "../../icons/fusion/ruler.png"
import Cetvel from "../../icons/fusion/cetvel.png"
import Watch from "../../icons/fusion/watch.png"
import Coffe from "../../icons/fusion/fusion-coffee.png"
import Glasses from "../../icons/fusion/fusion-glasses.png"
import Pen from "../../icons/fusion/fusion-pen-2.png"
import Makas from "../../icons/fusion/fusion-pen-1.png"
import Usb from "../../icons/fusion/fusion-usb-2.png"
import Plane from "../../icons/fusion/fusion-plane.png"

type Props = {}

const Fusion = (props: Props) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const imageValue = useTransform(scrollYProgress, [0, 1], ["-350%", "0%"]);
  const rightItems = useTransform(scrollYProgress, [0, 1], ["350%", "0%"]);

  return (
    <Box sx={{ backgroundColor: 'black' }}>
      <Box className="scroll-container" ref={containerRef} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'50rem'} width={'100%'} color={'white'}>
        <Box className='img-container' sx={{ flexDirection: 'column', justifyContent: 'end' }}>
          <motion.div className="img-inner" style={{ translateX: imageValue }}>
            <Image width={170} src={Watch} alt="a green plant" />
          </motion.div>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
            <motion.div className="img-inner" style={{ translateX: imageValue }}>
              <Image style={{ marginRight: 20, }} width={30} src={Usb} alt="a green plant" />
              <Image style={{ marginRight: 20 }} width={20} src={Pen} alt="a green plant" />
              <Image width={60} src={Glasses} alt="a green plant" />
            </motion.div>
          </Box>
          <motion.div className="img-inner" style={{ translateX: imageValue }}>
            <Image width={170} src={Makas} alt="a green plant" />
          </motion.div>
        </Box>

        <Box className='img-container' >
          <div className="img-inner" >
            <Image width={550} src={Mac} alt="a green plant" />

          </div>
        </Box>

        <Box className='img-container' sx={{ flexDirection: 'column' }}>
          <motion.div className="img-inner" style={{ translateX: rightItems }}>
            <Image width={200} src={Coffe} alt="a green plant" />
          </motion.div>
          <Box sx={{ width: '100%', display: 'flex' }}>
            <motion.div style={{ translateX: rightItems, display: 'flex', }}>
              <Image style={{ marginRight: 10 }} width={30} src={Cetvel} alt="a green plant" />
              <motion.div style={{ translateX: rightItems, display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                <Image width={100} src={Ruler} alt="a green plant" />
                <Image width={100} src={Plane} alt="a green plant" />
              </motion.div>
            </motion.div>
          </Box>
        </Box>
      </Box>
      <Typography color={'white'} textAlign={'center'} sx={{ fontSize: { xs: '2rem', lg: '3.5rem' } }} fontWeight={900}>HUZURLARINIZDA</Typography>
      <Container maxWidth='xl' sx={{ minHeight: '35rem', mt: 7 }}>
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
          <Typography sx={{ fontSize: { xs: '2rem', sm: '4.5rem', md: '6rem' } }} fontWeight={900}>HEMEN TANIŞALIM</Typography>
          <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3.8rem' } }} fontWeight={600}>Seninle konuşmayı çok isteriz</Typography>
          <Box display={'flex'} flexDirection={'row'} width={'100%'} mt={3} justifyContent={'center'}>
            <Button size='large' sx={{ width: { xs: '50%', md: '50%', lg: '40%' }, borderRadius: '2rem', mr: 1, backgroundColor: 'black', border: '1px solid grey', height: '4rem' }} variant='contained'> Button</Button>
            <Button size='large' sx={{ width: { xs: '50%', md: '20%' }, borderRadius: '2rem', backgroundColor: 'white', color: 'black' }} variant='contained'>Lorem </Button>
          </Box>
        </Box>
      </Container>

    </Box>
  )
}

export default Fusion