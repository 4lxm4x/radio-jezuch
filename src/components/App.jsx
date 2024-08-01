import { useState } from 'react';
import * as React from 'react';
import Playlist from './Playlist/Playlist';
// import Fun from './Fun/Fun';
import Info from './Info/Info';
import Player from './Player/Player';
import {
  BottomNavigationAction,
  BottomNavigation,
  Paper,
  Box,
  Modal,
  Fade,
  Tooltip,
} from '@mui/material';
import { FaList, FaListAlt } from 'react-icons/fa';
import { CgReorder } from 'react-icons/cg';
import { colors } from 'utils/Colors';

export const App = () => {
  const [play, setPlay] = useState(false);
  const [isPlistVisible, setIsPlistVisible] = useState(false);
  const [playlist, setPlaylist] = useState([]);

  function handlePlay(status) {
    setPlay(status);
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
      <Box>Радіо Поросятко</Box>
      {play && (
        <Modal
          open={isPlistVisible}
          onClose={hidePlaylist}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Fade in={isPlistVisible}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '72%',
                // bgcolor: 'background.paper',
                // border: '2px solid #000',
                boxShadow: 24,
                borderRadius: 5,
                p: 0,
                // position: 'relative',
              }}
            >
              <Playlist playlist={playlist} />
              {/* Lorem ipsum dolor sit amet consectetur. */}
            </Box>
          </Fade>
        </Modal>
      )}
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
      </Paper>

      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          {!isPlistVisible && (
            <BottomNavigationAction
              label="Show Playlist"
              disabled={!play}
              onClick={showPlaylist}
              sx={{ color: play ? colors.main : 'grey' }}
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
          <Tooltip title="underDev" arrow>
            <BottomNavigationAction
              label="Order Table"
              // disabled
              sx={{ color: 'grey' }}
              icon={<CgReorder size={'2em'} />}
            />
          </Tooltip>
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
