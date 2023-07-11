import {
  Divider,
  Typography,
  Card,
  CardContent,
  ListItem,
} from '@mui/material';

import MovementSingleCard from './MovementSingleCard';

function MovementSingleLocation() {
  return (
    <ListItem>
      <Card elevation={0}>
        <CardContent>
          <Typography variant="h8" component="div" color="primary">
            Vara Única São Sebastião do Paraíso MG
          </Typography>
          <MovementSingleCard />
          <MovementSingleCard />
          <Divider />
        </CardContent>
      </Card>
    </ListItem>
  );
}

export default MovementSingleLocation;
