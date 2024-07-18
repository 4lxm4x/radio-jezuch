import Actions from './Actions/Actions';
import Fun from './Fun/Fun';
import Info from './Info/Info';
import Player from './Player/Player';

export const App = () => {
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
      <h1>Радіо Єзуч</h1>
      <Fun />
      <Info />
      <Player />
      <Actions />
    </div>
  );
};
