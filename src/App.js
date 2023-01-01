import './App.css';
import Home from './components/Home'
import Signup from './components/Signup';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="body">
      <Home />
      <Routes>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;