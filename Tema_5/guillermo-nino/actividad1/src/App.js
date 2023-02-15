import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import TarjetaEjemplo from './Contenido/Card';
import BarraNavegacion from './Navigation/Navbar';

function App() {
  return (
    <div className="App">
      <BarraNavegacion />
      <div className='d-flex p-2 justify-content-center'>
      <TarjetaEjemplo />
      </div>
    </div>
    
  );
}

export default App;
