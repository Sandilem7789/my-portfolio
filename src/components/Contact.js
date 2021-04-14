import React, { useState } from 'react'
import { Button, Fade } from "reactstrap";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Projects from "./Projects";

library.add(fab, faCheckSquare, faCoffee);


const Contact = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const toggle = () => setFadeIn(!fadeIn)
    return (
        <div className="container text-center">
            <h1>Contact</h1>
            <p className="aboutText">
                Feel free to contact me via email if you want to get in touch 
                with me or talk about a project 
                <br/>
                <a href="mailto:sandilem_1@live.com">
                    <FontAwesomeIcon icon={faEnvelope} size="5x" color="#1DA1F2"/>
                </a>
                <br/>
                <br/>
                <Button 
                    color="primary" 
                    outline onClick={toggle} 
                    className="mb-4" 
                >
                    View Projects I have Worked On</Button>
                <Fade in={fadeIn} hidden={!fadeIn} className="mt-3 text-center">
                    <Projects />
                </Fade>
                <br/>
                <br/>
            </p>
        </div>
    )
}

export default Contact
