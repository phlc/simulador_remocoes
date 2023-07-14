import { Typography, Button, Stack, Divider, List } from '@mui/material';
import Person from './Person';

function People({ people, onOpenForm }) {
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
          <Button size="small" variant="contained" onClick={onOpenForm}>
            Adicionar
          </Button>
          <Button size="small" variant="outlined" color="error">
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
          {people.map((person) => (
            <Person person={person} key={person.id} />
          ))}
        </List>
      </Typography>
    </>
  );
}

export default People;
