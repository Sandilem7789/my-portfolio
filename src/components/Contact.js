import React, { useState } from 'react'
import { Button, Fade } from "reactstrap";
import Projects from "./Projects";

const Contact = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const toggle = () => setFadeIn(!fadeIn)
    return (
        <div className="container text-center">
            <h1>Contact</h1>
            <p className="aboutText">
                Feel free to contact me via email if you want to get in touch 
                with me or talk about a project 
                <br/><br/>
                <Button 
                    color="primary" 
                    outline onClick={toggle} 
                    className="mb-4" 
                >
                    View Projects I have Worked On</Button>
                <Fade in={fadeIn} hidden={!fadeIn} className="mt-3 text-center">
                    <Projects />
                </Fade>
            </p>
        </div>
    )
}

export default Contact
