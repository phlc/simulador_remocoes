import * as React from 'react';
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

export default function FormDialog({
  selectedPerson,
  onSetSelectedPerson,
  formData,
  onSetFormData,
  onSetPerson,
  onEditPerson,
  onCloseForm,
  openForm,
}) {
  function handleAdd() {
    const newPerson = {
      ...formData,
      options: [],
    };

    if (selectedPerson) {
      if (
        onEditPerson(selectedPerson, {
          ...newPerson,
          options: selectedPerson.options,
        })
      ) {
        onSetFormData({
          locationCascade: true,
          name: '',
          id: '',
          location: null,
        });
        onSetSelectedPerson(null);
        onCloseForm();
      }
    } else if (onSetPerson(newPerson)) {
      onSetFormData({
        locationCascade: true,
        name: '',
        id: '',
        location: null,
      });
      onSetSelectedPerson(null);
      onCloseForm();
    }
  }

  function handleCancel() {
    onSetFormData({ locationCascade: true, name: '', id: '', location: null });
    onSetSelectedPerson(null);
    onCloseForm();
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
                value={formData.name}
                onChange={(e) =>
                  onSetFormData({ ...formData, name: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: 14 }} color="secundary">
                Lotação
              </Typography>
              <LocationsAutoComplete
                onChange={(loc) =>
                  onSetFormData({ ...formData, location: loc })
                }
                value={formData.location}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: 14 }} color="secundary">
                Vara na Cascata
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.locationCascade}
                      onChange={(e) =>
                        onSetFormData({
                          ...formData,
                          locationCascade: e.target.checked,
                        })
                      }
                    />
                  }
                  label={formData.locationCascade ? 'Sim' : 'Não'}
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
                value={formData.id}
                onChange={(e) =>
                  onSetFormData({ ...formData, id: e.target.value })
                }
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
            onClick={handleCancel}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
