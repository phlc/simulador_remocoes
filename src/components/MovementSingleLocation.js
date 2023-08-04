import {
  Divider,
  Typography,
  Card,
  CardContent,
  ListItem,
  Grid,
  IconButton,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

import MovementSingleCard from './MovementSingleCard';

function MovementSingleLocation({
  offeredLocation,
  onSetOfferedLocations,
  onDeleteLocation,
}) {
  return (
    <ListItem>
      <Card elevation={0}>
        <CardContent>
          <Grid container alignItems="center">
            <Grid item xs={11}>
              <Typography variant="h8" component="div" color="primary">
                {`${offeredLocation.vara} ${offeredLocation.cidade} ${offeredLocation.estado}`}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={() => onDeleteLocation(offeredLocation.id)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
          <MovementSingleCard />
          <MovementSingleCard />
          <Divider />
        </CardContent>
      </Card>
    </ListItem>
  );
}

export default MovementSingleLocation;
