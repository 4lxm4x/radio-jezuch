import { Typography } from '@mui/material';

export default function Song(e) {
  console.log(e.data);
  return (
    <Typography style={{ display: 'flex', flexWrap: 'wrap', fontSize: '12px' }}>
      {e.data.song}
    </Typography>
  );
}
