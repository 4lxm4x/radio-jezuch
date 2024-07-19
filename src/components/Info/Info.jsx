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
      const dataFromLastFM = await axios(
        `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key= f4d93b703b4b02e3b4040a313bf98512&artist=${data.artist}&track=${data.songtitle}&format=json`
      );
      console.log(dataFromLastFM);
      // let images = {};
      // dataFromLastFM.data.track.album.image.reduce()

      const fullData = {
        ...data,
        normalImg: dataFromLastFM.data.track
          ? dataFromLastFM.data.track.album.image[2]['#text']
          : require('../../images/placeholder.png'),
      };

      // dataFromLastFM.data.track.album.image[2]['#text'],
      console.log(fullData);
      return fullData;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <img src={streamData.normalImg} alt={streamData.songtitle} />
      <h2>{streamData.artist}</h2>
      <h3>{streamData.songtitle}</h3>
    </div>
  );
}
