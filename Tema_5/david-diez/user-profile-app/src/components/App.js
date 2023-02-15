import './../styles/App.css';
import Navbar from './Navbar';
import Card from './Card';

const userData = {
  img:'https://images.unsplash.com/photo-1536323760109-ca8c07450053',
  tags:['Nature', 'Lake'],
  title:'Lago di Braies',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.'
}

function App() {
  return (
    <div className="App">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
      </head>
      <Navbar></Navbar>
      <Card userData={userData}/>
    </div>
  );
}

export default App;
