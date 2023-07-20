import {
  Typography,
  Grid,
  Stack,
  Card,
  CardContent,
  Button,
  Divider,
} from '@mui/material';
import OptionsList from './OptionsList';
import LocationsAutoComplete from './LocationsAutoComplete';
import { useState } from 'react';

function handleAddLocation(
  selectedPerson,
  onSetSelectedPerson,
  onEditPerson,
  locationForm
) {
  if (!selectedPerson) return;
  const newLocations = [...selectedPerson.options, locationForm];
  const newPerson = { ...selectedPerson, options: newLocations };

  if (onEditPerson(selectedPerson, newPerson)) {
    onSetSelectedPerson(newPerson);
  }
}

function handleClearLocation(
  selectedPerson,
  onSetSelectedPerson,
  onEditPerson
) {
  if (!selectedPerson) return;
  const newLocations = [];
  const newPerson = { ...selectedPerson, options: newLocations };

  if (onEditPerson(selectedPerson, newPerson)) {
    onSetSelectedPerson(newPerson);
  }
}

function Options({ selectedPerson, onSetSelectedPerson, onEditPerson }) {
  const [locationForm, setLocationForm] = useState(null);

  return (
    <div>
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
              locationForm
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
          onClick={handleClearLocation(
            selectedPerson,
            onSetSelectedPerson,
            onEditPerson
          )}
        >
          Limpar
        </Button>
      </Stack>
      <Divider />
      <OptionsList
        selectedPerson={selectedPerson}
        onSetSelectedPerson={onSetSelectedPerson}
        onEditPerson={onEditPerson}
      />
    </div>
  );
}

export default Options;
