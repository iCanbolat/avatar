import React from 'react'
import { motion } from "framer-motion";
import { Typography } from '@mui/material'


type Props = {
  text: string
}

const HeroTyped = (props: Props) => {
  const letters = Array.from(props.text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: 'wrap' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} style={{ color: [11, 12, 13, 14, 15, 16, 17, 18].includes(index) ? '#34B197' : 'white' }}>
          {/*<Typography sx={{ fontSize: { md: '4.1rem', lg: '5.4rem', sm: '3.4rem', xs: '2.9rem', xl:'5.5rem' }, fontWeight: '900', letterSpacing: { xl: '0.5rem', lg: '0.1rem' }, }}>*/}
          <Typography   sx={{ fontWeight: '900', letterSpacing: { xl: '0.5rem', lg: '0.1rem' }, fontSize:'10.5rem' }}>
            {letter === " " ? "\u00A0" : letter}
          </Typography>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default HeroTyped