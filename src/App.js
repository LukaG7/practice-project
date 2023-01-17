import './App.css';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="body">
      <NavBar />
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<SignIn />}/>
      </Routes>
    </div>
  );
}

export default App;