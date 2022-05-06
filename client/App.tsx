import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Bet from './pages/Bet';
import Home from './pages/Home';
import {Horse} from './pages/Horse';
import {Player} from './pages/Player';
import {Race} from './pages/Race';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="" element={ <Home /> } />
          <Route path="player" element={ <Player /> } />
          <Route path="bet" element={ <Bet /> } />
          <Route path="horse" element={ <Horse /> } />
          <Route path="race" element={ <Race /> } />
      </Routes>
    </div>
  );
}

export default App;
