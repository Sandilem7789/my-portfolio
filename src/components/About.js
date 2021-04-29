import React, { useState } from 'react'
import { Button, Fade } from "reactstrap";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Rotate from "react-reveal/Rotate";

import Projects from "./Projects";

library.add(fab);

//icons of my stack
const ToolsIcons = () => {
    return (
        <div className="row">
            <Rotate>
                <div className="col-md-1 col-3 offset-md-1">
                    <FontAwesomeIcon icon={["fab", "js-square"]} size="3x" color="#f0db4f"/>
                </div>
            </Rotate>
            <Rotate>
                <div className="col-md-1 col-3">
                    <FontAwesomeIcon icon={["fab", "css3"]} size="3x" color="#264de4"/>
                </div>
            </Rotate>
            <Rotate>
                <div className="col-md-1 col-3">
                    <FontAwesomeIcon icon={["fab", "html5"]} size="3x" color=" #f06529"/>
                </div>
            </Rotate>
            <Rotate>
                <div className="col-md-1 col-3">
                    <FontAwesomeIcon icon={["fab", "react"]} size="3x" color="#61DBFB"/>
                </div>
            </Rotate>
            <Rotate>
                <div className="col-md-1 col-3">
                    <FontAwesomeIcon icon={["fab", "bootstrap"]} size="3x" color="#563d7c"/>
                </div>
            </Rotate>
            <Rotate>
                <div className="col-md-1 col-3">
                    <FontAwesomeIcon icon={["fab", "node"]} size="3x" color="#68A063"/>
                </div>
            </Rotate>
            <Rotate>
                <div className="col-md-1 col-3">
                    <FontAwesomeIcon className="yarn" icon={["fab", "yarn"]} size="3x" color="#7743CE"/>
                </div>
            </Rotate>
            <Rotate>
                <div className="col-md-1 col-3">
                    <FontAwesomeIcon icon={["fab", "npm"]} size="3x" color="#CC3534"/>
                </div>
            </Rotate>
            <Rotate>
                <div className="col-md-1 col-3 offset-3 offset-md-0">
                    <FontAwesomeIcon icon={["fab", "github"]} size="3x" color="#4078c0"/>{" "}
                </div>
            </Rotate>
            <Rotate>
                <div className="col-md-1 col-3">
                    <FontAwesomeIcon icon={["fab", "git-square"]} size="3x" color="#f34f29"/>{" "}
                </div>
            </Rotate>
        </div>
    )
}

const Home = () => {

    const [fadeIn, setFadeIn] = useState(false);
    const [pfFadeIn, setPfFadeIn] = useState(false);

    const toggle = () => {
        setFadeIn(!fadeIn);
        setPfFadeIn(false);
    }

    const pfToggle = () => setPfFadeIn(!pfFadeIn); 

    return (
        <div className=" text-center">
            <div className="aboutText">
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="col-12 leftText">
                                I build functional and user-friendly web apps and websites.
                                <br />
                                <br />
                                <span className="in-my-builds">
                                    My tools: HTML, CSS, JavaScript, React.js, Bootstrap,
                                    Node.js, Express.js, SCSS, Gulp, Git, Github and npm
                                </span>
                                <br/>
                                <br/>
                            </div>
                        </div>
                        
                        <ToolsIcons />
                        <hr/>
                        
                        <Button color="primary" onClick={toggle} outline style={{marginBottom: "20px"}}>More About Me</Button>
                        <Rotate>
                        <Fade in={fadeIn} hidden={!fadeIn} className="mt-3">
                            <div className="row">
                                <div className="col-md-12 pl-5 leftText">
                                    My services are available for businesses looking to work with a developer to
                                    build web apps or a websites and also for 
                                    employers looking to add a valuable member on their Front-End web development team
                                    <br/><br/>
                                </div>
                                <div className="col-md-12 pl-5 pr-5 rightText">
                                    Feel free to contact me via <a href="mailto:sandilem_1@live.com">email</a> if you want get in touch. <br/>
                                    <a href="mailto:sandilem_1@live.com">
                                        <FontAwesomeIcon icon={faEnvelope} size="3x" color="#1DA1F2"/>
                                    </a>
                                    <br/>
                                </div>
                            </div>
                            
                            <Button 
                                color="primary" 
                                onClick={pfToggle} 
                                hidden={pfFadeIn && fadeIn} 
                                outline
                                className="mt-3 mb-5"
                            >
                                View Projects that I have built
                            </Button>
                        </Fade>
                        </Rotate>
                    </div>
                </div>
                <Fade in={pfFadeIn} hidden={!pfFadeIn} className="mt-3">
                    <Projects />
                </Fade>
            </div>
        </div>
    )
}

export default Home
