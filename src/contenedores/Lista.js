import React from 'react';
import { useNavigate } from "react-router";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListItemButton
} from '@mui/material';
//import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import HomeIcon from '@mui/icons-material/Home'; //inicio
import SpaIcon from '@mui/icons-material/Spa'; //servicios
import AccessibilityIcon from '@mui/icons-material/Accessibility'; //quiromasaje
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'; //osteopatia
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'; //presoterapia
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi'; //deportivo
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'; //dietetico
import EuroIcon from '@mui/icons-material/Euro'; //bonos
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart'; //laser: 
import NoAccountsIcon from '@mui/icons-material/NoAccounts'; //tatoo
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'; //contacto

function ContenedorLista() {

  let navigate = useNavigate()

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
    <div>
      <List component='nav'>
          <ListItem button onClick= {() => navigate("/")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Inicio'/>
          </ListItem>

        <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <SpaIcon />
        </ListItemIcon>
        <ListItemText primary="Servicios" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          

          <ListItemButton sx={{ pl: 4 }} button  
            onClick= {() => navigate("/servicios/quiromasaje")}
          >
            <ListItemIcon>
              <AccessibilityIcon />
            </ListItemIcon>
            <ListItemText primary="Quiromasaje" />
          </ListItemButton>


          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <AccessibilityNewIcon />
            </ListItemIcon>
            <ListItemText primary="Osteopat??a" />
          </ListItemButton>



          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SelfImprovementIcon />
            </ListItemIcon>
            <ListItemText primary="Presoterapia" />
          </ListItemButton>



          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SportsKabaddiIcon />
            </ListItemIcon>
            <ListItemText primary="As. Deportivo" />
          </ListItemButton>



          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <RestaurantMenuIcon />
            </ListItemIcon>
            <ListItemText primary="As. Diet??tico" />
          </ListItemButton>



          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <EuroIcon />
            </ListItemIcon>
            <ListItemText primary="Bonos" />
          </ListItemButton>



          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StackedLineChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reg. facial laser" />
          </ListItemButton>



          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NoAccountsIcon />
            </ListItemIcon>
            <ListItemText primary="Eliminaci??n tatuajes" />
          </ListItemButton>

        </List>
      </Collapse>


        <ListItem button>
          <ListItemIcon>
              <AddLocationAltIcon />
          </ListItemIcon>
          <ListItemText primary='Contacto'/>
        </ListItem>


      </List>
    </div>
  );
}

export default ContenedorLista;
