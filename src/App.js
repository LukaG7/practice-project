import './App.css';
import Home from './components/Home'
import SignUp from './components/SignUp';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="body">
      <Home />
      <Routes>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;