// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import WatchList from './components/WatchList'
import {Routes,Route} from 'react-router-dom';
import WatchListContextWrapper from './context/WatchListContext';

function App() {

  return (
    <>
      <NavBar/>
      <WatchListContextWrapper>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/watchlist' element={<WatchList/>}></Route>
        </Routes>
      </WatchListContextWrapper>
    </>
  )
}

export default App;
