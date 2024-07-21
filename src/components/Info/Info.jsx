import { useState, useEffect } from 'react';
import { getData, getCover } from 'utils/api';

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

  return (
    <div>
      <img src={streamData.normalImg} alt={streamData.songtitle} width={174} />
      <h2 style={{ fontSize: 20 }}>{streamData.artist}</h2>
      <h3 style={{ fontSize: 16 }}>{streamData.songtitle}</h3>
    </div>
  );
}
