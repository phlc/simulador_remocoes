import {
  Typography,
  Divider,
  Card,
  CardContent,
  Button,
  Stack,
  List,
  Paper,
} from '@mui/material';
import { useState } from 'react';

import LocationsAutoComplete from './LocationsAutoComplete';

export default function Movements({
  onAddLocation,
  onClearLocations,
  children,
}) {
  const [locationForm, setLocationForm] = useState(null);

  return (
    <Paper elevation={2} style={{ width: '100%', margin: 3 }}>
      <Typography align={'center'} margin={1} variant={'h6'} color={'primary'}>
        Movimentações
      </Typography>
      <Divider />
      <Card elevation={0}>
        <CardContent>
          <Typography variant="h7" component="div" color="primary">
            Varas abertas no edital:
          </Typography>
        </CardContent>
      </Card>
      <Divider />

      <Stack
        margin={1}
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <LocationsAutoComplete
          onChange={(loc) => setLocationForm(loc)}
          value={locationForm}
        />
        <Button
          size="small"
          variant="contained"
          onClick={() => onAddLocation(locationForm, setLocationForm)}
        >
          Adicionar
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="error"
          onClick={() => onClearLocations(setLocationForm)}
        >
          Limpar
        </Button>
      </Stack>
      <Divider />
      <List
        style={{
          height: '60vh',
          overflowY: 'scroll',
        }}
      >
        {children}
      </List>
    </Paper>
  );
}
