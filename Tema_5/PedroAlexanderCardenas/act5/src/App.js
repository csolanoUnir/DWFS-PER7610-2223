import logo from './logo.svg';
import './App.css';
import CardInformation from './components/Card';
import NavBarCustomized from './components/Navbar';

function App() {
  return (
    <>
     <div>
      <NavBarCustomized/>
    </div>
    <div>
      <CardInformation/>
    </div>
    </>
  );
}

export default App;
