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

function Options() {
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
            Jose da Silva e Malcon Dias
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="secundary">
            Lotação Atual
          </Typography>
          <Typography variant="body2" color="primary">
            Vara Única de São Sebastião do Paraíso
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: 14 }} color="secundary">
                Vara na Cascata
              </Typography>
              <Typography variant="body2" color="primary">
                Sim
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: 14 }} color="secundary">
                Antiguidade
              </Typography>
              <Typography variant="body2" color="primary">
                110
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
        <LocationsAutoComplete />
        <Button size="small" variant="contained">
          Adicionar
        </Button>
        <Button size="small" variant="outlined" color="error">
          Limpar
        </Button>
      </Stack>
      <Divider />
      <OptionsList />
    </div>
  );
}

export default Options;
