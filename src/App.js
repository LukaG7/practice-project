import './App.css';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="body">
      <NavBar />
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;