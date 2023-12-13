import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container } from 'react-bootstrap';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/dashboard">
                    <div className="col-md-8">
                        <h1 className="header-title">Recipe Repository</h1>
                        <p className="header-tagline">Join us on an adventure</p>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto mb-2 mb-lg-0">
                        <NavDropdown title="Menu" id="basic-nav-dropdown">                            
                            <NavDropdown.Item as={Link} to="/contact">News</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex d-lg-none me-2 searchbar" role="search">
                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button className={styles.searchButton} type="submit">Search</Button>
                    </Form>
                </Navbar.Collapse>

                <Form className="d-none d-lg-flex me-2" role="search">
                    <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                    <Button className={styles.searchButton} type="submit">Search</Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default NavBar;
