import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

export default function Banner(){

  return (
    <>
  <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand>
        <img
          alt="space ship"
          src="./tinyrocket.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Blast Off
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
  )
}