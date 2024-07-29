import AudioPlayer from 'react-h5-audio-player';
import { Box } from '@mui/material';
import { FaPlay, FaPause } from 'react-icons/fa';

import 'react-h5-audio-player/lib/styles.css';
// import { display } from '@mui/system';

export default function Player({ onPlay, status }) {
  return (
    <Box>
      <AudioPlayer
        style={{ boxShadow: 'none' }}
        autoPlay={status}
        src="https://myradio24.org/jezuch"
        customVolumeControls={[]}
        customIcons={{ play: <FaPlay />, pause: <FaPause /> }}
        onPlay={() => {
          onPlay(true);
          console.log('onPlay');
        }}
        onPause={() => {
          onPlay(false);
          console.log('onPause');
        }}
        showJumpControls={false}
        customProgressBarSection={['']}
        customAdditionalControls={['']}
      />
    </Box>
  );
}
