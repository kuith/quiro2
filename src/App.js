import {ThemeProvider} from '@mui/material/styles';
import theme from './util/temaConfig';

import General from './contenedores/General';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <General />
    </ThemeProvider>
  );
}

export default App;
