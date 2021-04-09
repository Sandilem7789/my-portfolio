import React, { useState } from 'react';
import { 
    Container,
    Jumbotron,
    Button,
    Col,
    Row,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Fade,
    ButtonGroup   
 } from 'reactstrap';

const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const jumboToggle = () => setIsOpen(false)

    return (
        <div>
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/"><h4>Home</h4></NavLink>
                            </NavItem> 

                            <NavItem>
                                <NavLink href="/"><h4>About Me</h4></NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink href="/"><h4>Contact Me</h4></NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <h4>Hire Me</h4>
                            </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <h4>Contract</h4>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <h4>Full-Time</h4>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText>Simple Text</NavbarText>
                    </Collapse>
                </Navbar>
            </div>

            <Jumbotron className="" onClick={jumboToggle}>
                
                <h1 className="display-3 mt-5 text-center">Hello, I'm Sandile</h1>
                <p className="jumboPara text-center">I am a Front End Web Developer</p>
                <hr className="my-5" color="white" />
                <p className="lead">
                    <Button color="primary" className="mt-0">Learn More</Button>
                </p>
                                </Jumbotron>
            <Container>
                <Row>
                    <Col>
                    
                    </Col>
                </Row>

            </Container>
        </div>
        
    )
}

export default LandingPage
