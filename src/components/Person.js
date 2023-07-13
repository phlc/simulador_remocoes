import { ListItem, ListItemText, Avatar, ListItemAvatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Person() {
  return (
    <ListItem
      style={{ minWidth: '380px' }}
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
        <Avatar sx={{ bgcolor: 'primary.main' }}>999</Avatar>
      </ListItemAvatar>
      <ListItemText
        sx={{ whiteSpace: 'normal', marginRight: 3 }}
        primary={'Super long string that needs to be wrapped'}
        secondary={'other text not important'}
      />
    </ListItem>
  );
}

export default Person;
