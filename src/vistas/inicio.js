import React from 'react'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from '@mui/material/Paper'

const Inicio = ({xsImage, mdImage}) => {
  const smallScreen = useMediaQuery('(max-width:600px)');

  const imagenXs = (
    <Paper variant="elevation"  elevation={0} >
      <img src= {xsImage} alt="Logo pequeño"/>
    </Paper>
  );

  const imagenMd = (
    <Paper variant="elevation"  elevation={0} >
      <img  src={mdImage} alt="Logo grande"/>
    </Paper>
  );

  const Imagen =  (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }} style={{textAlign: "center"}}>
      <Grid item xs={12} sm={6}>
        {smallScreen ? imagenXs : imagenMd}
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
