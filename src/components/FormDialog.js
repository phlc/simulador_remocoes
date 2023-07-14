import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {
  Typography,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Alert,
  Link,
} from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import LocationsAutoComplete from './LocationsAutoComplete';

export default function FormDialog({ onSetPeople, onCloseForm, openForm }) {
  const [locationCascade, setlocationCascade] = useState(true);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [location, setLocation] = useState('');

  function handleAdd() {
    const person = { name, id: Number(id), location, locationCascade };
    if (onSetPeople(person)) {
      setName('');
      setId('');
      setLocation('');
      onCloseForm();
    }
  }

  return (
    <div>
      <Dialog open={openForm} onClose={onCloseForm}>
        <DialogTitle>
          <Typography align={'center'} variant={'h6'} color={'primary'}>
            Inscrever Juiz(a)
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            component="form"
            spacing={1}
            noValidate
            autoComplete="off"
            minWidth={500}
          >
            <Grid item xs={12}>
              <Typography sx={{ fontSize: 14 }} color="secundary">
                Juiz(a)
              </Typography>
              <TextField
                size="small"
                style={{ width: '100%' }}
                id="name"
                placeholder="Nome"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: 14 }} color="secundary">
                Lotação
              </Typography>
              <LocationsAutoComplete onChange={(loc) => setLocation(loc)} />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: 14 }} color="secundary">
                Vara na Cascata
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={locationCascade}
                      onChange={(e) => setlocationCascade(e.target.checked)}
                    />
                  }
                  label={locationCascade ? 'Sim' : 'Não'}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={3.5}>
              <Typography sx={{ fontSize: 14 }} color="secundary">
                Antiguidade
              </Typography>
              <TextField
                inputProps={{ min: 0 }}
                onKeyDown={(evt) =>
                  (evt.key === '-' ||
                    evt.key === 'e' ||
                    evt.key === '+' ||
                    evt.key === '.') &&
                  evt.preventDefault()
                }
                type="number"
                style={{ width: '100%' }}
                size="small"
                id="antiguidade"
                placeholder="Antiguidade"
                variant="outlined"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Alert variant="standard" severity="info">
                A antiguidade pode ser conferida em:
                <Link
                  underline="hover"
                  margin={1}
                  target="_blank"
                  rel="noreferrer"
                  href="https://portal.trf1.jus.br/Setorial/Asmag/RelatoriosAsmag/JuizesFederaisAntiguidade.php"
                >
                  Juiz Titular
                </Link>
                <Link
                  underline="hover"
                  target="_blank"
                  rel="noreferrer"
                  href="https://portal.trf1.jus.br/Setorial/Asmag/RelatoriosAsmag/JuizesFederaisSubstitutosAntiguidade.php"
                >
                  Juiz Substituto
                </Link>
              </Alert>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', margin: '4' }}>
          <Button size="small" variant="contained" onClick={handleAdd}>
            Adicionar
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="error"
            onClick={onCloseForm}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
