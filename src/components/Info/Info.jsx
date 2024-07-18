import axios from 'axios';
import { useEffect, useState } from 'react';

// const initialData = { artist: 'Artist', songtitle: 'SongTitle', imgbig: '' };

export default function Info() {
  const [streamData, setStreamData] = useState({
    artist: 'Artist',
    songtitle: 'SongTitle',
    imgbig: '',
  });
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    async function updateInfo() {
      const data = await getData();

      setStreamData(data);
      setCurrentSong({ artist: data.artist, songtitle: data.songtitle });
    }

    updateInfo();
  }, []);

  setInterval(() => {
    const newData = getData();
    console.log('🚀 ~ setInterval ~ newData:', newData);
  }, 5000);

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

  return (
    <div>
      {/* <img src={streamData.imgbig} alt={streamData.song} /> */}
      <h2>{streamData.artist}</h2>
      <h3>{streamData.songtitle}</h3>
    </div>
  );
}
