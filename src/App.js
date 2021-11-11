//import { makeStyles } from '@material-ui/styles';
import {ThemeProvider} from '@mui/material/styles';
import theme from './util/temaConfig';
import Button from '@mui/material/Button'

import ContenedorNavbar from './contenedores/contenedorNavbar';
import Lista from './contenedores/contenedorLista';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContenedorNavbar />
      <Button variant="contained" color="primary">
        Botón
      </Button>
      <Lista />
    </ThemeProvider>
  );
}

export default App;
