import '../styles/App.css';
import Navbar from './Navbar';
import Card from './Card';

const elementos=[{
  head:"Visa Master", 
  image:"https://scotiabankfiles.azureedge.net/scotiabank-colombia/scotiabank-colpatria/imagenes/tarjetas/Master_Gold_Aadvantage_600x380.png",
  tags:["Tarjeta Credito","Tarjeta Debito"],
  texto:"Información Tarjeta de Credito American Airlines",
  link:"Mas información"
  },
  {
    head:"Visa BBVA",
    image:"https://www.bbva.com.co/content/dam/public-web/colombia/new-beginning/Tarjeta-de-credito-aqua-pidela-qr-en-linea1.png.img.960.1653534303936.png",
    tags:["Libranzas"],    
    texto:"Información Tarjeta de Credito BBVA",
    link:"Mas información"
  },
  {
    head:"Visa Gold",
    image:"https://www.visa.com.co/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/gold-400x225.jpg",
    tags:["Tarjeta Credito","Tarjeta Debito","Libranzas"],    
    texto:"Información Tarjeta de Credito VISA Blue",
    link:"Mas información"
  }];

const cards=elementos.map((itemData)=><Card cardData={itemData}/>);

const App=()=>
    <div className="App">
      <Navbar/>
      <div className="body-cards">
        {cards}
      </div>
    </div>
;

export default App;
