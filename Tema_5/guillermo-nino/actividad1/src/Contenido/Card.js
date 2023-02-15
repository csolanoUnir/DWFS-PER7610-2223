import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TarjetaEjemplo() {
  return (
    <Card border='dark' bg='light' className = 'mt-4' style={{ width: '22rem' }}>
      <div className='d-flex p-3 justify-content-center'>
        <Card.Img variant="top" src="Foto_DNI.jpg" style={{width: 265, height: 350}}/>
      </div>
      <Card.Body>
        <Card.Title>
          <p className='fs-3 fw-bold text-decoration-underline'>Guillermo Niño Sánchez</p>
        </Card.Title>
        <Card.Text>
          <div className='d-flex flex-column'>
            <p className='fs-5 lh-sm fw-light mb-1'>Application Engineer bei Skyguide</p> 
            <p className='fs-6 lh-sm fw-lighter mb-1'>Zurich, Switzerland</p> 
          </div>
        </Card.Text>
        <div className='d-flex justify-content-evenly'>
            <Button variant="secondary"  className = 'btn-sm col-4' href='https://www.linkedin.com/in/guillermoninosanchez/' target='_blank'>LinkedIn</Button>
            <Button variant="secondary" className = 'btn-sm col-3' href='https://gunisa94.github.io' target='_blank'>CV</Button>
            <Button variant="secondary" className = 'btn-sm col-4' href='mailto:guillermoninosan@gmail.com' target='_blank'>Email me</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TarjetaEjemplo;