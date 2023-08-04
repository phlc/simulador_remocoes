import {
  Typography,
  Grid,
  Stack,
  Card,
  CardContent,
  Button,
  Divider,
  Paper,
} from '@mui/material';
import LocationsAutoComplete from './LocationsAutoComplete';
import { useEffect, useState } from 'react';

function handleAddLocation(
  selectedPerson,
  onSetSelectedPerson,
  onEditPerson,
  locationForm,
  setAlertMessage,
  setLocationForm
) {
  if (!selectedPerson || !locationForm) return;
  if (
    selectedPerson.options.filter((loc) => loc.id === locationForm.id).length >
    0
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
  const newLocations = [...selectedPerson.options, locationForm];
  const newPerson = { ...selectedPerson, options: newLocations };

  if (onEditPerson(selectedPerson, newPerson)) {
    onSetSelectedPerson(newPerson);
    setLocationForm(null);
  }
}

function handleClearLocation(
  selectedPerson,
  onSetSelectedPerson,
  onEditPerson,
  setLocationForm
) {
  if (!selectedPerson) return;
  const newLocations = [];
  const newPerson = { ...selectedPerson, options: newLocations };

  if (onEditPerson(selectedPerson, newPerson)) {
    onSetSelectedPerson(newPerson);
    setLocationForm(null);
  }
}

function Options({
  selectedPerson,
  onSetSelectedPerson,
  onEditPerson,
  setAlertMessage,
  children,
}) {
  const [locationForm, setLocationForm] = useState(null);

  useEffect(() => setLocationForm(null), [selectedPerson]);

  return (
    <Paper elevation={2} style={{ width: '100%', margin: 3 }}>
      <Typography align={'center'} margin={1} variant={'h6'} color={'primary'}>
        Opções
      </Typography>
      <Divider />
      <Card elevation={0}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="secundary">
            Juiz(a)
          </Typography>
          <Typography variant="h7" component="div" color="primary">
            {selectedPerson?.name || 'Nome'}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="secundary">
            Lotação Atual
          </Typography>
          <Typography variant="body2" color="primary">
            {selectedPerson
              ? `${selectedPerson.location.vara} ${selectedPerson.location.cidade} ${selectedPerson.location.estado}`
              : 'Localização'}
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: 14 }} color="secundary">
                Vara na Cascata
              </Typography>
              <Typography variant="body2" color="primary">
                {selectedPerson?.locationCascade ? 'Sim' : 'Não'}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: 14 }} color="secundary">
                Antiguidade
              </Typography>
              <Typography variant="body2" color="primary">
                {selectedPerson?.id || 'Antiguidade'}
              </Typography>
            </Grid>
          </Grid>
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
          disabled={!selectedPerson}
        />
        <Button
          size="small"
          variant="contained"
          disabled={!selectedPerson}
          onClick={() =>
            handleAddLocation(
              selectedPerson,
              onSetSelectedPerson,
              onEditPerson,
              locationForm,
              setAlertMessage,
              setLocationForm
            )
          }
        >
          Adicionar
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="error"
          disabled={!selectedPerson}
          onClick={() =>
            handleClearLocation(
              selectedPerson,
              onSetSelectedPerson,
              onEditPerson,
              setLocationForm
            )
          }
        >
          Limpar
        </Button>
      </Stack>
      <Divider />
      {children}
    </Paper>
  );
}

export default Options;
