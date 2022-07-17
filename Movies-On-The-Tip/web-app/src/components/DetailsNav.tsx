import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Navigate, useNavigate } from 'react-router-dom';
import './navStyle.css'

type Props={
  closeMovie:Function
}

function DetailsNav({closeMovie}:Props) {
  const navigate=useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav fill variant="tabs"
            className="me-auto my-2 my-lg-0"
            id="navStyle"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Button variant="outline-secondary" onClick={()=> closeMovie(null)}>Back</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default DetailsNav;