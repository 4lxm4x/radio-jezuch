import axios from 'axios';
import { useState } from 'react';

export default function Info() {
  const [streamData, setStreamData] = useState({
    artist: 'Artist',
    songtitle: 'SongTitle',
    imgbig: '',
  });

  async function getData() {
    try {
      const { data } = await axios(
        'https://myradio24.com//users/jezuch/status.json'
      );
      //   console.log(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  //   setInterval(() => {
  //     getData();
  //   }, 5000);

  setTimeout(async () => {
    const data = await getData();

    setStreamData(data);
    return streamData;
  }, 1001);

  return (
    <div>
      {/* <img src={streamData.imgbig} alt={streamData.song} /> */}
      <h2>{streamData.artist}</h2>
      <h3>{streamData.songtitle}</h3>
    </div>
  );
}
