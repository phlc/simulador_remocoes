import { ListItem, ListItemText, Avatar, ListItemAvatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Person() {
  return (
    <ListItem
      style={{ minWidth: '300px' }}
      disableGutters
      secondaryAction={[
        <IconButton>
          <EditIcon />
        </IconButton>,
        <IconButton>
          <DeleteIcon />
        </IconButton>,
      ]}
    >
      <ListItemAvatar>
        <Avatar>999</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={'Super long string that needs to be wrapped'}
        secondary={'other text not important'}
      />
    </ListItem>
  );
}

export default Person;
