import './App.css';
import { Canvas } from '@react-three/fiber'
import Orbit from './Helpers/Orbit'
import Axes from './Helpers/Axes';

function App() {
  return (
    <div className="App">
      <Canvas
        style={{background: 'orange'}} 
        camera={{position: [-6,5,0]}}
        shadows
      >
        <Axes />
        <Orbit />
      </Canvas>
    </div>
  );
}

export default App;
