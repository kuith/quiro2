import React from 'react'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

const Inicio = ({xsImage, mdImage}) => {
  const smallScreen = useMediaQuery('(max-width:600px)');

  const Imagen =  (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
      <Grid item xs={12} sm={6} border={2}>
        {smallScreen ? xsImage : mdImage}
      </Grid>
    </Grid>
    );

  return (
    <Box sx={{ml: { sm: 32,  xs: 2 }, mr: {sm:2, xs: 2}}} >
      {Imagen}
    </Box>
  )
}

export default Inicio;
