import React, { useState } from 'react';

import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { 
    Jumbotron,
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
    NavbarText,
    Breadcrumb,
    BreadcrumbItem
 } from 'reactstrap';

 library.add(fab, faCheckSquare, faCoffee);
 
const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const jumboToggle = () => setIsOpen(false)

    return (
        <Router>
            <div className="backGround">
                <div className="sm-col-12">
                    <Navbar color="dark" dark expand="md" fixed="top">
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink onClick={jumboToggle}>
                                        <h4 className="navigateText"><Link to="/">about</Link></h4>
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
                        <NavbarText>
                                <p className="brandName"><a href="/">Sandie Mathenjwa</a></p>
                            </NavbarText>
                    </Navbar>
                </div>
                <div>
                    <Breadcrumb tag="nav" listTag="div">
                        <BreadcrumbItem className="breadcrumb-item" tag="a" href="/">About</BreadcrumbItem>
                        <BreadcrumbItem className="breadcrumb-item" tag="a" href="/projects">Projects</BreadcrumbItem>
                        <BreadcrumbItem className="breadcrumb-item" active tag="a" href="/contact">Contact</BreadcrumbItem>
                    </Breadcrumb>
                </div>

                <Jumbotron className="jumboStyle" onClick={jumboToggle}>
                    <h1 className="display-4 mt-5 text-center hello-text">
                        Hello, I'm Sandile.
                    </h1>
                    <p className="jumboPara text-center">
                        I am a Front End Web Developer
                        <br/>
                    </p>
                    <div className="text-center social-icons">
                        <FontAwesomeIcon icon={["fab", "github"]} size="2x" color="black" />
                        <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" color="#0e76a8" />
                        <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" color="#4c68d7" />
                        <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" color="#1DA1F2"/>
                    </div>
                </Jumbotron>
            </div>
            <Switch>
                <Route exact path="/">
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
