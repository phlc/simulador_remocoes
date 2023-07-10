import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyLocationIcon from '@mui/icons-material/MyLocation';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MyLocationIcon fontSize="large" style={{ marginRight: '14px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simulador de Remoções
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
