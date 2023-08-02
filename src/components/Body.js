import { Box } from '@mui/material';

export default function Body({ children }) {
  return (
    <Box
      sx={{
        margin: 0.5,
        display: 'flex',
        flexWrap: 'nowrap',
        width: '100%',
        height: 'auto',
      }}
    >
      {children}
    </Box>
  );
}
