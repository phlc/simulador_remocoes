import { Typography, Button, Stack, Divider, List } from '@mui/material';
import Person from './Person';

function People() {
  return (
    <>
      <Typography align={'center'} margin={1} variant={'h6'} color={'primary'}>
        Juízes Inscritos
        <Divider />
        <Stack
          margin={1}
          spacing={4}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="contained">Adicionar</Button>
          <Button variant="outlined" color="error">
            Limpar
          </Button>
        </Stack>
        <Divider />
        <List
          style={{
            height: '70vh',
            overflowY: 'scroll',
          }}
        >
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
        </List>
      </Typography>
    </>
  );
}

export default People;
