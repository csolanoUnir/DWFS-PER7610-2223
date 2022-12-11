import '../styles/App.css';
import Navbar from './navbar/Navbar';
import Card from './card/Card';

const itemsData=[{
    image:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Gentau_Pic_du_Midi_Ossau.jpg",
    tags:["Nature","Lake"],
    title:"Lago di braies",
    paragraph:"Lorem ipsum dolor sit amet, consecteur adipiscing elit. Consecteur sodales morbi dignissim sed diam pharetra vitae ipsum odio",
    buttonText:"Read more"
  },
  {
    image:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Gentau_Pic_du_Midi_Ossau.jpg",
    tags:["Snow","Cold"],
    title:"Other card",
    paragraph:"Lorem ipsum dolor sit amet, consecteur adipiscing elit. Consecteur sodales morbi dignissim sed diam pharetra vitae ipsum odio",
    buttonText:"Read more"
  }];

const cards=itemsData.map((itemData)=><Card cardData={itemData}/>);

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="cards-container">
        {cards}
      </div>
    </div>
  );
}

export default App;
