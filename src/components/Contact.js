import React, { useState } from 'react'
import { Button, Fade } from "reactstrap";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

import Projects from "./Projects";

library.add(fab, faCheckSquare, faCoffee);


const Contact = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const toggle = () => setFadeIn(!fadeIn)
    return (
        <div className="container text-center">
            <Zoom>
                <h1>Contact</h1>
            </Zoom>
            <p className="aboutText">
                Feel free to contact me via <a href="mailto:sandilem_1@live.com">email</a> should you want to get in touch 
                with me or talk about a project 
                <br/>
                <Flip>
                    <a href="mailto:sandilem_1@live.com">
                        <FontAwesomeIcon icon={faEnvelope} size="5x" color="#1DA1F2"/>
                    </a>
                </Flip>
                <br/>
                <br/>
                <Button 
                    color="primary" 
                    outline onClick={toggle}
                    hidden={fadeIn} 
                    className="mb-4 mt-3" 
                    href="#projects"
                >
                    View Projects I have Worked On
                </Button>
                <Button 
                    color="primary" 
                    outline onClick={toggle}
                    hidden={!fadeIn} 
                    className="mb-4 mt-3" 
                    href="#projects"
                >
                    Hide Projects I have Worked On
                </Button>
                <div id="projects"></div>
                <Fade in={fadeIn} hidden={!fadeIn} className="mt-4 text-center">
                    <Projects />
                </Fade>
                <br/>
                <br/>
            </p>
        </div>
    )
}

export default Contact
