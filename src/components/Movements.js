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

import useLocalStorage from './useLocalStorage';
import LocationsAutoComplete from './LocationsAutoComplete';
import MovementSingleLocation from './MovementSingleLocation';

function handleAddLocation(
  locationForm,
  setLocationForm,
  offeredLocations,
  setOfferedLocations,
  setAlertMessage
) {
  if (
    offeredLocations.reduce(
      (acc, cur) => cur.id === locationForm.id || acc,
      false
    )
  ) {
    setAlertMessage({
      message: 'Opção já incluída.',
      severity: 'error',
      open: true,
    });
    setLocationForm(null);
    return;
  }

  if (locationForm.id === 0) {
    setAlertMessage({
      message: 'Lotação "Sem Lotação" não pode ser incluída',
      severity: 'error',
      open: true,
    });
    setLocationForm(null);
    return;
  }
  setOfferedLocations((cur) => [...cur, locationForm]);
  setLocationForm(null);
}

function handleClearLocations(setLocationForm, setOfferedLocations) {
  setOfferedLocations([]);
  setLocationForm(null);
}

export default function Movements({ setAlertMessage }) {
  const [offeredLocations, setOfferedLocations] = useLocalStorage(
    'keySimuladorOfferedLocations',
    []
  );
  const [locationForm, setLocationForm] = useState(null);

  function handleDeleteLocation(id) {
    setOfferedLocations((cur) => cur.filter((item) => item.id !== id));
  }

  return (
    <Paper elevation={2} style={{ width: '100%', margin: 3 }}>
      <div>
        <Typography
          align={'center'}
          margin={1}
          variant={'h6'}
          color={'primary'}
        >
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
            onClick={() =>
              handleAddLocation(
                locationForm,
                setLocationForm,
                offeredLocations,
                setOfferedLocations,
                setAlertMessage
              )
            }
          >
            Adicionar
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="error"
            onClick={() =>
              handleClearLocations(setLocationForm, setOfferedLocations)
            }
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
          {offeredLocations.map((loc) => (
            <MovementSingleLocation
              offeredLocation={loc}
              key={loc.id}
              onDeleteLocation={handleDeleteLocation}
            />
          ))}
        </List>
      </div>
    </Paper>
  );
}
