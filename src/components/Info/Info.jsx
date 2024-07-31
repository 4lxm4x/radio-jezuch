import { useState, useEffect } from 'react';
import { getData, getCover } from 'utils/api';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Info({ playlist }) {
  const [streamData, setStreamData] = useState({ songtitle: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(async function updateInfo() {
      const data = await getData();
      console.log('🚀 ~ interval ~ data:', data);

      if (data.songtitle !== streamData.songtitle) {
        const imageUrl = await getCover(data.artist, data.songtitle);
        const fullData = {
          ...data,
          normalImg:
            imageUrl === ''
              ? require('../../images/placeholder.png')
              : imageUrl,
        };
        playlist(data.songs);

        setStreamData(fullData);
        setLoading(false);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [playlist, streamData.songtitle]);

  return (
    <Box>
      {loading ? (
        <CircularProgress />
      ) : (
        <Box maxWidth="sm">
          <img
            src={streamData.normalImg}
            alt={streamData.songtitle}
            width={174}
          />
          <h2 style={{ fontSize: 20 }}>{streamData.artist}</h2>
          <h3 style={{ fontSize: 16 }}>{streamData.songtitle}</h3>
        </Box>
      )}
    </Box>
  );
}
