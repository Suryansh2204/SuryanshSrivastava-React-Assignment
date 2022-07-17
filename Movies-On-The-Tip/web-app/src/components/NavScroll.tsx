import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navStyle.css'
import { Link } from 'react-router-dom';

type Props={
  search:string,
  setSearch:Function
}

function NavScroll({search, setSearch}:Props) {
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
            <Link to="/" className="nav-link">Movies in theaters</Link>
            <Link to="/comingsoon" className="nav-link">Coming soon</Link>
            <Link to="/topratedindian" className="nav-link">Top rated Indian</Link>
            <Link to="/topratedmovies" className="nav-link">Top rated movies</Link>
            <Link to="/favourites" className="nav-link">Favourites</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search || ""}
              onChange={(event) => setSearch(event.target.value.toLowerCase())}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavScroll;