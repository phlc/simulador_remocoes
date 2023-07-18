import { Typography, Button, Stack, Divider, List } from '@mui/material';
import Person from './Person';

function People({
  selectedPerson,
  onSetSelectedPerson,
  onSetFormData,
  people,
  onOpenForm,
  onDeletePerson,
  onClearPeople,
}) {
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
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              onSetFormData({
                locationCascade: true,
                name: '',
                id: '',
                location: null,
              });
              onSetSelectedPerson(null);
              onOpenForm();
            }}
          >
            Adicionar
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="error"
            onClick={() => {
              onSetFormData({
                locationCascade: true,
                name: '',
                id: '',
                location: null,
              });
              onSetSelectedPerson(null);
              onClearPeople();
            }}
          >
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
            <Person
              selectedPerson={selectedPerson}
              onSetSelectedPerson={onSetSelectedPerson}
              onSetFormData={onSetFormData}
              person={person}
              key={person.id}
              onDeletePerson={onDeletePerson}
              onOpenForm={onOpenForm}
            />
          ))}
        </List>
      </Typography>
    </>
  );
}

export default People;
