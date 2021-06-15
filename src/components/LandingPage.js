import React, { useState } from 'react';

import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Bounce from "react-reveal/Bounce";


import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBorderNone, faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
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
    /*Breadcrumb,
    BreadcrumbItem*/
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
                        <Collapse isOpen={isOpen} navbar >
                            <Nav className="mr-auto" navbar style={{textDecoration: "none"}}>
                                <NavItem>
                                    <NavLink onClick={jumboToggle}>
                                        <h4 className="navigateText" ><Link to="/">about</Link></h4>
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
                                        <a  
                                            className="navigateText"
                                            href="mailto:sandilem_1@live.com"
                                            style={{color: "black", textDecoration: "none"}}
                                        >
                                            <DropdownItem >
                                                as a freelancer
                                            </DropdownItem>
                                        </a>
                                        <a  
                                            className="navigateText"
                                            href="mailto:sandilem_1@live.com"
                                            style={{color: "black", textDecoration: "none"}}
                                        >
                                            <DropdownItem style={{color: "black", textDecoration: "none"}}>
                                                as an employee
                                            </DropdownItem>
                                        </a>
                                        
                                        {/*<DropdownItem divider />*/}
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                            
                        </Collapse>
                        <NavbarText>
                                <p className="brandName"><a href="/">Sandile Mathenjwa</a></p>
                            </NavbarText>
                    </Navbar>
                </div>
                {/*<div>
                    <Breadcrumb tag="nav" listTag="div">
                        <BreadcrumbItem className="breadcrumb-item" tag="a" href="/">About</BreadcrumbItem>
                        <BreadcrumbItem className="breadcrumb-item" tag="a" href="/projects">Projects</BreadcrumbItem>
                        <BreadcrumbItem className="breadcrumb-item" active tag="a" href="/contact">Contact</BreadcrumbItem>
                    </Breadcrumb>
                </div>*/}

                <Jumbotron className="jumboStyle" onClick={jumboToggle}>
                        <Bounce right cascade>
                            <h1 className="display-5 mt-5 text-center hello-text" style={{fontSize: "10vh"}}>
                                <div>
                                    Hello,I'm Sandile.
                                </div>
                            </h1>
                        </Bounce>
                    <p className="jumboPara text-center">
                        I am a Front End Web Developer
                        <br/>
                    </p>
                    <div className="text-center social-icons">
                        <a href="https://github.com/Sandilem7789" className="contactIcon">
                            <FontAwesomeIcon icon={["fab", "github"]} size="2x" color="#4078c0" />
                            <div className="iconText">
                                GitHub
                            </div>
                        </a>
                        <a href="https://www.instagram.com/tgsandile/" className="contactIcon">
                            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" color="#4c68d7" />
                            <div className="iconText">
                                Instagram
                            </div>
                        </a>
                        <a href="https://www.twitter.com/thegreatsandile" className="contactIcon">
                            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" color="#1DA1F2"/>
                            <div className="iconText">
                                Twitter
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/sandile-mathenjwa-869140144/" className="contactIcon">
                            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" color="#0e76a8" />
                            <div className="iconText">
                                LinkedIn
                            </div>
                        </a>
                        
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
                    <div className="pb-3"></div>
                </Route>
            </Switch>
        </Router>
    )
}

export default LandingPage
