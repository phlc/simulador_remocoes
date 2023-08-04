import {
  Divider,
  Typography,
  Card,
  CardContent,
  ListItem,
} from '@mui/material';

function SugestedPermutationSingle({ sugestedPermutation, children }) {
  return (
    <ListItem>
      <Card elevation={0}>
        <CardContent>
          <Typography variant="h8" component="div" color="primary">
            {`Permuta Sugerida ${sugestedPermutation.id}`}
          </Typography>
          {children}
          <Divider />
        </CardContent>
      </Card>
    </ListItem>
  );
}

export default SugestedPermutationSingle;
