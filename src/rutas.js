import { Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';

import Inicio from './vistas/basura';
import Quiromasaje from './vistas/quiromasaje';


function Rutas() {
  return(
    <Box>
      <Routes>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/servicios/quiromasaje" component={Quiromasaje} />
      </Routes>
    </Box>
  )
}

export default Rutas;


