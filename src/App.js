import {ThemeProvider} from '@mui/material/styles';
import theme from './util/temaConfig';
import {Route, Routes } from "react-router-dom";

import General from './contenedores/General';

import Inicio from './vistas/inicio';
import Quiromasaje from './vistas/quiromasaje';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <General/>
        <Routes>
          <Route excat path="/" element={ <Inicio xsImage = "Pequeño" mdImage="Grande"/>} />
          <Route path="/servicios/quiromasaje" element={ <Quiromasaje />} />
        </Routes>
    </ThemeProvider>
  );
}


export default App;
