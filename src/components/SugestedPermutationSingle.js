import {
  Divider,
  Typography,
  Card,
  CardContent,
  ListItem,
} from '@mui/material';

function SugestedPermutationSingle({ numPermutation, children }) {
  return (
    <ListItem>
      <Card elevation={0}>
        <CardContent>
          <Typography variant="h8" component="div" color="primary">
            {`Permuta Sugerida ${numPermutation}`}
          </Typography>
          {children}
          <Divider sx={{ minWidth: '350px' }} />
        </CardContent>
      </Card>
    </ListItem>
  );
}

export default SugestedPermutationSingle;
