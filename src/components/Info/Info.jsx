import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Info() {
  const [streamData, setStreamData] = useState({
    artist: 'Artist',
    songtitle: 'SongTitle',
    imgbig: '',
  });

  useEffect(() => {
    const interval = setInterval(async function updateInfo() {
      const data = await getData();
      if (data.songtitle !== streamData.songtitle) {
        setStreamData(data);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [streamData.songtitle]);

  async function getData() {
    try {
      const { data } = await axios(
        'https://myradio24.com//users/jezuch/status.json'
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>{streamData.artist}</h2>
      <h3>{streamData.songtitle}</h3>
    </div>
  );
}
