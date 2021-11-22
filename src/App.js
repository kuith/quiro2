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
          <Route path="/" element={ <Inicio  cosa="cosa"/>} />
          <Route path="/servicios/quiromasaje" element={ <Quiromasaje />} />
        </Routes>
    </ThemeProvider>
  );
}


export default App;
