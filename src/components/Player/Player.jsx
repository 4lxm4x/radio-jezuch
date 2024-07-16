import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import axios from 'axios';
import { computeHeadingLevel } from '@testing-library/react';

async function getData() {
  try {
    const { data } = await axios(
      'https://myradio24.com//users/jezuch/status.json'
    );
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

setTimeout(getData, 1001);

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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Радіо Єзуч</h1>

      <Player />
    </div>
  );
}
