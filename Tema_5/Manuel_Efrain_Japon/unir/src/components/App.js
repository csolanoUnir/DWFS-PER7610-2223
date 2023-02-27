import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar/Navbar';
import Card from './card/Card';

function App() {
  return (    
    <div className="container">
        <Navbar></Navbar>

        <div className="card-deck">
          <Card />
          <Card />
          
        </div>
      
    </div>
  );
}

export default App;
