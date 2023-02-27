import React from 'react';
import './../styles/App.css';
import {Card} from './FilmCard';
import {Navbar} from './Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <div className='content'>
        <Card filmId = "avatar2" name = "Avatar 2" dotNumber = "5"/>
      </div>
    </div>
  );
}

export default App;
