import './App.css';
import Home from './components/Home'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="body">
      <Home />
      <Routes>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SignIn />}/>
      </Routes>
    </div>
  );
}

export default App;