import axios from 'axios';
import { useEffect, useState } from 'react';

// const initialData = { artist: 'Artist', songtitle: 'SongTitle', imgbig: '' };

export default function Info() {
  const [streamData, setStreamData] = useState({
    artist: 'Artist',
    songtitle: 'SongTitle',
    imgbig: '',
  });

  useEffect(() => {
    async function updateInfo() {
      const data = await getData();
      // setStreamData(data);
      console.log(streamData.artist);
      console.log(streamData.songtitle);
      if (
        data.artist !== streamData.artist ||
        data.songtitle !== streamData.songtitle
      ) {
        setStreamData(data);
      }
    }

    setInterval(updateInfo, 5000);
  }, [streamData.artist, streamData.songtitle]);

  async function getData() {
    try {
      const { data } = await axios(
        'https://myradio24.com//users/jezuch/status.json'
      );
      console.log(data);
      // const { artist, songtitle, imgbig } = data;
      // setStreamData({ artist, songtitle, imgbig });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  // setTimeout(async () => {
  //   const data = await getData();

  //   setStreamData(data);
  //   return streamData;
  // }, 1001);

  return (
    <div>
      {/* <img src={streamData.imgbig} alt={streamData.song} /> */}
      <h2>{streamData.artist}</h2>
      <h3>{streamData.songtitle}</h3>
    </div>
  );
}
