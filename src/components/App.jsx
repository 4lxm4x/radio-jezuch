import { useState, useRef } from 'react';
import Actions from './Actions/Actions';
import Fun from './Fun/Fun';
import Info from './Info/Info';
import Player from './Player/Player';

// import ScaleLoader from 'react-spinners/ScaleLoader';

export const App = () => {
  const [play, setPlay] = useState();
  const firstRender = useRef(false);

  function handlePlay(status) {
    setPlay(status);
    firstRender.current = true;
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        width: '100%',
      }}
    >
      <h1 style={{ fontSize: 36 }}>Радіо Єзуч</h1>
      <Fun />
      {firstRender.current && <Info play={play} />}
      <Player onPlay={handlePlay} />
      <Actions />
    </div>
  );
};
