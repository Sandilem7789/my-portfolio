import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
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
        <div className="backGround">
            <div className="sm-col-12">
                <Navbar color="dark" dark expand="md">
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Router>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/" onClick={jumboToggle}>
                                        <h4 className="navigateText"><Link to="/">home</Link></h4>
                                    </NavLink>
                                </NavItem> 
                                <NavItem>
                                    <NavLink href="/" onClick={jumboToggle}>
                                        <h4 className="navigateText"><Link to="/about">about</Link></h4>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/" onClick={jumboToggle}>
                                        <h4 className="navigateText"><Link to="/projects">projects</Link></h4>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/" onClick={jumboToggle}>
                                        <h4 className="navigateText"><Link to="contact">contact</Link></h4>
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                        <h4 className="navigateText"><Link>hire me</Link></h4>
                                    </DropdownToggle>
                                    <DropdownMenu left dark>
                                        <DropdownItem >
                                            <h4 className="navigateText">as a freelancer</h4>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <h4 className="navigateText">full-time employee</h4>
                                        </DropdownItem>
                                        {/*<DropdownItem divider />*/}
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Router>
                    </Collapse>
                </Navbar>
            </div>

            <Jumbotron className="jumboStyle" onClick={jumboToggle}>
                
                <h1 className="display-3 mt-5 text-center">
                    Hello, I'm Sandile.
                </h1>
                <p className="jumboPara text-center">
                    I am a Front End Web Developer
                </p>
                <div className="text-center">
                    <ButtonGroup>
                        <Button outline><span className="navigateText">home</span></Button>
                        <Button outline><span className="navigateText">about</span></Button>
                        <Button outline><span className="navigateText">projects</span></Button>
                        <Button outline><span className="navigateText">contact</span></Button>
                    </ButtonGroup>
                </div>
                <div className="myFooter">
                    <p>footer text</p>
                </div>
            </Jumbotron>
        </div>
    )
}

export default LandingPage
