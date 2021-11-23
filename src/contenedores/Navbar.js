import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  }
}))

function ContenedorNavbar() {
  const clases = useStyles();
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton color="inherit" aria-label="menu" className={clases.menuButton}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* La siguiente linea hace que no oculte el toolbar lo que hy debajo. Usa la prpiedad mixins
      del estilo por defecto */}
      <div className={clases.offset} />
    </div>
  );
}

export default ContenedorNavbar;
