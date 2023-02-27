import logo from '../logo.svg';
import {  Router,  Routes, Route } from 'react-router-dom';
  
import '../styles/App.css';// Con ../ me devuelvo un directorio hacia atras

import Navbar from "./Navbar";
import Dogs from "./Dogs"
import Inicio from "./Inicio"
import Cats from "./Cats"
import Sheeps from "./Sheeps"

function App() {

  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path='/'  element={<Inicio />}/>
        <Route path='/Cats' element={<Cats />} />
        <Route path='/Dogs' element={<Dogs />} />
        <Route path='/Dogs' element={<Sheeps />} />
      </Routes>
    </>
  );
}

export default App;
