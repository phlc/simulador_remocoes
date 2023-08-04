import { Card, CardContent, Typography, Grid } from '@mui/material';

function MovementSingleCard({ person, from, to }) {
  return (
    <>
      <Card elevation={0}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="secundary">
            Juiz(a)
          </Typography>
          <Typography variant="body2" color="primary">
            {person}
          </Typography>
          <Grid container>
            <Grid item xs={5.5}>
              <Typography sx={{ fontSize: 14 }} color="secundary">
                Origem
              </Typography>
              <Typography variant="body2" color="primary">
                {from}
              </Typography>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={5.5}>
              <Typography sx={{ fontSize: 14 }} color="secundary">
                Destino
              </Typography>
              <Typography variant="body2" color="primary">
                {to}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default MovementSingleCard;
