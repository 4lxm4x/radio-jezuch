import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Player() {
  const Player = () => (
    <AudioPlayer
      autoPlay
      src="https://myradio24.org/jezuch"
      onPlay={e => console.log('onPlay')}
      // other props here
    />
  );

  return (
    <>
      <h1>Радіо Єзуч</h1>
      <h2>Hehehe</h2>
      <Player />
    </>
  );
}