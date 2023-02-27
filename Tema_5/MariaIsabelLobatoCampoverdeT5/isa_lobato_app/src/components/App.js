
import './../styles/App.css';
import NavBar from './NavBar.js';
import Cards from './Cards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar></NavBar>
       
      </header>

      <div className="card-deck">
          <Cards />
                 
        </div>
    </div>
  );
}

export default App;
