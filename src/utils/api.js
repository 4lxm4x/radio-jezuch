import axios from 'axios';

export async function getData() {
  try {
    const { data } = await axios(
      'https://myradio24.com//users/jezuch/status.json'
    );

    // dataFromLastFM.data.track.album.image[2]['#text'],
    //   console.log(fullData);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCover(artist, songtitle) {
  const dataFromLastFM = await axios(
    `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key= f4d93b703b4b02e3b4040a313bf98512&artist=${artist}&track=${songtitle}&format=json`
  );

  const imageUrl =
    dataFromLastFM.data?.track?.album?.image[2]['#text'] ??
    require('../images/jezuch logo.png');

  return imageUrl;
}
