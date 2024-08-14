import logo from './logo.svg';
import './App.css';
import GameComponent from './components/GameComponent';
import usePhaser from './components/usePhaser';
import Button from '@mui/material/Button';

function App() {
  const { callMethod } = usePhaser();

  return (
    <div >
    <h1>My Phaser Game with React and Material UI</h1>
    <Button variant="contained" color="primary" onClick={callMethod}>
      Call Phaser Method
    </Button>
    <GameComponent />
  </div>
  );
}

export default App;
