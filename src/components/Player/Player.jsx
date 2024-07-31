import AudioPlayer from 'react-h5-audio-player';
import { Box } from '@mui/material';
import { FaPlay, FaPause } from 'react-icons/fa';
import { colors } from 'utils/Colors';

import 'react-h5-audio-player/lib/styles.css';
// import { display } from '@mui/system';

export default function Player({ onPlay, status }) {
  return (
    <Box>
      <AudioPlayer
        style={{ boxShadow: 'none', backgroundColor: colors.back }}
        autoPlay={status}
        src="https://myradio24.org/jezuch"
        customVolumeControls={[]}
        customIcons={{
          play: <FaPlay color={colors.main} />,
          pause: <FaPause color={colors.main} />,
        }}
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
