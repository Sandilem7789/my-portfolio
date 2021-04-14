import React, { useState } from 'react'
import { Button, Fade } from "reactstrap";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Projects from "./Projects";

library.add(fab, faCheckSquare, faCoffee);

const ToolsIcons = () => {
    return (
        <div className="row">
            <div className="col-md-1 col-3 offset-md-1">
                <FontAwesomeIcon icon={["fab", "js-square"]} size="3x" color="#f0db4f"/>
            </div>
            <div className="col-md-1 col-3">
                <FontAwesomeIcon icon={["fab", "css3"]} size="3x" color="#264de4"/>
            </div>
            <div className="col-md-1 col-3">
                <FontAwesomeIcon icon={["fab", "html5"]} size="3x" color=" #f06529"/>
            </div>
            <div className="col-md-1 col-3">
                <FontAwesomeIcon icon={["fab", "react"]} size="3x" color="#61DBFB"/>
            </div>
            <div className="col-md-1 col-3">
                <FontAwesomeIcon icon={["fab", "bootstrap"]} size="3x" color="#563d7c"/>
            </div>
            <div className="col-md-1 col-3">
                <FontAwesomeIcon icon={["fab", "node"]} size="3x" color="#68A063"/>
            </div>
            <div className="col-md-1 col-3">
                <FontAwesomeIcon icon={["fab", "npm"]} size="3x" color="#CC3534"/>
            </div>
            <div className="col-md-1 col-3">
                <FontAwesomeIcon icon={["fab", "yarn"]} size="3x" color="#e8dace"/>
            </div>
            <div className="col-md-1 col-3">
                <FontAwesomeIcon icon={["fab", "github"]} size="3x" color="#4078c0"/>{" "}
            </div>
            <div className="col-md-1 col-3">
                <FontAwesomeIcon icon={["fab", "git-square"]} size="3x" color="#f34f29"/>{" "}
            </div>

        </div>
    )
}

const Home = () => {

    const [fadeIn, setFadeIn] = useState(false);
    const toggle = () => {
        setFadeIn(!fadeIn);
        setPfFadeIn(false);
    }

    const [pfFadeIn, setPfFadeIn] = useState(false);
    const pfToggle = () => setPfFadeIn(!pfFadeIn); 

    return (
        <div className=" text-center">
            <p className="aboutText">
                <div className="container">
                    <div >
                        Hi there my name is Sandile Mathenjwa, I build user interfaces of web apps and websites.
                        <br/>
                        <br/>
                        In my builds I mainly use the JavaScript Stack: HTML, CSS, vanilla JavaScript, React.js, Bootstrap,
                        Node.js, Express.js, SCSS, Gulp, npm, and a little bit of PHP and MySQL.
                        <br/>
                        <ToolsIcons />
                        <hr/>
                        
                        <Button color="primary" onClick={toggle} outline>More About Me</Button>
                        <Fade in={fadeIn} hidden={!fadeIn} className="mt-3">
                            My services are available for businesses looking for websites/web apps, and also for 
                            employers looking to add a valuable member on their development team
                            <br/><br/>
                            Feel free to contact me via <a href="mailto:sandilem_1@live.com">email</a> if you want get in touch. <br/>
                            
                            <a href="mailto:sandilem_1@live.com">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" color="#1DA1F2"/>
                            </a>
                            <br/>

                            <Button 
                                color="primary" 
                                onClick={pfToggle} 
                                hidden={pfFadeIn && fadeIn} 
                                outline
                                className="mt-3"
                            >
                                View Projects that I have built
                            </Button>
                        </Fade>
                    </div>
                </div>
                <Fade in={pfFadeIn} hidden={!pfFadeIn} className="mt-3">
                    <Projects />
                </Fade>
            </p>
        </div>
    )
}

export default Home
