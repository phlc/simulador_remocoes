import {
  AppBar,
  Button,
  Box,
  Toolbar,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
} from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export default function Header({ autoRemove, setAutoRemove, onMove }) {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: 'auto',
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <MyLocationIcon fontSize="large" style={{ marginRight: '14px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simulador de Remoções
          </Typography>
          <Button
            disabled={autoRemove}
            variant="text"
            sx={{ marginRight: 1 }}
            color="inherit"
            onClick={onMove}
          >
            <AutorenewIcon sx={{ marginRight: 0.5 }} />
            Remover
          </Button>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="end"
              control={
                <Switch
                  checked={autoRemove}
                  onChange={(e) => setAutoRemove(e.target.checked)}
                  color="secondary"
                />
              }
              label={
                <Typography
                  sx={!autoRemove && { color: 'text.disabled' }}
                  variant="button"
                >
                  LIVE
                </Typography>
              }
              labelPlacement="end"
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
