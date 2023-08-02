import { Typography, Button, Stack, Divider, List, Paper } from '@mui/material';

function People({
  onSetSelectedPerson,
  onSetFormData,
  onOpenForm,
  onClearPeople,
  children,
}) {
  return (
    <Paper elevation={2} style={{ width: '100%', margin: 3 }}>
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
          {children}
        </List>
      </Typography>
    </Paper>
  );
}

export default People;
