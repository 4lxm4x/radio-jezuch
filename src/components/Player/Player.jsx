import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Player({ onPlay }) {
  const Player = () => (
    <AudioPlayer
      autoPlay
      src="https://myradio24.org/jezuch"
      onPlay={() => {
        onPlay(true);
        console.log('onPlay');
      }}
      onPause={() => {
        console.log('onPause');
      }}
      showJumpControls={false}
      customProgressBarSection={['']}
      customAdditionalControls={['']}
    />
  );

  return (
    <div
      style={{
        display: 'flex',

        width: '80%',
        maxWidth: '400px',
      }}
    >
      <Player />
    </div>
  );
}
