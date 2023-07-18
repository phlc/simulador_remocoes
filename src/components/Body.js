import { Box, Paper } from '@mui/material';
import People from './People';
import Options from './Options';
import Movements from './Movements';

export default function Body({
  selectedPerson,
  onSetSelectedPerson,
  onSetFormData,
  people,
  onOpenForm,
  onDeletePerson,
  onClearPeople,
}) {
  return (
    <Box
      sx={{
        margin: 0.5,
        display: 'flex',
        flexWrap: 'nowrap',
        width: '100%',
        height: 'auto',
      }}
    >
      <Paper elevation={2} style={{ width: '100%', margin: 3 }}>
        <People
          selectedPerson={selectedPerson}
          onSetSelectedPerson={onSetSelectedPerson}
          onSetFormData={onSetFormData}
          people={people}
          onOpenForm={onOpenForm}
          onDeletePerson={onDeletePerson}
          onClearPeople={onClearPeople}
        />
      </Paper>
      <Paper elevation={2} style={{ width: '100%', margin: 3 }}>
        <Options />
      </Paper>
      <Paper elevation={2} style={{ width: '100%', margin: 3 }}>
        <Movements />
      </Paper>
    </Box>
  );
}
