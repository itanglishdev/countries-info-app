import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import MainPage from './components/MainPage'
import Map from './components/Map'
import { useState } from 'react';

function App() {

  const [nationName, setNationName] = useState('')

  const nameHandler = (e) => {
    e.preventDefault()
    setNationName(e.target.value)
  }

  return (
    <div className='page'>
      <NavBar/>
      <Routes>
      <Route path='/' element={
      <MainPage
      nameChange={nameHandler}
      nationName={nationName}
      />} />
      <Route path='/submit' element={
      <Map
      nationName={nationName}/>} />
    </Routes>
    </div>
    
  );
}

export default App;
