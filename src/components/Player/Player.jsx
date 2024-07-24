// import AudioPlayer from 'react-h5-audio-player';
import { Box } from '@mui/material';
import 'react-h5-audio-player/lib/styles.css';

export default function Player({ onPlay, status }) {
  const Player = () => (
    // <AudioPlayer
    //   autoPlay
    //   src="https://myradio24.org/jezuch"
    //   onPlay={() => {
    //     onPlay(true);
    //     console.log('onPlay');
    //   }}
    //   onPause={() => {
    //     // onPlay(false);
    //     console.log('onPause');
    //   }}
    //   showJumpControls={false}
    //   customProgressBarSection={['']}
    //   customAdditionalControls={['']}
    // />

    <audio
      autoPlay={status}
      controls
      src="https://myradio24.org/jezuch"
      onPlay={() => {
        onPlay(true);
        console.log('onPlay');
      }}
      onPause={() => {
        onPlay(false);
        console.log('onPause');
      }}
    ></audio>
  );

  return (
    <Box
    // style={{
    //   display: 'flex',

    //   width: '80%',
    //   maxWidth: '400px',
    // }}
    >
      <Player />
    </Box>
  );
}
