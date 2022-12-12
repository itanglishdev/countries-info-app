import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import MainPage from './components/MainPage'
import Map from './components/Map'

function App() {
  return (
    <Routes>
      <NavBar/>
      <Route path='/' element={<MainPage/>} />
      <Route path='/map' element={<Map/>} />
    </Routes>
  );
}

export default App;
