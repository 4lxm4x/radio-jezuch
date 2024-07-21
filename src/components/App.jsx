import { useEffect, useState } from 'react';
import Actions from './Actions/Actions';
import Fun from './Fun/Fun';
import Info from './Info/Info';
import Player from './Player/Player';
import { getData } from 'utils/api';
import GreetingView from './GreetingView/GreetingView';
import ScaleLoader from 'react-spinners/ScaleLoader';

export const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    async function loadData() {
      const initialData = await getData();

      setDataLoaded(true);
      setInitialData(initialData);
    }

    loadData();
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        width: '100%',
      }}
    >
      <h1 style={{ fontSize: 36 }}>Радіо Єзуч</h1>
      <Fun />
      {dataLoaded ? <Info initialData={initialData} /> : <GreetingView />}
      <Player />
      <Actions />
    </div>
  );
};
