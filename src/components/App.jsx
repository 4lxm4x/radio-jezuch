import { useState } from 'react';
import Playlist from './Playlist/Playlist';
// import Fun from './Fun/Fun';
import Info from './Info/Info';
import Player from './Player/Player';
import {
  BottomNavigationAction,
  BottomNavigation,
  Paper,
  Box,
} from '@mui/material';
import { FaList, FaListAlt } from 'react-icons/fa';
import { CgReorder } from 'react-icons/cg';
import { colors } from 'utils/Colors';

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box>Радіо Єзуч</Box>
      <Paper
        sx={{ boxShadow: 2 }}
        style={{
          height: '88vh',
          display: 'flex',
          // justifyContent: 'flex-start',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 40,
          color: '#010101',
          width: '90vw',
          borderRadius: 5,
          backgroundColor: colors.back,
          marginBottom: 50,
        }}
      >
        {play && <Info playlist={handlePlaylist} />}
        <Player onPlay={handlePlay} />
        {play && isPlistVisible && <Playlist playlist={playlist} />}
      </Paper>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          {!isPlistVisible && (
            <BottomNavigationAction
              label="Show Playlist"
              onClick={showPlaylist}
              sx={{ color: colors.main }}
              icon={<FaList size={'2em'} />}
            />
          )}
          {isPlistVisible && (
            <BottomNavigationAction
              label="Hide Playlist"
              onClick={hidePlaylist}
              sx={{ color: colors.main }}
              icon={<FaListAlt size={'2em'} />}
            />
          )}
          <BottomNavigationAction
            label="Order Table"
            sx={{ color: colors.main }}
            icon={<CgReorder size={'2em'} />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
