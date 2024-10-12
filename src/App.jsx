import './App.css';
import Login from './components/Login.jsx';
import Player from './components/Player.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="center">
            <Routes>
                <Route exact path="/" element={<Login />}/>
                <Route path="/player/:name" element={<Player />} />
            </Routes>
        </div>
    );
}

export default App;
