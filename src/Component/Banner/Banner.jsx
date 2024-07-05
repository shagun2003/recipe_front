import React from 'react'
import { Box,Typography,styled } from "@mui/material"; 
import two from './two.jpg'
const Ima=styled(Box)`
    background: url(${two})center/50% repeat-x #000;
   width: 100%;
   height:50vh;
   display:flex;
   align-items:center;
   justify-content:center;
   flex-direction:column;
`
const Ele=styled(Typography)`
     font-size:70px;
     color:#808080;
     line-height:1;
`
const Banner = () => {
  return (
    <Ima>
        <Ele>RECIPES</Ele>
    </Ima>
  )
}

export default Banner