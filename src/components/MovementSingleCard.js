import { Card, CardContent, Typography, Grid } from '@mui/material';

function MovementSingleCard() {
  return (
    <>
      <Card elevation={0}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="secundary">
            Juiz(a)
          </Typography>
          <Typography variant="body2" color="primary">
            José Malcon dos Santos Dias Trindade
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: 14 }} color="secundary">
                Origem
              </Typography>
              <Typography variant="body2" color="primary">
                Vara Única São Sebastião do Paraíso MG
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: 14 }} color="secundary">
                Destino
              </Typography>
              <Typography variant="body2" color="primary">
                Vara Única São Sebastião do Paraíso MG
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default MovementSingleCard;
