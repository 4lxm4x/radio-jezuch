import { Typography } from '@mui/material';

export default function Song(e) {
  console.log(e.data);
  return (
    <Typography
      style={{
        // display: 'flex',
        // flexWrap: 'wrap',
        fontSize: '12px',
        height: '100%',
        textWrap: 'wrap',
        width: '55vw',
      }}
    >
      {e.data.song}
    </Typography>
  );
}
