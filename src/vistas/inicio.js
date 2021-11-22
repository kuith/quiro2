import React from 'react'

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const basura = (props) => {
  return (
    <Box sx={{ml: { sm: 32,  xs: 2 }, mr: {sm:2, xs: 2}}} >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
        <Grid item xs={12} sm={6} border={2}>
          Imagen
        </Grid>
        <Grid item xs={12} sm={6} border={2}>
          Texto
        </Grid>
      </Grid>
    </Box>
  )
}

export default basura
