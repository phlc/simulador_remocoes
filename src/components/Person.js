import {
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  ListItemButton,
  Grid,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Person({
  selectedPerson,
  onSetSelectedPerson,
  onSetFormData,
  person,
  onDeletePerson,
  onOpenForm,
}) {
  return (
    <ListItem
      style={{ minWidth: '380px' }}
      disableGutters
      disablePadding
      secondaryAction={
        <Grid container>
          <Grid item xs={6}>
            <IconButton
              key={1}
              onClick={() => {
                onSetFormData({ ...person });
                onSetSelectedPerson(person);
                onOpenForm();
              }}
            >
              <EditIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <IconButton key={2} onClick={() => onDeletePerson(person)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      }
    >
      <ListItemButton
        selected={selectedPerson?.id === person.id}
        onClick={() => {
          onSetFormData({ ...person });
          onSetSelectedPerson(person);
        }}
      >
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'primary.main' }}>{person.id}</Avatar>
        </ListItemAvatar>
        <ListItemText
          sx={{ whiteSpace: 'normal', marginRight: 4 }}
          primary={person.name}
          secondary={`${person.location.vara} ${person.location.cidade} ${person.location.estado}`}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default Person;
