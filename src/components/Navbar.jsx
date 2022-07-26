import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import logo from '../assets/Numerator_Logo.png';

export default function Navbar() {
  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static" sx={ {backgroundColor: '#004a52' }}>
        <Toolbar sx={{ display:'flex', gap: '20px'}}>
          <img src={logo} alt="Numerator_logo" />
          <Typography variant="h5" component="div" sx={{ width: '140px'}}>
            Maestro
          </Typography>
          <Typography variant="body1" component="div" >
            Home
          </Typography>
          <Typography variant="body1" component="div" >
            Questionaires
          </Typography>
          <Typography variant="body1" component="div" >
            Sources
          </Typography>
          <Typography variant="body1" component="div" >
            Help
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}