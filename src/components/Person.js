import { ListItem, ListItemText, Avatar, ListItemAvatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Person({ person }) {
  return (
    <ListItem
      style={{ minWidth: '380px' }}
      disableGutters
      secondaryAction={[
        <IconButton key={1}>
          <EditIcon />
        </IconButton>,
        <IconButton key={2}>
          <DeleteIcon />
        </IconButton>,
      ]}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'primary.main' }}>{person.id}</Avatar>
      </ListItemAvatar>
      <ListItemText
        sx={{ whiteSpace: 'normal', marginRight: 3 }}
        primary={person.name}
        secondary={`${person.location.vara} ${person.location.cidade} ${person.location.estado}`}
      />
    </ListItem>
  );
}

export default Person;
