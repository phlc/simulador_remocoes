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

export default function FormDialog() {
  const [open, setOpen] = useState(true);
  const [varaCascata, setVaraCascata] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
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
              />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: 14 }} color="secundary">
                Lotação
              </Typography>
              <LocationsAutoComplete />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: 14 }} color="secundary">
                Vara na Cascata
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={varaCascata}
                      onChange={(e) => setVaraCascata(e.target.checked)}
                    />
                  }
                  label={varaCascata ? 'Sim' : 'Não'}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={3}>
              <Typography sx={{ fontSize: 14 }} color="secundary">
                Antiguidade
              </Typography>
              <TextField
                style={{ width: '100%' }}
                size="small"
                id="antiguidade"
                placeholder="Antiguidade"
                variant="outlined"
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
          <Button size="small" variant="contained">
            Adicionar
          </Button>
          <Button size="small" variant="outlined" color="error">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
