import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import MainPage from './components/MainPage'
import Map from './components/Map'
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/map' element={<Map/>} />
    </Routes>
    </Fragment>
    
  );
}

export default App;
