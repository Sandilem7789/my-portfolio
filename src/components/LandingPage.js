import React, { useState } from 'react';

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';
import { 
    Jumbotron,
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ButtonGroup   
 } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 library.add(fab, faCheckSquare, faCoffee);
 


const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const jumboToggle = () => setIsOpen(false)

    return (
        <Router>
            <div className="backGround">
                <div className="sm-col-12">
                    <Navbar color="dark" dark expand="md">
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink onClick={jumboToggle}>
                                        <h4 className="navigateText"><Link to="/">home</Link></h4>
                                    </NavLink>
                                </NavItem> 
                                <NavItem>
                                    <NavLink href="/about" >
                                        <Link to="/about"><h4 className="navigateText" onClick={jumboToggle}>about</h4></Link>
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
                        </Collapse>
                    </Navbar>
                </div>

                <Jumbotron className="jumboStyle" onClick={jumboToggle}>
                    <h1 className="display-4 mt-5 text-center">
                        Hello, I'm Sandile.
                    </h1>
                    <p className="jumboPara text-center">
                        I am a Front End Web Developer
                    </p>
                    <div className="text-center">
                        <ButtonGroup>
                            <Button outline>
                                <Link to="/">
                                    <span className="navigateText">home</span>
                                </Link>
                            </Button>
                            <Button outline>
                                <Link to="/about">
                                    <span className="navigateText">about</span>
                                </Link>
                            </Button>
                            <Button outline>
                                <Link to="/projects">
                                    <span className="navigateText">projects</span>
                                </Link>
                            </Button>
                            <Button outline>
                                <Link to="/contact">
                                    <span className="navigateText">contact</span>
                                </Link>
                            </Button>
                        </ButtonGroup>
                    </div>
                    

                    <div className="myFooter">
                        <p>footer text</p>
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </div>
                </Jumbotron>
            </div>
            <Switch>
                
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
            </Switch>
        </Router>
        
    )
}

export default LandingPage
