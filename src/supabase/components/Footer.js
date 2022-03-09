import { Typography, Stack } from '@mui/material';

function Footer() {
  return (
    <div
      style={{
        width: '100%',
        background: '#181818',
        textAlign: 'center',
        pt: '1rem',
        pb: '1rem',
        mt: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        spacing={1}
      >
        <Typography
          sx={{
            color: '#8b5cf6',
            fontSize: '0.9rem',
            textAlign: 'center',
          }}
          variant="subtitle3"
        >
          Made with
        </Typography>
        <Typography
          sx={{
            color: '#8b5cf6',
            fontSize: '0.9rem',
            textAlign: 'center',
          }}
          variant="subtitle3"
        >
          ♥️
        </Typography>
        <Typography
          sx={{
            color: '#8b5cf6',
            fontSize: '0.9rem',
            textAlign: 'center',
          }}
          variant="subtitle3"
        >
          &
        </Typography>
        <Typography
          sx={{
            color: '#8b5cf6',
            fontSize: '0.9rem',
            textAlign: 'center',
          }}
          variant="subtitle3"
        >
          ☕
        </Typography>
        <Typography
          sx={{
            color: '#8b5cf6',
            fontSize: '0.9rem',
            textAlign: 'center',
          }}
          variant="subtitle3"
        >
          in Palo Alto.
        </Typography>
      </Stack>
    </div>
  );
}

export default Footer;
