import {ThemeProvider} from '@mui/material/styles';
import theme from './util/temaConfig';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import General from './contenedores/General';

import Inicio from './vistas/basura';
import Quiromasaje from './vistas/quiromasaje';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <General />
        <Routes>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/servicios/quiromasaje" component={Quiromasaje} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
