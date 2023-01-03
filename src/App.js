import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="body">
      <Home />
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<SignIn />}/>
      </Routes>
    </div>
  );
}

export default App;