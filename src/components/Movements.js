import {
  Typography,
  Divider,
  Card,
  CardContent,
  Button,
  Stack,
  List,
} from '@mui/material';

import LocationsAutoComplete from './LocationsAutoComplete';
import MovementSingleLocation from './MovementSingleLocation';

export default function Movements() {
  return (
    <div>
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
              Varas abertas no edital
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
          <LocationsAutoComplete />
          <Button size="small" variant="contained">
            Adicionar
          </Button>
          <Button size="small" variant="outlined" color="error">
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
          <MovementSingleLocation />
          <MovementSingleLocation />
        </List>
      </div>
    </div>
  );
}
