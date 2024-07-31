import { useState } from 'react';
import Playlist from './Playlist/Playlist';
import Fun from './Fun/Fun';
import Info from './Info/Info';
import Player from './Player/Player';
import { BottomNavigationAction, BottomNavigation, Paper } from '@mui/material';
import { FaList } from 'react-icons/fa';
import { CgReorder } from 'react-icons/cg';

// import ScaleLoader from 'react-spinners/ScaleLoader';

export const App = () => {
  const [play, setPlay] = useState(false);
  const [isPlistVisible, setIsPlistVisible] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  // const firstRender = useRef(false);

  function handlePlay(status) {
    setPlay(status);
    // firstRender.current = true;
  }
  function showPlaylist() {
    setIsPlistVisible(true);
  }
  function hidePlaylist() {
    setIsPlistVisible(false);
  }

  function handlePlaylist(e) {
    setPlaylist(e);
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
      {play && <Info playlist={handlePlaylist} />}
      <Player onPlay={handlePlay} />
      {play && isPlistVisible && <Playlist playlist={playlist} />}
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          {!isPlistVisible && (
            <BottomNavigationAction
              label="Show Playlist"
              onClick={showPlaylist}
              icon={<FaList size={'2em'} />}
            />
          )}
          {isPlistVisible && (
            <BottomNavigationAction
              label="Hide Playlist"
              onClick={hidePlaylist}
              icon={<FaList size={'2em'} />}
            />
          )}
          <BottomNavigationAction
            label="Order Table"
            icon={<CgReorder size={'2em'} />}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
};
