import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './ArticleList.css'


export function ArticleList(){
    return(
        <>
            <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Unboxing Art</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Courses</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Chechout</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                    Link
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Chechout</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <section id="hero">
                <Row>
                    <Col xs={2}></Col>
                    <Col xs={5}>
                    <h1>Browse our courses curated with the best artists in the industry only for you.</h1>
                    <h4>Gain access to a thriving community of artists when you take a course with us</h4>
                    </Col>
                    <Col cs={5}></Col>
                </Row>    
            </section>
            <Container id='body'>
                <Row>
                    <Col >
                    <img src='https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Content-Writing-Blogging-Website-1-300x300.png' alt=""/>
                    <p>unboxing Content Creation</p>
                    </Col>
                    <Col>
                    <img src='https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Content-Writing-Blogging-Website-1-300x300.png' alt=''/>
                    <p>Unboxing Content Writing and Blogging</p>
                    </Col>
                    <Col>
                    <img src='https://www.unboxingart.in/wp-content/uploads/2021/09/Creative-Writing-300x300.png' alt=''/>
                    <p>Unboxing Creative Writing(2 Weeks)</p>
                    </Col>
                </Row>
            </Container>
            
          
            </>
    )
}