// import axios from 'axios';
import { useState, useEffect } from 'react';
import { getData, getCover } from 'api';

export default function Info(initialData) {
  const [streamData, setStreamData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(async function updateInfo() {
      const data = await getData();
      if (data.songtitle !== streamData.songtitle) {
        const imageUrl = await getCover(data.artist, data.songtitle);
        const fullData = {
          ...data,
          normalImg:
            imageUrl === ''
              ? require('../../images/placeholder.png')
              : imageUrl,
        };

        setStreamData(fullData);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [streamData.songtitle]);

  //   async function getData() {
  //     try {
  //       const { data } = await axios(
  //         'https://myradio24.com//users/jezuch/status.json'
  //       );

  //       // dataFromLastFM.data.track.album.image[2]['#text'],
  //       //   console.log(fullData);
  //       return data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   async function getCover(artist, songtitle) {
  //     const dataFromLastFM = await axios(
  //       `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key= f4d93b703b4b02e3b4040a313bf98512&artist=${artist}&track=${songtitle}&format=json`
  //     );

  //     const imageUrl =
  //       dataFromLastFM.data?.track?.album?.image[2]['#text'] ??
  //       require('../../images/placeholder.png');

  //     return imageUrl;
  //   }

  return (
    <div>
      <img src={streamData.normalImg} alt={streamData.songtitle} width={174} />
      <h2>{streamData.artist}</h2>
      <h3>{streamData.songtitle}</h3>
    </div>
  );
}
