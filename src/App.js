import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import MainPage from './components/MainPage'
import Map from './components/Map'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/submit' element={<Map/>} />
    </Routes>
    </div>
    
  );
}

export default App;
